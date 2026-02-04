// ================== CONFIG ==================
const HACKATHON_DURATION_MIN = 60;
const MAX_WARNINGS = 10;
const LOCK_DAYS = 20;
const LOCK_MS = LOCK_DAYS * 24 * 60 * 60 * 1000;
const ADMIN_RESET_CODE = "JJ5533!jj5533";

const WRONG_PENALTY_PER_ANSWER = 2;
const UNANSWERED_PENALTY_PER_5 = 2;

// ================== GLOBAL STATE ==================
let chosenQuestions = [];
let currentSetIndex = 0;
let userAnswers = {};
let currentUser = null;
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerId = null;
let warnings = 0;
let violationReasons = [];
let quizFinished = false;
let inExam = false;
let lastWarningTime = 0;
let setsCount = 3;

// ================== HELPERS ==================
const $ = (id) => document.getElementById(id);

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ================== TIMER ==================
function startTimer() {
  $("timer").textContent = formatTime(remainingSeconds);
  timerId = setInterval(() => {
    remainingSeconds--;
    $("timer").textContent = formatTime(remainingSeconds);
    if (remainingSeconds <= 0) autoSubmit("time");
  }, 1000);
}

// ================== WARNINGS ==================
function issueWarning(reason) {
  if (!inExam || quizFinished) return;

  const now = Date.now();
  if (now - lastWarningTime < 3000) return;
  lastWarningTime = now;

  warnings++;
  $("warningCount").textContent = warnings;
  $("liveWarningMsg").textContent = reason;

  if (!violationReasons.includes(reason)) violationReasons.push(reason);
  if (warnings >= MAX_WARNINGS) autoSubmit("violation");
}

// ================== SAVE / LOAD ==================
function saveProgress() {
  if (!currentUser) return;
  localStorage.setItem("hack_progress_" + currentUser.email, JSON.stringify({
    userAnswers,
    currentSetIndex,
    remainingSeconds
  }));
}

function loadProgress(email) {
  const data = localStorage.getItem("hack_progress_" + email);
  if (!data) return false;
  const parsed = JSON.parse(data);
  userAnswers = parsed.userAnswers || {};
  currentSetIndex = parsed.currentSetIndex || 0;
  remainingSeconds = parsed.remainingSeconds || HACKATHON_DURATION_MIN * 60;
  return true;
}

// ================== QUESTIONS ==================
function pickQuestionsForExam() {
  const shuffled = [...questionBank];
  shuffleArray(shuffled);
  chosenQuestions = shuffled.slice(0, 30);
}

function renderCurrentSet() {
  const container = $("questionsBox");
  container.innerHTML = "";

  const startIdx = currentSetIndex * 10;
  const questions = chosenQuestions.slice(startIdx, startIdx + 10);

  questions.forEach((q, idx) => {
    const block = document.createElement("div");
    block.className = "questionBlock";
    block.innerHTML = `<p>Q${startIdx + idx + 1}. ${q.text}</p>`;

    q.options.forEach((opt) => {
      const val = opt.charAt(0);
      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = val;
      if (userAnswers[q.id] === val) input.checked = true;

      input.addEventListener("change", () => {
        userAnswers[q.id] = val;
        updateAttemptStats();
        saveProgress();
      });

      block.appendChild(input);
      block.appendChild(document.createTextNode(" " + opt));
      block.appendChild(document.createElement("br"));
    });

    container.appendChild(block);
  });

  updateAttemptStats();
}

// ================== SCORE ==================
function computeResultDetailed() {
  let correctMarks = 0, correctCount = 0, wrongCount = 0, unansweredCount = 0;

  chosenQuestions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans) unansweredCount++;
    else if (ans === q.correct) {
      correctMarks += q.marks;
      correctCount++;
    } else wrongCount++;
  });

  const wrongPenalty = wrongCount * WRONG_PENALTY_PER_ANSWER;
  const unansweredPenalty = Math.floor(unansweredCount / 5) * UNANSWERED_PENALTY_PER_5;

  let finalScore = correctMarks - wrongPenalty - unansweredPenalty;
  if (finalScore < 0) finalScore = 0;

  if ((correctCount + wrongCount) >= 3 && finalScore < 3) finalScore = 3;

  return { finalScore, correctCount, wrongCount, unansweredCount, wrongPenalty, unansweredPenalty, correctMarks };
}

// ================== RESULT ==================
function showResult(score, breakdown) {
  $("finalScore").textContent = `Your Score: ${score} / 100`;

  $("resultBadgeBox").innerHTML = `
    <div class="violationBox">
      <p><strong>Result Breakdown:</strong></p>
      <ul class="violationList">
        <li>Correct: ${breakdown.correctCount}</li>
        <li>Wrong: ${breakdown.wrongCount}</li>
        <li>Unanswered: ${breakdown.unansweredCount}</li>
        <li>Marks from Correct: +${breakdown.correctMarks}</li>
        <li>Negative (Wrong): −${breakdown.wrongPenalty}</li>
        <li>Negative (Unanswered): −${breakdown.unansweredPenalty}</li>
      </ul>
    </div>
  `;

  showSection("resultSection");
}

// ================== FINISH ==================
function finishQuiz() {
  const result = computeResultDetailed();
  showResult(result.finalScore, result);
}

function autoSubmit() {
  if (!quizFinished) finishQuiz();
}

// ================== UI ==================
function showSection(id) {
  document.querySelectorAll(".pageSection").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

function updateAttemptStats() {
  $("attemptStats").textContent = `${Object.keys(userAnswers).length} / ${chosenQuestions.length}`;
}

// ================== START ==================
function startExam() {
  inExam = true;
  pickQuestionsForExam();
  renderCurrentSet();
  startTimer();
  setInterval(saveProgress, 10000);
  showSection("examSection");
}

// ================== DOM ==================
document.addEventListener("DOMContentLoaded", () => {
  $("startBtn").onclick = () => {
    const email = $("email").value.trim();
    currentUser = { email };
    loadProgress(email);
    startExam();
  };

  $("nextSetBtn").onclick = () => {
    if (++currentSetIndex < setsCount) renderCurrentSet();
    else autoSubmit();
  };

  $("adminResetBtn").onclick = () => {
    if ($("resetCode").value === ADMIN_RESET_CODE) {
      localStorage.clear();
      alert("Reset successful.");
      showSection("loginSection");
    } else alert("Invalid Reset Code");
  };
});
