// ================= CONFIG =================
const EXAM_DURATION_MIN = 40;
const QUESTIONS_PER_EXAM = 30;
const MAX_WARNINGS = 10;
const LOCK_DAYS = 15;
const ADMIN_RESET_CODE = "JJ5533!jj5533";
const WRONG_PENALTY = 2;

// ================= SAMPLE QUESTIONS (ADD MORE LATER) =================
const questionBank = [
{id:"Q1",marks:4,text:"Worst-case search in separate chaining?",options:["A) O(1)","B) O(log n)","C) O(n)","D) O(n log n)"],correct:"C"},
{id:"Q2",marks:4,text:"BST traversal for descending order?",options:["A) Inorder","B) Preorder","C) Reverse Inorder","D) Postorder"],correct:"C"},
{id:"Q3",marks:4,text:"Best DS for LRU cache?",options:["A) Queue+Stack","B) HashMap+DLL","C) Heap+Array","D) BST+Queue"],correct:"B"},
{id:"Q4",marks:4,text:"Heap build time (n elements)?",options:["A) O(n log n)","B) O(n)","C) O(log n)","D) O(n²)"],correct:"B"},
{id:"Q5",marks:4,text:"Detect cycle in directed graph?",options:["A) BFS","B) DFS + stack","C) Prim","D) Kruskal"],correct:"B"},
{id:"Q6",marks:4,text:"Classic DP problem?",options:["A) Binary Search","B) 0/1 Knapsack","C) BFS","D) Toposort"],correct:"B"},
{id:"Q7",marks:4,text:"Amortized append time (dynamic array)?",options:["A) O(n)","B) O(log n)","C) O(1)","D) O(n log n)"],correct:"C"},
{id:"Q8",marks:4,text:"NOT a deadlock condition?",options:["A) Mutual exclusion","B) Hold & wait","C) Preemption","D) Circular wait"],correct:"C"},
{id:"Q9",marks:4,text:"Thrashing caused by?",options:["A) CPU overuse","B) Excess paging","C) Disk fragmentation","D) Deadlock"],correct:"B"},
{id:"Q10",marks:4,text:"Scheduling that can cause starvation?",options:["A) FCFS","B) Round Robin","C) Priority","D) FIFO"],correct:"C"},

{id:"Q11",marks:4,text:"Removes transitive dependency?",options:["A) 1NF","B) 2NF","C) 3NF","D) BCNF"],correct:"C"},
{id:"Q12",marks:4,text:"Atomicity failure causes?",options:["A) Partial commit","B) Full rollback","C) Permanent lock","D) Ignore"],correct:"B"},
{id:"Q13",marks:4,text:"Best index for range queries?",options:["A) Hash","B) B-Tree","C) Bitmap","D) Full Text"],correct:"B"},
{id:"Q14",marks:4,text:"AWS service for traffic distribution?",options:["A) Route 53","B) CloudFront","C) ELB","D) Auto Scaling"],correct:"C"},
{id:"Q15",marks:4,text:"Containers differ from VMs because they:",options:["A) Separate kernels","B) Share host kernel","C) Need hypervisor","D) Can’t scale"],correct:"B"},
{id:"Q16",marks:4,text:"A Kubernetes Pod can have:",options:["A) One container","B) Multiple containers","C) Only stateless apps","D) Background services only"],correct:"B"},
{id:"Q17",marks:4,text:"OSI layer for reliable delivery?",options:["A) Network","B) Transport","C) Data Link","D) Session"],correct:"B"},
{id:"Q18",marks:4,text:"ARP is used to:",options:["A) Encrypt data","B) IP → MAC","C) Assign IP","D) Route packets"],correct:"B"},
{id:"Q19",marks:4,text:"TCP 3-way handshake?",options:["A) SYN→ACK→SYN-ACK","B) SYN→SYN-ACK→ACK","C) ACK→SYN→ACK","D) SYN-ACK→SYN→ACK"],correct:"B"},
{id:"Q20",marks:4,text:"Best use of eventual consistency?",options:["A) Banking","B) Payments","C) Social media likes","D) Inventory"],correct:"C"},

{id:"Q21",marks:3,text:"Avg O(1) lookup DS?",options:["A) AVL","B) Hash Table","C) Heap","D) Linked List"],correct:"B"},
{id:"Q22",marks:3,text:"Shortest path (no negative edges)?",options:["A) BFS","B) DFS","C) Dijkstra","D) Bellman-Ford"],correct:"C"},
{id:"Q23",marks:3,text:"Causes external fragmentation?",options:["A) Paging","B) Segmentation","C) Virtual Memory","D) Caching"],correct:"B"},
{id:"Q24",marks:3,text:"Filters grouped SQL records?",options:["A) WHERE","B) GROUP BY","C) HAVING","D) ORDER BY"],correct:"C"},
{id:"Q25",marks:3,text:"Auto resource scaling feature?",options:["A) Virtualization","B) Elasticity","C) Multi-tenancy","D) Abstraction"],correct:"B"},
{id:"Q26",marks:3,text:"Maintains pod replicas?",options:["A) Node","B) ReplicaSet","C) Service","D) Volume"],correct:"B"},
{id:"Q27",marks:3,text:"App-layer file transfer protocol?",options:["A) TCP","B) FTP","C) IP","D) ARP"],correct:"B"},
{id:"Q28",marks:3,text:"Unstable sorting algorithm?",options:["A) Merge","B) Insertion","C) Heap","D) Bubble"],correct:"C"},
{id:"Q29",marks:3,text:"Threads waiting forever?",options:["A) Starvation","B) Deadlock","C) Thrashing","D) Livelock"],correct:"B"},
{id:"Q30",marks:3,text:"Idempotent HTTP method?",options:["A) POST","B) GET","C) PATCH","D) CONNECT"],correct:"B"},

{id:"Q31",marks:3,text:"OSI layer for encryption/compression?",options:["A) App","B) Transport","C) Presentation","D) Session"],correct:"C"},
{id:"Q32",marks:3,text:"Git command rewriting history?",options:["A) merge","B) rebase","C) commit","D) push"],correct:"B"},
{id:"Q33",marks:3,text:"Equal time-slice scheduling?",options:["A) SJF","B) FCFS","C) Round Robin","D) Priority"],correct:"C"},
{id:"Q34",marks:3,text:"LSM-tree storage engine?",options:["A) InnoDB","B) RocksDB","C) MyISAM","D) B-Tree"],correct:"B"},
{id:"Q35",marks:3,text:"AWS serverless compute?",options:["A) EC2","B) ECS","C) Lambda","D) Batch"],correct:"C"},
{id:"Q36",marks:3,text:"Breaks broadcast domain?",options:["A) Hub","B) Switch","C) Router","D) Repeater"],correct:"C"},
{id:"Q37",marks:3,text:"Topological sort algorithm?",options:["A) BFS (Kahn)","B) Dijkstra","C) Prim","D) Floyd"],correct:"A"},
{id:"Q38",marks:3,text:"Prevents dirty reads?",options:["A) Read Uncommitted","B) Read Committed","C) Repeatable Read","D) Serializable"],correct:"B"},
{id:"Q39",marks:3,text:"Small, frequent deployments?",options:["A) CI","B) CD","C) Continuous Deployment","D) Waterfall"],correct:"C"},
{id:"Q40",marks:3,text:"Best for undo/redo?",options:["A) Queue","B) Stack","C) Tree","D) Graph"],correct:"B"},

{id:"Q41",marks:3,text:"Find SCCs algorithm?",options:["A) Dijkstra","B) Prim","C) Kosaraju","D) Kruskal"],correct:"C"},
{id:"Q42",marks:3,text:"Secure remote login protocol?",options:["A) FTP","B) Telnet","C) SSH","D) SMTP"],correct:"C"},
{id:"Q43",marks:3,text:"AWS object storage?",options:["A) EC2","B) S3","C) RDS","D) Lambda"],correct:"B"},
{id:"Q44",marks:3,text:"Join with matching rows only?",options:["A) LEFT","B) RIGHT","C) INNER","D) FULL"],correct:"C"},
{id:"Q45",marks:3,text:"Routing algo used by OSPF?",options:["A) Kruskal","B) Bellman-Ford","C) Dijkstra","D) Prim"],correct:"C"},
{id:"Q46",marks:3,text:"Priority queue DS?",options:["A) Stack","B) Heap","C) Queue","D) Linked List"],correct:"B"},
{id:"Q47",marks:3,text:"Handles process scheduling?",options:["A) Shell","B) Kernel","C) BIOS","D) Driver"],correct:"B"},
{id:"Q48",marks:3,text:"Resolves domain to IP?",options:["A) ARP","B) DNS","C) DHCP","D) ICMP"],correct:"B"},
{id:"Q49",marks:3,text:"HTTP status for Forbidden?",options:["A) 200","B) 301","C) 403","D) 500"],correct:"C"},
{id:"Q50",marks:3,text:"Single-instance design pattern?",options:["A) Factory","B) Observer","C) Singleton","D) Adapter"],correct:"C"},

{id:"Q51",marks:4,text:"Output of (lambda x:x**2)(3)?",options:["A) 6","B) 9","C) 3","D) Error"],correct:"B"},
{id:"Q52",marks:4,text:"Output of [i for i in range(5) if i%2]?",options:["A) [0,2,4]","B) [1,3]","C) [1,2,3]","D) Error"],correct:"B"},
{id:"Q53",marks:4,text:"Output of bool('')?",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q54",marks:4,text:"0.1+0.2 == 0.3?",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q55",marks:4,text:"{1,2,3} & {3,4,5}?",options:["A) {1,2,3,4,5}","B) {3}","C) {1,2}","D) Error"],correct:"B"},
{id:"Q56",marks:4,text:"[i*i for i in range(4) if i%2==0]?",options:["A) [1,9]","B) [0,4]","C) [4,16]","D) Error"],correct:"B"},
{id:"Q57",marks:4,text:"type({})?",options:["A) set","B) dict","C) list","D) Error"],correct:"B"},
{id:"Q58",marks:4,text:"'Python'[-3:]?",options:["A) hon","B) tho","C) yth","D) Error"],correct:"A"},
{id:"Q59",marks:4,text:"5 is 5.0?",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q60",marks:4,text:"[] == False?",options:["A) True","B) False","C) Error","D) None"],correct:"B"},

{id:"Q61",marks:4,text:"(1,2)*2?",options:["A) (1,2,1,2)","B) (2,4)","C) Error","D) None"],correct:"A"},
{id:"Q62",marks:4,text:"{1,2,3}.pop()?",options:["A) 1","B) 3","C) Random","D) Error"],correct:"C"},
{id:"Q63",marks:4,text:"{i:i*i for i in range(2,5)}?",options:["A) {2:4,3:9,4:16}","B) [4,9,16]","C) (4,9,16)","D) Error"],correct:"A"},
{id:"Q64",marks:4,text:"a=[1,2,3]; b=a[:]; b+4 → a?",options:["A) [1,2,3,4]","B) [1,2,3]","C) Error","D) None"],correct:"B"},
{id:"Q65",marks:4,text:"sum({1,2,3})?",options:["A) 6","B) {1,2,3}","C) Error","D) None"],correct:"A"},
{id:"Q66",marks:4,text:"sorted('cab')?",options:["A) ['c','a','b']","B) ['a','b','c']","C) cab","D) Error"],correct:"B"},
{id:"Q67",marks:4,text:"'abc'*0?",options:["A) abc","B) ''","C) Error","D) None"],correct:"B"},
{id:"Q68",marks:4,text:"[1,2]+[3,4]?",options:["A) [1,2,3,4]","B) [4,6]","C) Error","D) None"],correct:"A"},
{id:"Q69",marks:4,text:"10//3 , 10%3?",options:["A) 3 1","B) 3.3 1","C) 3 0","D) Error"],correct:"A"},
{id:"Q70",marks:4,text:"len({True,1,1.0})?",options:["A) 3","B) 1","C) 2","D) Error"],correct:"B"},

{id:"Q71",marks:3,text:"bool(None)?",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q72",marks:3,text:"2**3**2?",options:["A) 64","B) 512","C) 256","D) Error"],correct:"B"},
{id:"Q73",marks:3,text:"list(range(-3))?",options:["A) [-3,-2,-1]","B) []","C) Error","D) None"],correct:"B"},
{id:"Q74",marks:3,text:"{}.get('a',5)?",options:["A) None","B) 5","C) Error","D) 'a'"],correct:"B"},
{id:"Q75",marks:3,text:"'abc'.islower()?",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q76",marks:3,text:"'ABC'.lower()?",options:["A) abc","B) ABC","C) Error","D) None"],correct:"A"},
{id:"Q77",marks:3,text:"{1,2} ⊆ {1,2,3}?",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q78",marks:3,text:"divmod(10,4)?",options:["A) (2,2)","B) (4,2)","C) (2,4)","D) Error"],correct:"A"},
{id:"Q79",marks:3,text:"min([3,1,2])?",options:["A) 3","B) 1","C) 2","D) Error"],correct:"B"},
{id:"Q80",marks:3,text:"max('azby')?",options:["A) a","B) z","C) y","D) Error"],correct:"B"},

{id:"Q81",marks:3,text:"5 != '5'?",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q82",marks:3,text:"bool([False])?",options:["A) False","B) True","C) Error","D) None"],correct:"B"},
{id:"Q83",marks:3,text:"[].append(1)?",options:["A) [1]","B) None","C) Error","D) 1"],correct:"B"},
{id:"Q84",marks:3,text:"type({1})?",options:["A) dict","B) set","C) tuple","D) list"],correct:"B"},
{id:"Q85",marks:3,text:"int(True)?",options:["A) 0","B) 1","C) True","D) Error"],correct:"B"},
{id:"Q86",marks:3,text:"float('inf') > 1e308?",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q87",marks:3,text:"len('🐍')?",options:["A) 1","B) 2","C) 4","D) Error"],correct:"A"},
{id:"Q88",marks:3,text:"'abc'.startswith('a')?",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q89",marks:3,text:"'abc'.endswith('c')?",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q90",marks:3,text:"list(map(str,[1,2,3]))?",options:["A) ['1','2','3']","B) [1,2,3]","C) Error","D) None"],correct:"A"},

{id:"Q91",marks:3,text:"{}.fromkeys([1,2],0)?",options:["A) {1:0,2:0}","B) {0:1,0:2}","C) Error","D) None"],correct:"A"},
{id:"Q92",marks:3,text:"abs(3+4j)?",options:["A) 7","B) 5.0","C) Error","D) None"],correct:"B"},
{id:"Q93",marks:3,text:"round(2.675,2)?",options:["A) 2.68","B) 2.67","C) Error","D) None"],correct:"B"},
{id:"Q94",marks:3,text:"bool({})?",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q95",marks:3,text:"' '.join(['a','b','c'])?",options:["A) abc","B) a b c","C) ['a','b','c']","D) Error"],correct:"B"},
{id:"Q96",marks:3,text:"'hello'.title()?",options:["A) Hello","B) HELLO","C) hello","D) Error"],correct:"A"},
{id:"Q97",marks:3,text:"sorted({3,1,2})?",options:["A) [1,2,3]","B) {1,2,3}","C) Error","D) None"],correct:"A"},
{id:"Q98",marks:3,text:"bin(10)?",options:["A) 1010","B) 0b1010","C) Error","D) None"],correct:"B"},
{id:"Q99",marks:3,text:"hex(255)?",options:["A) ff","B) 0xff","C) Error","D) None"],correct:"B"},
{id:"Q100",marks:3,text:"oct(8)?",options:["A) 10","B) 0o10","C) Error","D) None"],correct:"B"},


{id:"Q101",marks:4,text:"Overfitting sign?",options:["A) Train low, Test high","B) Train high, Test low","C) Both low","D) Both high"],correct:"B"},
{id:"Q102",marks:4,text:"Abs(weights) regularization?",options:["A) L2","B) Dropout","C) L1","D) BatchNorm"],correct:"C"},
{id:"Q103",marks:4,text:"Precision > Accuracy?",options:["A) Balanced","B) Regression","C) Rare positive","D) Large data"],correct:"C"},
{id:"Q104",marks:4,text:"Non-linear boundary w/o features?",options:["A) Linear Reg","B) Logistic Reg","C) Decision Tree","D) Naive Bayes"],correct:"C"},
{id:"Q105",marks:4,text:"High learning rate?",options:["A) Faster converge","B) Oscillate/diverge","C) Local minima","D) Reduce overfit"],correct:"B"},
{id:"Q106",marks:4,text:"Threshold-independent metric?",options:["A) Accuracy","B) F1","C) ROC-AUC","D) Precision"],correct:"C"},
{id:"Q107",marks:4,text:"Prone to overfit on small data?",options:["A) Linear Reg","B) kNN (k=1)","C) Naive Bayes","D) Logistic Reg"],correct:"B"},
{id:"Q108",marks:4,text:"Reduce variance in ensemble?",options:["A) Boosting","B) Bagging","C) Regularization","D) Scaling"],correct:"B"},
{id:"Q109",marks:4,text:"PCA?",options:["A) Max class separability","B) Uses labels","C) Max variance","D) Always improves"],correct:"C"},
{id:"Q110",marks:4,text:"Multi-class loss?",options:["A) Hinge","B) MSE","C) Categorical CE","D) MAE"],correct:"C"},

{id:"Q111",marks:3,text:"Handle class imbalance?",options:["A) Standardize","B) SMOTE","C) PCA","D) Tokenize"],correct:"B"},
{id:"Q112",marks:3,text:"Tree complexity param?",options:["A) LR","B) Max depth","C) Batch","D) Dropout"],correct:"B"},
{id:"Q113",marks:3,text:"Backprop updates?",options:["A) K-Means","B) Linear Reg","C) Neural Net","D) PCA"],correct:"C"},
{id:"Q114",marks:3,text:"High sensitivity to noise?",options:["A) Bias","B) Variance","C) Reg","D) Norm"],correct:"B"},
{id:"Q115",marks:3,text:"Random feature subsets?",options:["A) Boosting","B) Random Forest","C) K-Means","D) GD"],correct:"B"},
{id:"Q116",marks:3,text:"Linear relation with log-odds?",options:["A) Linear Reg","B) Logistic Reg","C) SVM","D) KNN"],correct:"B"},
{id:"Q117",marks:3,text:"Evaluate stability across splits?",options:["A) Train-test","B) Cross-val","C) Reg","D) Dropout"],correct:"B"},
{id:"Q118",marks:3,text:"Reduce dim, preserve distances?",options:["A) PCA","B) t-SNE","C) Linear Reg","D) K-Means"],correct:"B"},
{id:"Q119",marks:3,text:"Underfitting sign?",options:["A) High train+test","B) Low train+test","C) High train only","D) High test only"],correct:"B"},
{id:"Q120",marks:3,text:"Sensitive to feature scaling?",options:["A) Decision Tree","B) KNN","C) Random Forest","D) Naive Bayes"],correct:"B"},


{id:"Q121",marks:4,text:"Adaptive optimizer?",options:["A) SGD","B) Momentum","C) Adam","D) Adagrad"],correct:"C"},
{id:"Q122",marks:4,text:"BatchNorm fixes?",options:["A) Overfit","B) Vanishing/Exploding","C) Imbalance","D) Underfit"],correct:"B"},
{id:"Q123",marks:4,text:"Unsupervised task?",options:["A) Stock pred","B) Spam class","C) Customer seg","D) Disease diag"],correct:"C"},
{id:"Q124",marks:4,text:"CNN translation invariance?",options:["A) Dense","B) Pooling","C) Activation","D) Dropout"],correct:"B"},
{id:"Q125",marks:4,text:"Seq-to-seq task?",options:["A) CNN","B) RNN Encoder-Decoder","C) KNN","D) Linear Reg"],correct:"B"},
{id:"Q126",marks:4,text:"Attention vs RNN?",options:["A) Smaller model","B) No labels","C) Long-range deps","D) Reduce overfit"],correct:"C"},
{id:"Q127",marks:4,text:"Ranking metric?",options:["A) Accuracy","B) MSE","C) MAP","D) Recall"],correct:"C"},
{id:"Q128",marks:4,text:"Regression task?",options:["A) Spam","B) Image label","C) House price","D) Disease"],correct:"C"},
{id:"Q129",marks:4,text:"Increase bias, reduce variance?",options:["A) Add features","B) Regularization","C) Deeper model","D) Boosting"],correct:"B"},
{id:"Q130",marks:4,text:"NN for images?",options:["A) RNN","B) CNN","C) GAN","D) Autoencoder"],correct:"B"},

{id:"Q131",marks:3,text:"DL library?",options:["A) Pandas","B) TensorFlow","C) Matplotlib","D) Seaborn"],correct:"B"},
{id:"Q132",marks:3,text:"Anomaly detection model?",options:["A) Linear Reg","B) Isolation Forest","C) Logistic Reg","D) KNN"],correct:"B"},
{id:"Q133",marks:3,text:"Systematic error?",options:["A) Variance","B) Bias","C) Noise","D) Entropy"],correct:"B"},
{id:"Q134",marks:3,text:"Pre-training step?",options:["A) Deploy","B) Preprocess","C) Evaluate","D) Monitor"],correct:"B"},
{id:"Q135",marks:3,text:"Gradient boosting tree?",options:["A) Random Forest","B) XGBoost","C) KNN","D) Naive Bayes"],correct:"B"},
{id:"Q136",marks:3,text:"Performance on unseen data?",options:["A) Overfit","B) Memorize","C) Generalize","D) Normalize"],correct:"C"},
{id:"Q137",marks:3,text:"Ordinal encoding?",options:["A) One-Hot","B) Label","C) Token","D) Scale"],correct:"B"},
{id:"Q138",marks:3,text:"NN for text?",options:["A) CNN","B) RNN","C) Linear Reg","D) PCA"],correct:"B"},
{id:"Q139",marks:3,text:"Penalizes false positives?",options:["A) Recall","B) Precision","C) Accuracy","D) R²"],correct:"B"},
{id:"Q140",marks:3,text:"Randomly drops neurons?",options:["A) Pooling","B) BatchNorm","C) Dropout","D) Scaling"],correct:"C"},

{id:"Q141",marks:4,text:"RL example?",options:["A) Spam","B) Image class","C) Game agent","D) Clustering"],correct:"C"},
{id:"Q142",marks:4,text:"Fixes exploding gradients?",options:["A) Overfit","B) Vanishing","C) Gradient clipping","D) Data leak"],correct:"C"},
{id:"Q143",marks:4,text:"Generative competing networks?",options:["A) CNN","B) GAN","C) RNN","D) SVM"],correct:"B"},
{id:"Q144",marks:4,text:"Best eval for small data?",options:["A) Train-test","B) Leave-One-Out CV","C) Random sample","D) Holdout"],correct:"B"},
{id:"Q145",marks:4,text:"Word2Vec solves?",options:["A) Dim reduction","B) Word vectors","C) Text class","D) Clustering"],correct:"B"},
{id:"Q146",marks:4,text:"Partially labeled data?",options:["A) Supervised","B) Unsupervised","C) Semi-supervised","D) RL"],correct:"C"},
{id:"Q147",marks:4,text:"Model for compressed reps?",options:["A) CNN","B) Autoencoder","C) RNN","D) Decision Tree"],correct:"B"},
{id:"Q148",marks:4,text:"Train/test dist mismatch?",options:["A) Overfit","B) Data leak","C) Covariate shift","D) Underfit"],correct:"C"},
{id:"Q149",marks:4,text:"Large-margin classifier?",options:["A) KNN","B) SVM","C) Naive Bayes","D) Linear Reg"],correct:"B"},
{id:"Q150",marks:4,text:"Same model, multiple tasks?",options:["A) Overfit","B) Transfer Learning","C) Regularization","D) Normalize"],correct:"B"},

{id:"Q151",marks:4,text:"Dim reduction, preserve variance?",options:["A) PCA","B) KNN","C) SVM","D) Naive Bayes"],correct:"A"},
{id:"Q152",marks:4,text:"L1 regularization solves?",options:["A) Overfitting","B) Underfitting","C) Feature selection","D) Vanishing gradient"],correct:"C"},
{id:"Q153",marks:4,text:"Activation to fix vanishing gradients?",options:["A) Sigmoid","B) Tanh","C) ReLU","D) Softmax"],correct:"C"},
{id:"Q154",marks:4,text:"Supervised learning needs?",options:["A) Unlabeled","B) Labeled","C) RL signal","D) Clustering"],correct:"B"},
{id:"Q155",marks:4,text:"Metric for imbalanced data?",options:["A) Accuracy","B) Precision","C) Recall","D) F1-score"],correct:"D"},
{id:"Q156",marks:4,text:"Algorithm using Bayes’ theorem?",options:["A) Decision Tree","B) Naive Bayes","C) K-Means","D) Random Forest"],correct:"B"},
{id:"Q157",marks:4,text:"Kernel trick allows?",options:["A) Faster training","B) Linear separation","C) Non-linear classification","D) Feature scaling"],correct:"C"},
{id:"Q158",marks:4,text:"Loss for binary classification?",options:["A) MSE","B) Cross-Entropy","C) Hinge loss","D) MAE"],correct:"B"},
{id:"Q159",marks:4,text:"Dropout purpose?",options:["A) Increase neurons","B) Reduce overfitting","C) Speed training","D) Normalize"],correct:"B"},
{id:"Q160",marks:4,text:"Unsupervised algorithm?",options:["A) Logistic Reg","B) Linear Reg","C) K-Means","D) SVM"],correct:"C"},

{id:"Q161",marks:4,text:"Metric for regression?",options:["A) Accuracy","B) Precision","C) RMSE","D) Recall"],correct:"C"},
{id:"Q162",marks:4,text:"Gradient descent minimizes?",options:["A) Accuracy","B) Loss","C) LR","D) Weights"],correct:"B"},
{id:"Q163",marks:4,text:"LR causing divergence?",options:["A) Very small","B) Zero","C) Very large","D) Adaptive"],correct:"C"},
{id:"Q164",marks:4,text:"Trees built sequentially?",options:["A) Bagging","B) Boosting","C) Random Forest","D) Stacking"],correct:"B"},
{id:"Q165",marks:4,text:"Algorithm assumes feature independence?",options:["A) SVM","B) KNN","C) Naive Bayes","D) Logistic Reg"],correct:"C"},
{id:"Q166",marks:4,text:"ROC curve shows?",options:["A) Precision vs Recall","B) Accuracy vs Loss","C) TPR vs FPR","D) Sensitivity vs Specificity"],correct:"C"},
{id:"Q167",marks:4,text:"Best for missing values?",options:["A) Drop rows","B) Mean imputation","C) Model-based imputation","D) Random deletion"],correct:"C"},
{id:"Q168",marks:4,text:"Optimizer adapting per-param LR?",options:["A) SGD","B) Momentum","C) Adam","D) Batch GD"],correct:"C"},
{id:"Q169",marks:4,text:"Sigmoid output range?",options:["A) (-1,1)","B) (0,1)","C) (-∞,∞)","D) (0,∞)"],correct:"B"},
{id:"Q170",marks:4,text:"Algorithm sensitive to scaling?",options:["A) Decision Tree","B) KNN","C) Naive Bayes","D) Random Forest"],correct:"B"},

{id:"Q171",marks:4,text:"Bias represents?",options:["A) Complexity","B) Noise error","C) Oversimplification error","D) Data size"],correct:"C"},
{id:"Q172",marks:4,text:"CV with k subsets?",options:["A) Holdout","B) Bootstrap","C) K-Fold","D) Stratified"],correct:"C"},
{id:"Q173",marks:4,text:"KNN default distance?",options:["A) Manhattan","B) Euclidean","C) Cosine","D) Minkowski"],correct:"B"},
{id:"Q174",marks:4,text:"Decision tree main drawback?",options:["A) High bias","B) Overfitting","C) Underfitting","D) Slow prediction"],correct:"B"},
{id:"Q175",marks:4,text:"Best for linearly separable data?",options:["A) KNN","B) Logistic Reg","C) K-Means","D) DBSCAN"],correct:"B"},
{id:"Q176",marks:4,text:"Normalization does?",options:["A) Remove outliers","B) Scale features","C) Reduce dims","D) Encode labels"],correct:"B"},
{id:"Q177",marks:4,text:"Improves generalization?",options:["A) More epochs","B) Regularization","C) More features","D) Less data"],correct:"B"},
{id:"Q178",marks:4,text:"Clustering w/o k?",options:["A) K-Means","B) Hierarchical","C) DBSCAN","D) Gaussian Mixture"],correct:"C"},
{id:"Q179",marks:4,text:"Evaluation on unseen data?",options:["A) Training","B) Validation","C) Testing","D) CV"],correct:"C"},
{id:"Q180",marks:4,text:"Confusion matrix shows?",options:["A) Errors","B) Predictions","C) Classification performance","D) Regression error"],correct:"C"},

{id:"Q181",marks:4,text:"Probabilistic algorithm?",options:["A) Linear Reg","B) Naive Bayes","C) KNN","D) SVM"],correct:"B"},
{id:"Q182",marks:4,text:"Categorical → numeric?",options:["A) Scaling","B) Encoding","C) Normalization","D) Binning"],correct:"B"},
{id:"Q183",marks:4,text:"Underfitting means?",options:["A) High variance","B) High bias","C) Perfect fit","D) Noise fitting"],correct:"B"},
{id:"Q184",marks:4,text:"Non-parametric model?",options:["A) Linear Reg","B) Logistic Reg","C) KNN","D) Naive Bayes"],correct:"C"},
{id:"Q185",marks:4,text:"RL goal?",options:["A) Minimize loss","B) Maximize reward","C) Reduce variance","D) Cluster data"],correct:"B"},
{id:"Q186",marks:4,text:"Entropy & info gain algorithm?",options:["A) SVM","B) Decision Tree","C) KNN","D) Logistic Reg"],correct:"B"},
{id:"Q187",marks:4,text:"Speeds up gradient descent?",options:["A) Momentum","B) Normalization","C) Bagging","D) Pruning"],correct:"A"},
{id:"Q188",marks:4,text:"Curse of dimensionality?",options:["A) Overfitting","B) Sparse data","C) High bias","D) Label noise"],correct:"B"},
{id:"Q189",marks:4,text:"Works well with small data?",options:["A) DNN","B) KNN","C) Linear Reg","D) CNN"],correct:"C"},
{id:"Q190",marks:4,text:"Metric for false positives?",options:["A) Recall","B) Precision","C) Specificity","D) Accuracy"],correct:"C"},

{id:"Q191",marks:4,text:"Early stopping prevents?",options:["A) Underfitting","B) Overfitting","C) High bias","D) Noise"],correct:"B"},
{id:"Q192",marks:4,text:"Uses margin maximization?",options:["A) Logistic Reg","B) SVM","C) KNN","D) Naive Bayes"],correct:"B"},
{id:"Q193",marks:4,text:"SVM loss function?",options:["A) Cross-entropy","B) Hinge loss","C) MSE","D) Log loss"],correct:"B"},
{id:"Q194",marks:4,text:"Best for sequential data?",options:["A) CNN","B) RNN","C) SVM","D) KNN"],correct:"B"},
{id:"Q195",marks:4,text:"Batch size controls?",options:["A) Dataset size","B) Weight updates","C) Epochs","D) Learning rate"],correct:"B"},
{id:"Q196",marks:4,text:"Reduces model complexity?",options:["A) Feature eng","B) Regularization","C) Boosting","D) Bagging"],correct:"B"},
{id:"Q197",marks:4,text:"Sensitive to noise?",options:["A) Decision Tree","B) KNN","C) Random Forest","D) Naive Bayes"],correct:"B"},
{id:"Q198",marks:4,text:"Softmax output?",options:["A) Binary","B) Probabilities","C) Logits","D) Labels"],correct:"B"},
{id:"Q199",marks:4,text:"Improves weak learners?",options:["A) Bagging","B) Boosting","C) Pruning","D) Stacking"],correct:"B"},
{id:"Q200",marks:4,text:"Learns from rewards/penalties?",options:["A) Supervised","B) Unsupervised","C) Reinforcement","D) Transfer"],correct:"C"},

{id:"Q201",marks:4,text:"A:B = 3:5, difference 12 yrs. A’s age?",options:["A) 18","B) 24","C) 30","D) 36"],correct:"A"},
{id:"Q202",marks:4,text:"Train 360 km at 60 km/h. Distance in 30 min?",options:["A) 25 km","B) 30 km","C) 35 km","D) 40 km"],correct:"B"},
{id:"Q203",marks:4,text:"Avg 10 nums = 20, replaced by 50, new avg 23. Replaced num?",options:["A) 10","B) 20","C) 30","D) 40"],correct:"A"},
{id:"Q204",marks:4,text:"5 men → 12 days. 8 men → ? days",options:["A) 7.5","B) 8","C) 9","D) 10"],correct:"A"},
{id:"Q205",marks:4,text:"Principal ₹7000, SI 2 yrs → ₹8000. Rate?",options:["A) 5%","B) 6%","C) 7.5%","D) 10%"],correct:"C"},
{id:"Q206",marks:4,text:"Series: 2,6,12,20, ? ",options:["A) 28","B) 30","C) 32","D) 36"],correct:"A"},
{id:"Q207",marks:4,text:"P(event)=0.35, P(not occur)?",options:["A) 0.35","B) 0.55","C) 0.65","D) 0.75"],correct:"C"},
{id:"Q208",marks:4,text:"Boys:Girls=4:3, total 28. Girls?",options:["A) 12","B) 14","C) 16","D) 18"],correct:"B"},
{id:"Q209",marks:4,text:"Walk 10 N, 5 E, 10 S. Distance from start?",options:["A) 5 km","B) 10 km","C) 15 km","D) 20 km"],correct:"A"},
{id:"Q210",marks:4,text:"x + 1/x =5. x² + 1/x² = ?",options:["A) 21","B) 23","C) 25","D) 27"],correct:"A"},

{id:"Q211",marks:4,text:"Clock gains 5 min/hr. Gain in 24 hrs?",options:["A) 1 hr","B) 2 hrs","C) 3 hrs","D) 4 hrs"],correct:"B"},
{id:"Q212",marks:4,text:"HCF=12, LCM=180, one num=36. Other?",options:["A) 48","B) 60","C) 72","D) 90"],correct:"A"},
{id:"Q213",marks:4,text:"CP 15 items = SP 12 items. Gain %?",options:["A) 20%","B) 25%","C) 30%","D) 35%"],correct:"B"},
{id:"Q214",marks:4,text:"Polygon interior sum=1260°. Sides?",options:["A) 8","B) 9","C) 10","D) 11"],correct:"C"},
{id:"Q215",marks:4,text:"Milk:Water=5:2, add 14 L water → 5:4. Original milk?",options:["A) 25 L","B) 30 L","C) 35 L","D) 40 L"],correct:"C"},
{id:"Q216",marks:4,text:"Square perimeter=48 cm. Area?",options:["A) 100","B) 121","C) 144","D) 169"],correct:"C"},
{id:"Q217",marks:4,text:"A 10 days, B 15 days. Together?",options:["A) 5 days","B) 6 days","C) 7 days","D) 8 days"],correct:"B"},
{id:"Q218",marks:4,text:"√0.0009 = ?",options:["A) 0.003","B) 0.03","C) 0.09","D) 0.3"],correct:"B"},
{id:"Q219",marks:4,text:"Avg 5 men=30, new avg=32. New man’s age?",options:["A) 40","B) 42","C) 44","D) 46"],correct:"C"},
{id:"Q220",marks:4,text:"3x−5=16. x = ?",options:["A) 5","B) 6","C) 7","D) 8"],correct:"C"},

{id:"Q221",marks:4,text:"Series: 1,4,9,16,?. Missing?",options:["A) 20","B) 24","C) 25","D) 36"],correct:"C"},
{id:"Q222",marks:4,text:"Circle radius doubled. Area × ?",options:["A) 2","B) 3","C) 4","D) 6"],correct:"C"},
{id:"Q223",marks:4,text:"Boat 12 km up 3h, down 2h. Stream speed?",options:["A) 1 km/h","B) 2 km/h","C) 3 km/h","D) 4 km/h"],correct:"B"},
{id:"Q224",marks:4,text:"Smallest number divisible by 8,12,18?",options:["A) 36","B) 48","C) 72","D) 144"],correct:"C"},
{id:"Q225",marks:4,text:"sin θ=3/5. cos θ?",options:["A) 4/5","B) 5/4","C) 3/4","D) 5/3"],correct:"A"},
{id:"Q226",marks:4,text:"Code: CAT→DBU. DOG→?",options:["A) EPH","B) EOG","C) EPH","D) FPH"],correct:"A"},
{id:"Q227",marks:4,text:"Sum first n natural numbers=210. n=?",options:["A) 19","B) 20","C) 21","D) 22"],correct:"B"},
{id:"Q228",marks:4,text:"₹5000 at 10% CI 2 yrs. Amount?",options:["A) ₹6000","B) ₹6050","C) ₹6100","D) ₹6200"],correct:"B"},
{id:"Q229",marks:4,text:"Rectangle diagonals=10 cm, length=8 cm. Breadth?",options:["A) 4 cm","B) 5 cm","C) 6 cm","D) 7 cm"],correct:"A"},
{id:"Q230",marks:4,text:"Series: 3,6,18,72,?. Missing?",options:["A) 216","B) 288","C) 360","D) 432"],correct:"B"},

{id:"Q231",marks:4,text:"CP=₹400, loss 15%. SP?",options:["A) ₹320","B) ₹340","C) ₹360","D) ₹380"],correct:"C"},
{id:"Q232",marks:4,text:"Triangle angles ratio 2:3:4. Largest angle?",options:["A) 40°","B) 60°","C) 80°","D) 90°"],correct:"C"},
{id:"Q233",marks:4,text:"Primes between 10 and 50?",options:["A) 10","B) 11","C) 12","D) 13"],correct:"B"},
{id:"Q234",marks:4,text:"Increase 20%, then decrease 20%. Net change?",options:["A) No change","B) 2% decrease","C) 4% decrease","D) 4% increase"],correct:"C"},
{id:"Q235",marks:4,text:"Cube volume=64 cm³. Edge length?",options:["A) 2 cm","B) 3 cm","C) 4 cm","D) 5 cm"],correct:"C"},
{id:"Q236",marks:4,text:"Odd one out: 2,3,5,7,11,15?",options:["A) 3","B) 5","C) 7","D) 15"],correct:"D"},
{id:"Q237",marks:4,text:"x:y=7:9, y:z=3:5. x:z?",options:["A) 7:15","B) 21:45","C) 14:15","D) 21:25"],correct:"D"},
{id:"Q238",marks:4,text:"Money triples in 10 yrs SI. Rate?",options:["A) 10%","B) 15%","C) 20%","D) 25%"],correct:"C"},
{id:"Q239",marks:4,text:"(27)^(2/3)?",options:["A) 3","B) 6","C) 9","D) 18"],correct:"C"},
{id:"Q240",marks:4,text:"4x+7=3x+15. x?",options:["A) 6","B) 7","C) 8","D) 9"],correct:"A"},

{id:"Q241",marks:4,text:"Cube side 8 cm. Cubes of 2 cm. How many?",options:["A) 16","B) 32","C) 64","D) 128"],correct:"C"},
{id:"Q242",marks:4,text:"20 articles ₹400, sell at ₹25 each. Profit %?",options:["A) 20%","B) 25%","C) 30%","D) 35%"],correct:"B"},
{id:"Q243",marks:4,text:"Next term: AZ, BY, CX, ?",options:["A) DW","B) EV","C) DX","D) EW"],correct:"A"},
{id:"Q244",marks:4,text:"tan θ = 1. θ?",options:["A) 30°","B) 45°","C) 60°","D) 90°"],correct:"B"},
{id:"Q245",marks:4,text:"₹6000 → ₹7260 in 3 yrs CI. Rate?",options:["A) 6%","B) 7%","C) 8%","D) 9%"],correct:"C"},
{id:"Q246",marks:4,text:"Even numbers 1–100?",options:["A) 48","B) 49","C) 50","D) 51"],correct:"C"},
{id:"Q247",marks:4,text:"Circle area 154 cm². Radius? (π=22/7)",options:["A) 5 cm","B) 6 cm","C) 7 cm","D) 8 cm"],correct:"C"},
{id:"Q248",marks:4,text:"Series: 5,10,20,40, ?",options:["A) 60","B) 70","C) 80","D) 90"],correct:"C"},
{id:"Q249",marks:4,text:"A:18d, B:24d. A alone?",options:["A) 36","B) 24","C) 18","D) 12"],correct:"C"},
{id:"Q250",marks:4,text:"LOGIC alphabetically. 3rd letter?",options:["A) G","B) I","C) L","D) O"],correct:"C"},

{id:"Q251",marks:3,text:"VMs & storage. Cloud model?",options:["A) SaaS","B) PaaS","C) IaaS","D) FaaS"],correct:"C"},
{id:"Q252",marks:3,text:"Accessible only within org?",options:["A) Public","B) Private","C) Hybrid","D) Community"],correct:"B"},
{id:"Q253",marks:3,text:"AWS object storage?",options:["A) EC2","B) S3","C) RDS","D) Lambda"],correct:"B"},
{id:"Q254",marks:3,text:"SaaS stands for?",options:["A) Software as a Service","B) System as a Service","C) Storage as a Service","D) Solution as a Service"],correct:"A"},
{id:"Q255",marks:3,text:"Automatic resource scaling feature?",options:["A) Virtualization","B) Elasticity","C) Multi-tenancy","D) Metering"],correct:"B"},
{id:"Q256",marks:3,text:"Combines public & private clouds?",options:["A) Community","B) Private","C) Hybrid","D) Distributed"],correct:"C"},
{id:"Q257",marks:3,text:"Google Cloud VMs?",options:["A) Cloud Functions","B) Compute Engine","C) App Engine","D) BigQuery"],correct:"B"},
{id:"Q258",marks:3,text:"Users share resources?",options:["A) Elasticity","B) Scalability","C) Multi-tenancy","D) Availability"],correct:"C"},
{id:"Q259",marks:3,text:"Azure scalable blob storage?",options:["A) Azure VM","B) Azure SQL","C) Azure Blob Storage","D) Azure DevOps"],correct:"C"},
{id:"Q260",marks:3,text:"Hides infra management?",options:["A) IaaS","B) PaaS","C) SaaS","D) DaaS"],correct:"C"},

{id:"Q261",marks:3,text:"Cloud elasticity refers to?",options:["A) Fixed capacity","B) Resource pooling","C) On-demand scaling","D) High latency"],correct:"C"},
{id:"Q262",marks:3,text:"AWS serverless service?",options:["A) EC2","B) S3","C) Lambda","D) EBS"],correct:"C"},
{id:"Q263",marks:3,text:"Ensures high availability in cloud?",options:["A) Load balancing","B) Virtualization","C) Encryption","D) Metering"],correct:"A"},
{id:"Q264",marks:3,text:"Pricing based on usage?",options:["A) Fixed pricing","B) Subscription","C) Pay-as-you-go","D) License-based"],correct:"C"},
{id:"Q265",marks:3,text:"Protocol for cloud data security?",options:["A) FTP","B) HTTP","C) HTTPS","D) SMTP"],correct:"C"},
{id:"Q266",marks:3,text:"AWS relational database service?",options:["A) DynamoDB","B) RDS","C) S3","D) Redshift"],correct:"B"},
{id:"Q267",marks:3,text:"Main benefit of cloud computing?",options:["A) Higher latency","B) Cost efficiency","C) Manual scaling","D) Hardware ownership"],correct:"B"},
{id:"Q268",marks:3,text:"Best for hosting web apps without managing servers?",options:["A) IaaS","B) PaaS","C) On-premise","D) Colocation"],correct:"B"},
{id:"Q269",marks:3,text:"Delivering services over the internet?",options:["A) Virtualization","B) Cloud computing","C) Grid computing","D) Edge computing"],correct:"B"},
{id:"Q270",marks:3,text:"AWS service distributing traffic across instances?",options:["A) Auto Scaling","B) Load Balancer","C) CloudFront","D) Route 53"],correct:"B"},

{id:"Q271",marks:3,text:"Which cloud storage type stores data as objects?",options:["A) Block storage","B) File storage","C) Object storage","D) Cache storage"],correct:"C"},
{id:"Q272",marks:3,text:"Which factor enables disaster recovery in cloud?",options:["A) Redundancy","B) Latency","C) Encryption","D) Virtual memory"],correct:"A"},
{id:"Q273",marks:3,text:"Azure service for serverless computing?",options:["A) Azure VM","B) Azure Functions","C) Azure Storage","D) Azure SQL"],correct:"B"},
{id:"Q274",marks:3,text:"Cloud concept that allows access from anywhere?",options:["A) Broad network access","B) Resource pooling","C) Elasticity","D) Metering"],correct:"A"},
{id:"Q275",marks:3,text:"Service model best for developers to deploy code quickly?",options:["A) SaaS","B) IaaS","C) PaaS","D) DaaS"],correct:"C"},
{id:"Q276",marks:3,text:"AWS service used for DNS management?",options:["A) CloudFront","B) Route 53","C) VPC","D) IAM"],correct:"B"},
{id:"Q277",marks:3,text:"Cloud term for measuring resource usage?",options:["A) Scalability","B) Metering","C) Elasticity","D) Orchestration"],correct:"B"},
{id:"Q278",marks:3,text:"Cloud deployment model offering maximum control?",options:["A) Public cloud","B) Private cloud","C) Hybrid cloud","D) Community cloud"],correct:"B"},
{id:"Q279",marks:3,text:"AWS service managing user access and permissions?",options:["A) EC2","B) IAM","C) CloudWatch","D) S3"],correct:"B"},
{id:"Q280",marks:3,text:"PaaS primarily provides?",options:["A) Hardware","B) Development platform","C) End-user software","D) Network cables"],correct:"B"},

{id:"Q281",marks:3,text:"Which cloud benefit reduces capital expenditure?",options:["A) Scalability","B) Pay-as-you-go","C) Virtualization","D) Automation"],correct:"B"},
{id:"Q282",marks:3,text:"Which technology enables cloud resource abstraction?",options:["A) Encryption","B) Virtualization","C) Load balancing","D) Replication"],correct:"B"},
{id:"Q283",marks:3,text:"Which AWS service monitors cloud resources?",options:["A) CloudTrail","B) CloudWatch","C) Inspector","D) Shield"],correct:"B"},
{id:"Q284",marks:3,text:"Which cloud type is shared among organizations with similar needs?",options:["A) Public","B) Private","C) Community","D) Hybrid"],correct:"C"},
{id:"Q285",marks:3,text:"Which cloud model offers the least user control?",options:["A) IaaS","B) PaaS","C) SaaS","D) Private cloud"],correct:"C"},
{id:"Q286",marks:3,text:"Which AWS service provides content delivery network (CDN)?",options:["A) Route 53","B) CloudFront","C) S3","D) EC2"],correct:"B"},
{id:"Q287",marks:3,text:"Which cloud concept supports fault tolerance?",options:["A) Single instance","B) Redundancy","C) Metering","D) Latency"],correct:"B"},
{id:"Q288",marks:3,text:"Which Azure service provides SQL databases?",options:["A) Azure Blob","B) Azure SQL Database","C) Azure VM","D) Azure Functions"],correct:"B"},
{id:"Q289",marks:3,text:"Which cloud feature allows rapid provisioning?",options:["A) Manual setup","B) On-demand self-service","C) Fixed allocation","D) Hardware purchase"],correct:"B"},
{id:"Q290",marks:3,text:"Which AWS service provides NoSQL database?",options:["A) RDS","B) DynamoDB","C) Aurora","D) Redshift"],correct:"B"},
	
{id:"Q291",marks:3,text:"Which cloud concept ensures data confidentiality?",options:["A) Encryption","B) Redundancy","C) Load balancing","D) Elasticity"],correct:"A"},
{id:"Q292",marks:3,text:"Which service model is best for email services like Gmail?",options:["A) IaaS","B) PaaS","C) SaaS","D) FaaS"],correct:"C"},
{id:"Q293",marks:3,text:"Which cloud benefit improves application performance globally?",options:["A) Virtualization","B) CDN","C) Metering","D) Auto scaling"],correct:"B"},
{id:"Q294",marks:3,text:"Which AWS service provides virtual networking?",options:["A) VPC","B) IAM","C) EC2","D) S3"],correct:"A"},
{id:"Q295",marks:3,text:"Which cloud service reduces server management overhead?",options:["A) IaaS","B) On-premise","C) Serverless","D) Colocation"],correct:"C"},
{id:"Q296",marks:3,text:"Which cloud characteristic enables cost tracking?",options:["A) Metered service","B) Elasticity","C) Resource pooling","D) Availability"],correct:"A"},
{id:"Q297",marks:3,text:"Which AWS service is used for container orchestration?",options:["A) ECS","B) EC2","C) Lambda","D) S3"],correct:"A"},
{id:"Q298",marks:3,text:"Which cloud term means ability to handle increased workload?",options:["A) Availability","B) Scalability","C) Elasticity","D) Reliability"],correct:"B"},
{id:"Q299",marks:3,text:"Which cloud security feature controls user permissions?",options:["A) Firewall","B) IAM","C) CDN","D) Backup"],correct:"B"},
{id:"Q300",marks:3,text:"Which cloud model allows users to rent infrastructure?",options:["A) SaaS","B) PaaS","C) IaaS","D) FaaS"],correct:"C"},
];

// ================= STATE =================
let chosenQuestions = [], userAnswers = {}, remainingSeconds = EXAM_DURATION_MIN * 60;
let timerId = null, warnings = 0, inExam = false, quizFinished = false;
let currentUser = null, cameraStream = null, audioCtx = null;

const $ = id => document.getElementById(id);

// ================= HELPERS =================
function showSection(id) {
  document.querySelectorAll(".pageSection").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}
function shuffle(arr) { arr.sort(() => Math.random() - 0.5); }
function formatTime(s) { return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`; }

// ================= AUDIO =================
function beep() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.frequency.value = 900; gain.gain.value = 0.25;
  osc.start(); osc.stop(audioCtx.currentTime + 0.15);
}

// ================= CAMERA =================
async function startCamera() {
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
    $("cameraFeed").srcObject = cameraStream;
  } catch {
    issueWarning("Camera blocked");
  }
}
function stopCamera() {
  if (cameraStream) cameraStream.getTracks().forEach(t => t.stop());
}

// ================= WARNINGS =================
function issueWarning(msg) {
  if (!inExam || quizFinished) return;
  warnings++;
  $("warningCount").textContent = warnings;
  beep();
  if (warnings >= MAX_WARNINGS) finishExam();
}

document.addEventListener("visibilitychange", () => { if (document.hidden) issueWarning("Tab switch detected"); });
window.addEventListener("blur", () => issueWarning("Window focus lost"));

// ================= TIMER =================
function startTimer() {
  $("timer").textContent = formatTime(remainingSeconds);
  timerId = setInterval(() => {
    remainingSeconds--;
    $("timer").textContent = formatTime(remainingSeconds);
    if (remainingSeconds <= 0) finishExam();
  }, 1000);
}

// ================= LOCK SYSTEM =================
function lockKey(email) { return "hack_lock_" + email; }
function isLocked(email) {
  const exp = parseInt(localStorage.getItem(lockKey(email)) || "0");
  return Date.now() < exp;
}
function setLock(email) {
  localStorage.setItem(lockKey(email), Date.now() + LOCK_DAYS * 86400000);
}

// ================= QUESTIONS =================
function pickQuestions() {
  const copy = [...questionBank];
  shuffle(copy);
  chosenQuestions = copy.slice(0, Math.min(QUESTIONS_PER_EXAM, questionBank.length));
}

function saveAnswer(qid, val) {
  userAnswers[qid] = val;
  updateStats();
}

function updateStats() {
  $("answeredCount").textContent = Object.keys(userAnswers).length;
  $("unansweredCount").textContent = chosenQuestions.length - Object.keys(userAnswers).length;
}

function renderAllQuestions() {
  const box = $("questionsBox");
  box.innerHTML = "";
  chosenQuestions.forEach((q, i) => {
    let div = document.createElement("div");
    div.className = "questionBlock";
    div.innerHTML = `<p><b>Q${i+1}. ${q.text}</b></p>`;
    q.options.forEach(opt => {
      const v = opt[0];
      div.innerHTML += `
        <div class="optionRow">
          <input type="radio" name="${q.id}" value="${v}" onchange="saveAnswer('${q.id}','${v}')"> ${opt}
        </div>`;
    });
    box.appendChild(div);
  });
  updateStats();
}

// ================= SCORING =================
function computeScore() {
  let correct = 0, wrong = 0, unanswered = 0, marks = 0, totalMarks = 0;

  chosenQuestions.forEach(q => {
    totalMarks += q.marks;
    const sel = userAnswers[q.id];
    if (!sel) unanswered++;
    else if (sel === q.correct) { correct++; marks += q.marks; }
    else wrong++;
  });

  const wrongPenalty = wrong * WRONG_PENALTY;
  const unansweredPenalty = Math.floor(unanswered / 6) * 3;

  let final = marks - wrongPenalty - unansweredPenalty;
  if (final < 0) final = 0;

  const attempted = correct + wrong;
  if (attempted >= 3 && final < 3) final = 3;

  return { correct, wrong, unanswered, wrongPenalty, unansweredPenalty, final, totalMarks };
}

// ================= FINISH =================
function finishExam() {
  if (quizFinished) return;
  quizFinished = true;
  inExam = false;
  clearInterval(timerId);
  stopCamera();

  const r = computeScore();

  $("finalScore").textContent = `Final Score: ${r.final} / ${r.totalMarks}`;

  $("resultBreakdown").innerHTML = `
    Attempted: ${r.correct + r.wrong}<br>
    Not Attempted: ${r.unanswered}<br>
    Correct: ${r.correct}<br>
    Wrong: ${r.wrong}<br>
    Negative Marks: -${r.wrongPenalty + r.unansweredPenalty}
  `;

  $("resultStudent").innerHTML = `
    <div><b>Student Name:</b> ${currentUser.name}</div>
    <div><b>Email:</b> ${currentUser.email}</div>
    <div><b>College:</b> ${currentUser.college}</div>
    <div><b>Department:</b> ${currentUser.dept}</div>
  `;

  setLock(currentUser.email);
  showSection("resultSection");
}

// ================= START EXAM =================
function startExam() {
  inExam = true;
  warnings = 0;
  userAnswers = {};
  remainingSeconds = EXAM_DURATION_MIN * 60;

  pickQuestions();
  renderAllQuestions();
  startCamera();
  startTimer();
  showSection("examSection");
}

// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", () => {

  $("startBtn").onclick = () => {
    const name = $("fullName").value.trim();
    const email = $("email").value.trim();
    const college = $("college").value.trim();
    const dept = $("stream").value.trim();

    if (!name || !email || !college || !dept) {
      alert("Please fill all details before starting.");
      return;
    }

    if (isLocked(email)) {
      alert("You have already attempted the hackathon. Try again after 15 days.");
      return;
    }

    currentUser = { name, email, college, dept };
    startExam();
  };

  $("nextSetBtn").onclick = finishExam;
});
