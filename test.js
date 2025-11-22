// CONFIG
const HACKATHON_DURATION_MIN = 60;
const MAX_WARNINGS = 5;
const QUESTIONS_PER_SET = 10;
const LOCK_KEY = "global_hackathon_last_attempt";

// No-movement detection
const NO_MOTION_INTERVAL_SEC = 5;
const NO_MOTION_THRESHOLD_CHECKS = Math.ceil(55 / NO_MOTION_INTERVAL_SEC);
const NOISE_THRESHOLD = 0.08;

// QUESTIONS array same as earlier (30 Qs)
const QUESTIONS = [ /* same 30 question objects as in previous answer */ ];
// --- To keep answer short: reuse QUESTIONS from the last script.js I gave you.
// Paste the full QUESTIONS array from that file here without changes. ---

// STATE
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerInterval = null;
let quizFinished = false;
let shuffledQuestions = [];
let currentSetIndex = 0;
let answers = {};

let mediaStream = null;
let audioContext = null;
let noiseCheckInterval = null;
let cameraCheckInterval = null;
let motionCheckInterval = null;
let warningCount = 0;
let violationReasons = [];
let previousFrameData = null;
let stillFrameChecks = 0;

let candidateName = "";
let candidateEmail = "";

// Helpers
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function setLock() {
  localStorage.setItem(LOCK_KEY, String(Date.now()));
}

function playBeep() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 880;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
    osc.stop(ctx.currentTime + 0.3);
  } catch {}
}

document.addEventListener("DOMContentLoaded", () => {
  const userDataRaw = sessionStorage.getItem("hackathon_user");
  if (!userDataRaw) {
    alert("Session expired or direct access. Please start again from the home page.");
    window.location.href = "index.html";
    return;
  }
  const userData = JSON.parse(userDataRaw);
  candidateName = userData.name;
  candidateEmail = userData.email;

  const proctorOverlay = document.getElementById("proctorOverlay");
  const cameraFeed = document.getElementById("cameraFeed");
  const overlayCandidate = document.getElementById("overlayCandidate");
  const overlayTime = document.getElementById("overlayTime");
  const overlayWarnings = document.getElementById("overlayWarnings");
  const warningBanner = document.getElementById("warningBanner");

  const examNameLine = document.getElementById("examNameLine");
  const examStatusLine = document.getElementById("examStatusLine");
  const userInfoDisplay = document.getElementById("userInfoDisplay");
  const timerEl = document.getElementById("timer");
  const setInfoEl = document.getElementById("setInfo");
  const questionsContainer = document.getElementById("questionsContainer");
  const nextSetBtn = document.getElementById("nextSetBtn");
  const submitBtn = document.getElementById("submitBtn");

  function updateExamStatus() {
    const totalSeconds = HACKATHON_DURATION_MIN * 60;
    let used = totalSeconds - remainingSeconds;
    if (used < 0) used = 0;
    const timeUsed = formatTime(used);
    const attempted = Object.keys(answers).length;

    examNameLine.textContent =
      `Name: ${candidateName}, Email-ID: ${candidateEmail}`;
    examStatusLine.textContent =
      `Time used: ${timeUsed} | Warnings: ${warningCount} / ${MAX_WARNINGS} | Attempted ${attempted} Questions`;
  }

  function updateWarningUI(reason) {
    overlayWarnings.textContent = `Warnings: ${warningCount} / ${MAX_WARNINGS}`;
    warningBanner.textContent = `⚠ ${reason} (Warning ${warningCount} of ${MAX_WARNINGS})`;
    warningBanner.classList.remove("hidden");
    playBeep();
    setTimeout(() => warningBanner.classList.add("hidden"), 4000);
  }

  function issueWarning(reason) {
    if (quizFinished) return;
    warningCount++;
    violationReasons.push(reason);
    updateWarningUI(reason);
    updateExamStatus();
    if (warningCount >= MAX_WARNINGS) {
      finishQuiz(true, "violation");
    }
  }

  async function startProctoring() {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    } catch (err) {
      alert("Camera and microphone access are required to start the hackathon.");
      window.location.href = "index.html";
      throw err;
    }

    cameraFeed.srcObject = mediaStream;
    proctorOverlay.classList.remove("hidden");
    document.body.classList.add("with-overlay");

    // Audio monitor
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();
      const source = audioContext.createMediaStreamSource(mediaStream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      const dataArray = new Uint8Array(analyser.fftSize);

      noiseCheckInterval = setInterval(() => {
        if (quizFinished) return;

        analyser.getByteTimeDomainData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          const v = (dataArray[i] - 128) / 128;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / dataArray.length);

        const audioTracks = mediaStream.getAudioTracks();
        if (audioTracks.length) {
          const track = audioTracks[0];
          if (!track.enabled || track.muted) {
            issueWarning("Microphone seems muted or blocked.");
          } else if (rms > NOISE_THRESHOLD) {
            issueWarning("High background noise / talking detected.");
          }
        }
      }, 7000);
    } catch {}

    // Camera track monitor
    cameraCheckInterval = setInterval(() => {
      if (quizFinished) return;
      const videoTracks = mediaStream.getVideoTracks();
      if (!videoTracks.length || videoTracks[0].readyState !== "live") {
        issueWarning("Camera turned off or disconnected.");
      }
    }, 7000);

    // Motion / darkness
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    motionCheckInterval = setInterval(() => {
      if (quizFinished) return;
      if (!cameraFeed.videoWidth || !cameraFeed.videoHeight) return;

      canvas.width = cameraFeed.videoWidth;
      canvas.height = cameraFeed.videoHeight;
      ctx.drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      let brightnessSum = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        brightnessSum += (r + g + b) / 3;
      }
      const avgBrightness = brightnessSum / (data.length / 4);
      if (avgBrightness < 20) {
        issueWarning("Camera seems covered or too dark.");
      }

      if (previousFrameData) {
        let diffSum = 0;
        const length = data.length;
        for (let i = 0; i < length; i += 4 * 20) {
          const dr = data[i] - previousFrameData[i];
          const dg = data[i + 1] - previousFrameData[i + 1];
          const db = data[i + 2] - previousFrameData[i + 2];
          diffSum += Math.abs(dr) + Math.abs(dg) + Math.abs(db);
        }
        const avgDiff = diffSum / (length / (4 * 20));
        if (avgDiff < 10) {
          stillFrameChecks++;
          if (stillFrameChecks >= NO_MOTION_THRESHOLD_CHECKS) {
            issueWarning("No face / no movement detected for a while.");
            stillFrameChecks = 0;
          }
        } else {
          stillFrameChecks = 0;
        }
      }

      previousFrameData = new Uint8ClampedArray(data);
    }, NO_MOTION_INTERVAL_SEC * 1000);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !quizFinished) {
        issueWarning("Tab or window change detected.");
      }
    });
  }

  function cleanupProctoring() {
    try {
      if (noiseCheckInterval) clearInterval(noiseCheckInterval);
      if (cameraCheckInterval) clearInterval(cameraCheckInterval);
      if (motionCheckInterval) clearInterval(motionCheckInterval);
      if (audioContext) audioContext.close();
      if (mediaStream) mediaStream.getTracks().forEach(t => t.stop());
    } catch {}
    proctorOverlay.classList.add("hidden");
    document.body.classList.remove("with-overlay");
  }

  function updateTimerDisplay() {
    const text = `Time Left: ${formatTime(remainingSeconds)}`;
    document.getElementById("timer").textContent = text;
    overlayTime.textContent = text;
  }

  function startTimer(onTimeUp) {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) {
        remainingSeconds = 0;
        clearInterval(timerInterval);
        updateTimerDisplay();
        updateExamStatus();
        if (!quizFinished) onTimeUp("time");
      } else {
        updateTimerDisplay();
        updateExamStatus();
      }
    }, 1000);
  }

  function renderCurrentSet() {
    const totalSets = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_SET);
    const setNumber = currentSetIndex + 1;
    setInfoEl.textContent = `Set ${setNumber} of ${totalSets}`;

    const startIndex = currentSetIndex * QUESTIONS_PER_SET;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_SET, shuffledQuestions.length);
    const slice = shuffledQuestions.slice(startIndex, endIndex);

    questionsContainer.innerHTML = "";
    slice.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "question-card";

      const header = document.createElement("div");
      header.className = "question-header";
      header.textContent = `Q${startIndex + idx + 1} (${q.marks} marks)`;
      card.appendChild(header);

      const textEl = document.createElement("div");
      textEl.className = "question-text";
      textEl.textContent = q.text;
      card.appendChild(textEl);

      q.options.forEach((opt, optIndex) => {
        const optWrap = document.createElement("div");
        optWrap.className = "option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q_${q.id}`;
        input.value = String(optIndex);
        if (answers[q.id] === optIndex) input.checked = true;
        input.addEventListener("change", () => {
          answers[q.id] = optIndex;
          updateExamStatus();
        });

        const label = document.createElement("label");
        label.textContent = `${String.fromCharCode(65 + optIndex)}) ${opt}`;

        optWrap.appendChild(input);
        optWrap.appendChild(label);
        card.appendChild(optWrap);
      });

      questionsContainer.appendChild(card);
    });

    if (currentSetIndex < 2) {
      nextSetBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    } else {
      nextSetBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    }
  }

  function finishQuiz(autoSubmitted, reasonCode) {
    if (quizFinished) return;
    quizFinished = true;

    if (timerInterval) clearInterval(timerInterval);
    cleanupProctoring();
    setLock();

    let totalScore = 0;
    let totalMarks = 0;
    let unansweredCount = 0;
    let correctCount = 0;
    let wrongCount = 0;

    shuffledQuestions.forEach(q => {
      totalMarks += q.marks || 0;
      const ans = answers[q.id];
      if (ans === undefined) {
        unansweredCount++;
      } else if (ans === q.correctIndex) {
        correctCount++;
        totalScore += q.marks || 0;
      } else {
        wrongCount++;
        totalScore -= 1; // wrong
      }
    });

    const unansweredPenalty = Math.floor(unansweredCount / 3);
    totalScore -= unansweredPenalty;

    let normalizedScore;
    if (totalMarks > 0 && totalMarks !== 100) {
      normalizedScore = Math.round((totalScore / totalMarks) * 100);
    } else {
      normalizedScore = totalScore;
    }
    if (normalizedScore > 100) normalizedScore = 100;
    const displayScore = Math.max(0, normalizedScore);

    // Category
    let category = "participation";
    let remark = "";
    const violationAuto = autoSubmitted && reasonCode === "violation";

    if (!violationAuto) {
      if (displayScore >= 90) {
        category = "champion";
        remark = "Congratulations! You are now Eligible for 2nd round interview for paid internship.";
      } else if (displayScore >= 70) {
        category = "winner";
        remark = "Congratulations! You are now Eligible to choose 2nd round interview for paid internship or you can skip and choose un-paid internship.";
      } else {
        category = "participation";
        remark = "Congratulations! You are now Eligible to choose un-paid internship.";
      }
    } else {
      remark = "Your session got closed due to violation so email to admin and request for 1 more attempt and make sure you take it serious support@careerdirection.co.in";
    }

    const resultData = {
      name: candidateName,
      email: candidateEmail,
      score: displayScore,
      category,
      autoSubmitted,
      reasonCode: reasonCode || null,
      violations: violationReasons,
      correctCount,
      wrongCount,
      unansweredCount,
      remark
    };

    localStorage.setItem("hackathon_result", JSON.stringify(resultData));
    window.location.href = "result.html";
  }

  function preventBackNavigation() {
    history.pushState(null, "", location.href);
    window.onpopstate = function () {
      history.pushState(null, "", location.href);
      alert("Back navigation is disabled during the hackathon.");
    };
  }

  function enableCheatRestrictions() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      issueWarning("Right-click / context menu is blocked during the exam.");
    });

    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && ["c", "v", "x", "s", "u", "p"].includes(e.key.toLowerCase())) {
        e.preventDefault();
        issueWarning("Keyboard shortcuts for copy/save/inspect are blocked during the exam.");
      }
      if (e.key === "F12") {
        e.preventDefault();
        issueWarning("Developer tools access is blocked during the exam.");
      }
    });
  }

  // ==== INIT TEST PAGE ====
  userInfoDisplay.textContent = `${candidateName} | ${candidateEmail}`;
  overlayCandidate.textContent = `Candidate: ${candidateName}`;
  overlayWarnings.textContent = `Warnings: 0 / ${MAX_WARNINGS}`;
  overlayTime.textContent = `Time Left: ${formatTime(remainingSeconds)}`;

  shuffledQuestions = shuffleArray(QUESTIONS);
  renderCurrentSet();
  updateExamStatus();

  startProctoring().then(() => {
    startTimer((reason) => finishQuiz(true, reason));
    preventBackNavigation();
    enableCheatRestrictions();
  });

  nextSetBtn.addEventListener("click", () => {
    if (quizFinished) return;
    if (currentSetIndex < 2) {
      currentSetIndex++;
      renderCurrentSet();
    }
  });

  submitBtn.addEventListener("click", () => {
    if (quizFinished) return;
    if (confirm("Are you sure you want to submit your answers now?")) {
      finishQuiz(false, null);
    }
  });
});
