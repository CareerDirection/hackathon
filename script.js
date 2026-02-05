// ================= CONFIG =================
const EXAM_DURATION_MIN = 40;
const QUESTIONS_PER_EXAM = 30;
const MAX_WARNINGS = 10;
const LOCK_DAYS = 15;
const ADMIN_RESET_CODE = "JJ5533!jj5533";
const WRONG_PENALTY = 2;

// ================= SAMPLE QUESTIONS (ADD MORE LATER) =================
const questionBank = [
{id:"Q1",marks:4,text:"In a hash table using separate chaining, what is the worst-case time complexity for search?",options:["A) O(1)","B) O(log n)","C) O(n)","D) O(n log n)"],correct:"C"},
{id:"Q2",marks:4,text:"Which traversal of a Binary Search Tree gives values in descending order?",options:["A) Inorder","B) Preorder","C) Reverse Inorder","D) Postorder"],correct:"C"},
{id:"Q3",marks:4,text:"Which data structure combination is best suited for implementing an LRU Cache?",options:["A) Queue + Stack","B) HashMap + Doubly Linked List","C) Heap + Array","D) BST + Queue"],correct:"B"},
{id:"Q4",marks:4,text:"Time complexity to build a heap from an unsorted array of size n is:",options:["A) O(n log n)","B) O(n)","C) O(log n)","D) O(n²)"],correct:"B"},
{id:"Q5",marks:4,text:"Which algorithm detects a cycle in a directed graph?",options:["A) BFS","B) DFS with recursion stack","C) Prim","D) Kruskal"],correct:"B"},
{id:"Q6",marks:4,text:"Which problem is a classical application of Dynamic Programming?",options:["A) Binary Search","B) 0/1 Knapsack","C) BFS Traversal","D) Topological Sort"],correct:"B"},
{id:"Q7",marks:4,text:"Amortized time complexity of append operation in a dynamic array is:",options:["A) O(n)","B) O(log n)","C) O(1)","D) O(n log n)"],correct:"C"},
{id:"Q8",marks:4,text:"Which of the following is NOT a necessary condition for deadlock?",options:["A) Mutual exclusion","B) Hold and wait","C) Preemption","D) Circular wait"],correct:"C"},
{id:"Q9",marks:4,text:"Thrashing in operating systems occurs due to:",options:["A) Excess CPU usage","B) Excessive paging","C) Disk fragmentation","D) Deadlock"],correct:"B"},
{id:"Q10",marks:4,text:"Which CPU scheduling algorithm can cause starvation?",options:["A) FCFS","B) Round Robin","C) Priority Scheduling","D) FIFO"],correct:"C"},

{id:"Q11",marks:4,text:"Which normal form removes transitive dependency?",options:["A) 1NF","B) 2NF","C) 3NF","D) BCNF"],correct:"C"},
{id:"Q12",marks:4,text:"If atomicity fails in a transaction, the system will:",options:["A) Commit partial changes","B) Rollback the entire transaction","C) Lock the table permanently","D) Ignore the failure"],correct:"B"},
{id:"Q13",marks:4,text:"Which type of index is most efficient for range queries?",options:["A) Hash Index","B) B-Tree Index","C) Bitmap Index","D) Full Text Index"],correct:"B"},
{id:"Q14",marks:4,text:"Which AWS service distributes incoming traffic across multiple EC2 instances?",options:["A) Route 53","B) CloudFront","C) Elastic Load Balancer","D) Auto Scaling"],correct:"C"},
{id:"Q15",marks:4,text:"Docker containers differ from virtual machines because containers:",options:["A) Use separate kernels","B) Share the host OS kernel","C) Need a hypervisor","D) Cannot scale"],correct:"B"},
{id:"Q16",marks:4,text:"A Kubernetes Pod can contain:",options:["A) Only one container","B) Multiple tightly coupled containers","C) Only stateless apps","D) Only background services"],correct:"B"},
{id:"Q17",marks:4,text:"Which OSI layer ensures reliable data delivery?",options:["A) Network","B) Transport","C) Data Link","D) Session"],correct:"B"},
{id:"Q18",marks:4,text:"The ARP protocol is used to:",options:["A) Encrypt packets","B) Resolve IP to MAC address","C) Assign IP dynamically","D) Route packets"],correct:"B"},
{id:"Q19",marks:4,text:"Correct TCP three-way handshake sequence is:",options:["A) SYN → ACK → SYN-ACK","B) SYN → SYN-ACK → ACK","C) ACK → SYN → ACK","D) SYN-ACK → SYN → ACK"],correct:"B"},
{id:"Q20",marks:4,text:"Eventual consistency is most suitable for:",options:["A) Banking systems","B) Payment processing","C) Social media likes counter","D) Inventory systems"],correct:"C"},

{id:"Q21",marks:3,text:"Which data structure provides average O(1) lookup time?",options:["A) AVL Tree","B) Hash Table","C) Heap","D) Linked List"],correct:"B"},
{id:"Q22",marks:3,text:"Which algorithm guarantees shortest path in weighted graphs without negative edges?",options:["A) BFS","B) DFS","C) Dijkstra","D) Bellman-Ford"],correct:"C"},
{id:"Q23",marks:3,text:"Which memory allocation technique suffers from external fragmentation?",options:["A) Paging","B) Segmentation","C) Virtual Memory","D) Caching"],correct:"B"},
{id:"Q24",marks:3,text:"Which SQL clause filters grouped records?",options:["A) WHERE","B) GROUP BY","C) HAVING","D) ORDER BY"],correct:"C"},
{id:"Q25",marks:3,text:"Which cloud computing feature allows automatic scaling of resources?",options:["A) Virtualization","B) Elasticity","C) Multi-tenancy","D) Abstraction"],correct:"B"},
{id:"Q26",marks:3,text:"Which Kubernetes object maintains a desired number of pod replicas?",options:["A) Node","B) ReplicaSet","C) Service","D) Volume"],correct:"B"},
{id:"Q27",marks:3,text:"Which protocol operates at the application layer for file transfer?",options:["A) TCP","B) FTP","C) IP","D) ARP"],correct:"B"},
{id:"Q28",marks:3,text:"Which sorting algorithm is NOT stable?",options:["A) Merge Sort","B) Insertion Sort","C) Heap Sort","D) Bubble Sort"],correct:"C"},
{id:"Q29",marks:3,text:"When two threads wait indefinitely for each other, the situation is called:",options:["A) Starvation","B) Deadlock","C) Thrashing","D) Livelock"],correct:"B"},
{id:"Q30",marks:3,text:"Which HTTP method is idempotent?",options:["A) POST","B) GET","C) PATCH","D) CONNECT"],correct:"B"},

{id:"Q31",marks:3,text:"Which OSI layer handles encryption and compression?",options:["A) Application","B) Transport","C) Presentation","D) Session"],correct:"C"},
{id:"Q32",marks:3,text:"Which Git command rewrites commit history?",options:["A) git merge","B) git rebase","C) git commit","D) git push"],correct:"B"},
{id:"Q33",marks:3,text:"Which scheduling algorithm gives each process an equal time slice?",options:["A) SJF","B) FCFS","C) Round Robin","D) Priority"],correct:"C"},
{id:"Q34",marks:3,text:"Which storage engine is based on LSM Trees?",options:["A) InnoDB","B) RocksDB","C) MyISAM","D) B-Tree"],correct:"B"},
{id:"Q35",marks:3,text:"Which AWS service provides serverless compute?",options:["A) EC2","B) ECS","C) Lambda","D) Batch"],correct:"C"},
{id:"Q36",marks:3,text:"Which device breaks broadcast domains?",options:["A) Hub","B) Switch","C) Router","D) Repeater"],correct:"C"},
{id:"Q37",marks:3,text:"Which algorithm is used for topological sorting?",options:["A) BFS (Kahn’s Algorithm)","B) Dijkstra","C) Prim","D) Floyd Warshall"],correct:"A"},
{id:"Q38",marks:3,text:"Which isolation level prevents dirty reads?",options:["A) Read Uncommitted","B) Read Committed","C) Repeatable Read","D) Serializable"],correct:"B"},
{id:"Q39",marks:3,text:"Which DevOps practice focuses on small and frequent deployments?",options:["A) Continuous Integration","B) Continuous Delivery","C) Continuous Deployment","D) Waterfall"],correct:"C"},
{id:"Q40",marks:3,text:"Which data structure is best suited for undo-redo functionality?",options:["A) Queue","B) Stack","C) Tree","D) Graph"],correct:"B"},

{id:"Q41",marks:3,text:"Which algorithm is used to find strongly connected components?",options:["A) Dijkstra","B) Prim","C) Kosaraju","D) Kruskal"],correct:"C"},
{id:"Q42",marks:3,text:"Which protocol is used for secure remote login?",options:["A) FTP","B) Telnet","C) SSH","D) SMTP"],correct:"C"},
{id:"Q43",marks:3,text:"Which cloud service provides object storage in AWS?",options:["A) EC2","B) S3","C) RDS","D) Lambda"],correct:"B"},
{id:"Q44",marks:3,text:"Which SQL join returns only matching rows from both tables?",options:["A) LEFT JOIN","B) RIGHT JOIN","C) INNER JOIN","D) FULL JOIN"],correct:"C"},
{id:"Q45",marks:3,text:"Which algorithm is used in routing protocols like OSPF?",options:["A) Kruskal","B) Bellman-Ford","C) Dijkstra","D) Prim"],correct:"C"},
{id:"Q46",marks:3,text:"Which data structure is typically used to implement a priority queue?",options:["A) Stack","B) Heap","C) Queue","D) Linked List"],correct:"B"},
{id:"Q47",marks:3,text:"Which OS component is responsible for process scheduling?",options:["A) Shell","B) Kernel","C) BIOS","D) Driver"],correct:"B"},
{id:"Q48",marks:3,text:"Which protocol resolves domain names to IP addresses?",options:["A) ARP","B) DNS","C) DHCP","D) ICMP"],correct:"B"},
{id:"Q49",marks:3,text:"Which HTTP status code represents 'Forbidden'?",options:["A) 200","B) 301","C) 403","D) 500"],correct:"C"},
{id:"Q50",marks:3,text:"Which design pattern ensures only one instance of a class exists?",options:["A) Factory","B) Observer","C) Singleton","D) Adapter"],correct:"C"}

{id:"Q51",marks:4,text:"What is the output? print((lambda x: x**2)(3))",options:["A) 6","B) 9","C) 3","D) Error"],correct:"B"},
{id:"Q52",marks:4,text:"What will this print? print([i for i in range(5) if i%2])",options:["A) [0,2,4]","B) [1,3]","C) [1,2,3]","D) Error"],correct:"B"},
{id:"Q53",marks:4,text:"Output of: print(bool(''))",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q54",marks:4,text:"What is the result? print(0.1 + 0.2 == 0.3)",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q55",marks:4,text:"What will be printed? print({1,2,3} & {3,4,5})",options:["A) {1,2,3,4,5}","B) {3}","C) {1,2}","D) Error"],correct:"B"},
{id:"Q56",marks:4,text:"Output of: print([i*i for i in range(4) if i%2==0])",options:["A) [1,9]","B) [0,4]","C) [4,16]","D) Error"],correct:"B"},
{id:"Q57",marks:4,text:"What happens? print(type({}))",options:["A) set","B) dict","C) list","D) Error"],correct:"B"},
{id:"Q58",marks:4,text:"What is output? print('Python'[-3:])",options:["A) hon","B) tho","C) yth","D) Error"],correct:"A"},
{id:"Q59",marks:4,text:"What does this print? print(5 is 5.0)",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q60",marks:4,text:"Output of: print([] == False)",options:["A) True","B) False","C) Error","D) None"],correct:"B"},

{id:"Q61",marks:4,text:"What is output? print((1,2)*2)",options:["A) (1,2,1,2)","B) (2,4)","C) Error","D) None"],correct:"A"},
{id:"Q62",marks:4,text:"What will be printed? print({1,2,3}.pop())",options:["A) 1","B) 3","C) Random element","D) Error"],correct:"C"},
{id:"Q63",marks:4,text:"What is output? print({i:i*i for i in range(2,5)})",options:["A) {2:4,3:9,4:16}","B) [4,9,16]","C) (4,9,16)","D) Error"],correct:"A"},
{id:"Q64",marks:4,text:"What happens? a=[1,2,3]; b=a[:]; b.append(4); print(a)",options:["A) [1,2,3,4]","B) [1,2,3]","C) Error","D) None"],correct:"B"},
{id:"Q65",marks:4,text:"Output of: print(sum({1,2,3}))",options:["A) 6","B) {1,2,3}","C) Error","D) None"],correct:"A"},
{id:"Q66",marks:4,text:"What will print? print(sorted('cab'))",options:["A) ['c','a','b']","B) ['a','b','c']","C) cab","D) Error"],correct:"B"},
{id:"Q67",marks:4,text:"What is output? print('abc'*0)",options:["A) abc","B) ''","C) Error","D) None"],correct:"B"},
{id:"Q68",marks:4,text:"What happens? print([1,2] + [3,4])",options:["A) [1,2,3,4]","B) [4,6]","C) Error","D) None"],correct:"A"},
{id:"Q69",marks:4,text:"Output of: print(10//3, 10%3)",options:["A) 3 1","B) 3.3 1","C) 3 0","D) Error"],correct:"A"},
{id:"Q70",marks:4,text:"What will print? print(len({True,1,1.0}))",options:["A) 3","B) 1","C) 2","D) Error"],correct:"B"},

{id:"Q71",marks:3,text:"What does this output? print(bool(None))",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q72",marks:3,text:"Output of: print(2**3**2)",options:["A) 64","B) 512","C) 256","D) Error"],correct:"B"},
{id:"Q73",marks:3,text:"What will print? print(list(range(-3)))",options:["A) [-3,-2,-1]","B) []","C) Error","D) None"],correct:"B"},
{id:"Q74",marks:3,text:"Output of: print({}.get('a',5))",options:["A) None","B) 5","C) Error","D) 'a'"],correct:"B"},
{id:"Q75",marks:3,text:"What is output? print('abc'.islower())",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q76",marks:3,text:"Output of: print('ABC'.lower())",options:["A) abc","B) ABC","C) Error","D) None"],correct:"A"},
{id:"Q77",marks:3,text:"What will be printed? print({1,2}.issubset({1,2,3}))",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q78",marks:3,text:"Output of: print(divmod(10,4))",options:["A) (2,2)","B) (4,2)","C) (2,4)","D) Error"],correct:"A"},
{id:"Q79",marks:3,text:"What does this print? print(min([3,1,2]))",options:["A) 3","B) 1","C) 2","D) Error"],correct:"B"},
{id:"Q80",marks:3,text:"Output of: print(max('azby'))",options:["A) a","B) z","C) y","D) Error"],correct:"B"},

{id:"Q81",marks:3,text:"What happens? print(5 != '5')",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q82",marks:3,text:"Output of: print(bool([False]))",options:["A) False","B) True","C) Error","D) None"],correct:"B"},
{id:"Q83",marks:3,text:"What will print? print([].append(1))",options:["A) [1]","B) None","C) Error","D) 1"],correct:"B"},
{id:"Q84",marks:3,text:"Output of: print(type({1}))",options:["A) dict","B) set","C) tuple","D) list"],correct:"B"},
{id:"Q85",marks:3,text:"What does this print? print(int(True))",options:["A) 0","B) 1","C) True","D) Error"],correct:"B"},
{id:"Q86",marks:3,text:"Output of: print(float('inf') > 1e308)",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q87",marks:3,text:"What will print? print(len('🐍'))",options:["A) 1","B) 2","C) 4","D) Error"],correct:"A"},
{id:"Q88",marks:3,text:"Output of: print('abc'.startswith('a'))",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q89",marks:3,text:"What does this print? print('abc'.endswith('c'))",options:["A) True","B) False","C) Error","D) None"],correct:"A"},
{id:"Q90",marks:3,text:"Output of: print(list(map(str,[1,2,3])))",options:["A) ['1','2','3']","B) [1,2,3]","C) Error","D) None"],correct:"A"},

{id:"Q91",marks:3,text:"What happens? print({}.fromkeys([1,2],0))",options:["A) {1:0,2:0}","B) {0:1,0:2}","C) Error","D) None"],correct:"A"},
{id:"Q92",marks:3,text:"Output of: print(abs(complex(3,4)))",options:["A) 7","B) 5.0","C) Error","D) None"],correct:"B"},
{id:"Q93",marks:3,text:"What will print? print(round(2.675,2))",options:["A) 2.68","B) 2.67","C) Error","D) None"],correct:"B"},
{id:"Q94",marks:3,text:"Output of: print(bool({}))",options:["A) True","B) False","C) Error","D) None"],correct:"B"},
{id:"Q95",marks:3,text:"What does this print? print(' '.join(['a','b','c']))",options:["A) abc","B) a b c","C) ['a','b','c']","D) Error"],correct:"B"},
{id:"Q96",marks:3,text:"Output of: print('hello'.title())",options:["A) Hello","B) HELLO","C) hello","D) Error"],correct:"A"},
{id:"Q97",marks:3,text:"What will be output? print(sorted({3,1,2}))",options:["A) [1,2,3]","B) {1,2,3}","C) Error","D) None"],correct:"A"},
{id:"Q98",marks:3,text:"Output of: print(bin(10))",options:["A) 1010","B) 0b1010","C) Error","D) None"],correct:"B"},
{id:"Q99",marks:3,text:"What does this print? print(hex(255))",options:["A) ff","B) 0xff","C) Error","D) None"],correct:"B"},
{id:"Q100",marks:3,text:"Output of: print(oct(8))",options:["A) 10","B) 0o10","C) Error","D) None"],correct:"B"}

{id:"Q101",marks:4,text:"Which scenario most clearly indicates overfitting?",options:["A) Training accuracy low, test accuracy high","B) Training accuracy high, test accuracy low","C) Both accuracies low","D) Both accuracies high"],correct:"B"},
{id:"Q102",marks:4,text:"Which regularization technique adds absolute value of weights to loss function?",options:["A) L2 Regularization","B) Dropout","C) L1 Regularization","D) Batch Normalization"],correct:"C"},
{id:"Q103",marks:4,text:"Which situation favors using Precision over Accuracy?",options:["A) Balanced dataset","B) Regression task","C) Imbalanced dataset with rare positive class","D) Large training data"],correct:"C"},
{id:"Q104",marks:4,text:"Which algorithm can naturally handle non-linear decision boundaries without feature engineering?",options:["A) Linear Regression","B) Logistic Regression","C) Decision Tree","D) Naive Bayes"],correct:"C"},
{id:"Q105",marks:4,text:"What happens when learning rate is too high in gradient descent?",options:["A) Converges faster","B) Oscillates or diverges","C) Gets stuck in local minima","D) Reduces overfitting"],correct:"B"},
{id:"Q106",marks:4,text:"Which evaluation metric is threshold-independent?",options:["A) Accuracy","B) F1-score","C) ROC-AUC","D) Precision"],correct:"C"},
{id:"Q107",marks:4,text:"Which model is most prone to overfitting with small datasets?",options:["A) Linear Regression","B) k-Nearest Neighbors (k=1)","C) Naive Bayes","D) Logistic Regression"],correct:"B"},
{id:"Q108",marks:4,text:"Which technique helps reduce variance in ensemble models?",options:["A) Boosting","B) Bagging","C) Regularization","D) Feature scaling"],correct:"B"},
{id:"Q109",marks:4,text:"Which of the following is true about PCA?",options:["A) Maximizes class separability","B) Uses labeled data","C) Preserves maximum variance","D) Always improves accuracy"],correct:"C"},
{id:"Q110",marks:4,text:"Which loss function is most appropriate for multi-class classification?",options:["A) Hinge Loss","B) Mean Squared Error","C) Categorical Cross-Entropy","D) MAE"],correct:"C"},

{id:"Q111",marks:3,text:"Which technique is used to handle class imbalance?",options:["A) Standardization","B) SMOTE","C) PCA","D) Tokenization"],correct:"B"},
{id:"Q112",marks:3,text:"Which hyperparameter directly controls model complexity in Decision Trees?",options:["A) Learning rate","B) Max depth","C) Batch size","D) Dropout rate"],correct:"B"},
{id:"Q113",marks:3,text:"Which algorithm updates weights using backpropagation?",options:["A) K-Means","B) Linear Regression","C) Neural Networks","D) PCA"],correct:"C"},
{id:"Q114",marks:3,text:"Which term describes high model sensitivity to training data noise?",options:["A) Bias","B) Variance","C) Regularization","D) Normalization"],correct:"B"},
{id:"Q115",marks:3,text:"Which technique randomly selects subsets of features for training trees?",options:["A) Boosting","B) Random Forest","C) K-Means","D) Gradient Descent"],correct:"B"},
{id:"Q116",marks:3,text:"Which model assumes linear relationship between features and log-odds?",options:["A) Linear Regression","B) Logistic Regression","C) SVM","D) KNN"],correct:"B"},
{id:"Q117",marks:3,text:"Which method is used to evaluate model stability across multiple splits?",options:["A) Train-test split","B) Cross-validation","C) Regularization","D) Dropout"],correct:"B"},
{id:"Q118",marks:3,text:"Which technique reduces dimensionality while preserving pairwise distances approximately?",options:["A) PCA","B) t-SNE","C) Linear Regression","D) K-Means"],correct:"B"},
{id:"Q119",marks:3,text:"Which scenario suggests underfitting?",options:["A) High training and test accuracy","B) Low training and test accuracy","C) High training accuracy only","D) High test accuracy only"],correct:"B"},
{id:"Q120",marks:3,text:"Which algorithm is sensitive to feature scaling?",options:["A) Decision Tree","B) KNN","C) Random Forest","D) Naive Bayes"],correct:"B"},

{id:"Q121",marks:4,text:"Which optimizer adapts learning rate for each parameter using moving averages of gradients and squared gradients?",options:["A) SGD","B) Momentum","C) Adam","D) Adagrad"],correct:"C"},
{id:"Q122",marks:4,text:"Which neural network issue is addressed by Batch Normalization?",options:["A) Overfitting","B) Vanishing/Exploding gradients","C) Data imbalance","D) Underfitting"],correct:"B"},
{id:"Q123",marks:4,text:"Which task is best suited for unsupervised learning?",options:["A) Predicting stock prices","B) Classifying spam emails","C) Customer segmentation","D) Diagnosing disease"],correct:"C"},
{id:"Q124",marks:4,text:"Which layer in CNN helps achieve translation invariance?",options:["A) Dense Layer","B) Pooling Layer","C) Activation Layer","D) Dropout Layer"],correct:"B"},
{id:"Q125",marks:4,text:"Which architecture is best suited for sequence-to-sequence translation tasks?",options:["A) CNN","B) RNN Encoder-Decoder","C) KNN","D) Linear Regression"],correct:"B"},
{id:"Q126",marks:4,text:"What is the key advantage of attention mechanism over RNNs?",options:["A) Reduces model size","B) Removes need for labeled data","C) Captures long-range dependencies effectively","D) Eliminates overfitting"],correct:"C"},
{id:"Q127",marks:4,text:"Which metric is most suitable for ranking tasks?",options:["A) Accuracy","B) MSE","C) MAP (Mean Average Precision)","D) Recall"],correct:"C"},
{id:"Q128",marks:4,text:"Which scenario requires regression instead of classification?",options:["A) Spam detection","B) Image labeling","C) Predicting house price","D) Disease diagnosis"],correct:"C"},
{id:"Q129",marks:4,text:"Which technique increases bias but reduces variance?",options:["A) Adding features","B) Regularization","C) Increasing model depth","D) Boosting"],correct:"B"},
{id:"Q130",marks:4,text:"Which neural network type is primarily used for image processing?",options:["A) RNN","B) CNN","C) GAN","D) Autoencoder"],correct:"B"},

{id:"Q131",marks:3,text:"Which library is widely used for building deep learning models?",options:["A) Pandas","B) TensorFlow","C) Matplotlib","D) Seaborn"],correct:"B"},
{id:"Q132",marks:3,text:"Which model is commonly used for anomaly detection?",options:["A) Linear Regression","B) Isolation Forest","C) Logistic Regression","D) KNN"],correct:"B"},
{id:"Q133",marks:3,text:"Which term describes systematic error in model predictions?",options:["A) Variance","B) Bias","C) Noise","D) Entropy"],correct:"B"},
{id:"Q134",marks:3,text:"Which step should always be done before model training?",options:["A) Deployment","B) Data preprocessing","C) Model evaluation","D) Monitoring"],correct:"B"},
{id:"Q135",marks:3,text:"Which tree-based algorithm uses gradient boosting framework?",options:["A) Random Forest","B) XGBoost","C) KNN","D) Naive Bayes"],correct:"B"},
{id:"Q136",marks:3,text:"Which concept refers to model performance on unseen data?",options:["A) Overfitting","B) Memorization","C) Generalization","D) Normalization"],correct:"C"},
{id:"Q137",marks:3,text:"Which encoding technique is used for ordinal categorical variables?",options:["A) One-Hot Encoding","B) Label Encoding","C) Tokenization","D) Scaling"],correct:"B"},
{id:"Q138",marks:3,text:"Which neural network is typically used for text data?",options:["A) CNN","B) RNN","C) Linear Regression","D) PCA"],correct:"B"},
{id:"Q139",marks:3,text:"Which metric penalizes false positives more heavily?",options:["A) Recall","B) Precision","C) Accuracy","D) R²"],correct:"B"},
{id:"Q140",marks:3,text:"Which technique randomly drops neurons during training to prevent overfitting?",options:["A) Pooling","B) Batch Norm","C) Dropout","D) Scaling"],correct:"C"},

{id:"Q141",marks:4,text:"Which scenario best demonstrates reinforcement learning?",options:["A) Email spam detection","B) Image classification","C) Game-playing agent learning from rewards","D) Customer clustering"],correct:"C"},
{id:"Q142",marks:4,text:"Which problem does gradient clipping help mitigate?",options:["A) Overfitting","B) Vanishing gradients","C) Exploding gradients","D) Data leakage"],correct:"C"},
{id:"Q143",marks:4,text:"Which generative model learns to generate data by competing networks?",options:["A) CNN","B) GAN","C) RNN","D) SVM"],correct:"B"},
{id:"Q144",marks:4,text:"Which evaluation method is most robust for small datasets?",options:["A) Train-test split","B) Leave-One-Out Cross Validation","C) Random sampling","D) Holdout validation"],correct:"B"},
{id:"Q145",marks:4,text:"Which problem is solved by word embeddings like Word2Vec?",options:["A) Dimensionality reduction","B) Representing words in vector space","C) Text classification","D) Clustering"],correct:"B"},
{id:"Q146",marks:4,text:"Which type of learning uses partially labeled data?",options:["A) Supervised","B) Unsupervised","C) Semi-supervised","D) Reinforcement"],correct:"C"},
{id:"Q147",marks:4,text:"Which model type is used to learn compressed representations of input data?",options:["A) CNN","B) Autoencoder","C) RNN","D) Decision Tree"],correct:"B"},
{id:"Q148",marks:4,text:"Which issue occurs when training and test data distributions differ?",options:["A) Overfitting","B) Data leakage","C) Covariate shift","D) Underfitting"],correct:"C"},
{id:"Q149",marks:4,text:"Which algorithm is most suitable for large-margin classification?",options:["A) KNN","B) SVM","C) Naive Bayes","D) Linear Regression"],correct:"B"},
{id:"Q150",marks:4,text:"Which concept allows the same model to perform multiple related tasks?",options:["A) Overfitting","B) Transfer Learning","C) Regularization","D) Normalization"],correct:"B"}

{id:"Q151",marks:4,text:"Which technique is primarily used to reduce dimensionality while preserving variance?",options:["A) PCA","B) KNN","C) SVM","D) Naive Bayes"],correct:"A"}
{id:"Q152",marks:4,text:"What problem does L1 regularization mainly address?",options:["A) Overfitting","B) Underfitting","C) Feature selection","D) Vanishing gradient"],correct:"C"}
{id:"Q153",marks:4,text:"Which activation function helps mitigate the vanishing gradient problem?",options:["A) Sigmoid","B) Tanh","C) ReLU","D) Softmax"],correct:"C"}
{id:"Q154",marks:4,text:"In supervised learning, what is required?",options:["A) Unlabeled data","B) Labeled data","C) Reinforcement signal","D) Clustering"],correct:"B"}
{id:"Q155",marks:4,text:"Which metric is most suitable for imbalanced classification problems?",options:["A) Accuracy","B) Precision","C) Recall","D) F1-score"],correct:"D"}
{id:"Q156",marks:4,text:"Which algorithm is based on Bayes’ theorem?",options:["A) Decision Tree","B) Naive Bayes","C) K-Means","D) Random Forest"],correct:"B"}
{id:"Q157",marks:4,text:"What does the kernel trick allow in SVMs?",options:["A) Faster training","B) Linear separation","C) Non-linear classification","D) Feature scaling"],correct:"C"}
{id:"Q158",marks:4,text:"Which loss function is commonly used for binary classification?",options:["A) MSE","B) Cross-Entropy","C) Hinge loss","D) MAE"],correct:"B"}
{id:"Q159",marks:4,text:"What is the main purpose of dropout in neural networks?",options:["A) Increase neurons","B) Reduce overfitting","C) Speed up training","D) Normalize data"],correct:"B"}
{id:"Q160",marks:4,text:"Which algorithm is unsupervised?",options:["A) Logistic Regression","B) Linear Regression","C) K-Means","D) SVM"],correct:"C"}
{id:"Q161",marks:4,text:"Which evaluation metric is used for regression problems?",options:["A) Accuracy","B) Precision","C) RMSE","D) Recall"],correct:"C"}
{id:"Q162",marks:4,text:"What does gradient descent aim to minimize?",options:["A) Accuracy","B) Loss function","C) Learning rate","D) Weights"],correct:"B"}
{id:"Q163",marks:4,text:"Which learning rate value may cause divergence?",options:["A) Very small","B) Zero","C) Very large","D) Adaptive"],correct:"C"}
{id:"Q164",marks:4,text:"Which ensemble technique builds trees sequentially?",options:["A) Bagging","B) Boosting","C) Random Forest","D) Stacking"],correct:"B"}
{id:"Q165",marks:4,text:"Which algorithm assumes feature independence?",options:["A) SVM","B) KNN","C) Naive Bayes","D) Logistic Regression"],correct:"C"}
{id:"Q166",marks:4,text:"What does ROC curve represent?",options:["A) Precision vs Recall","B) Accuracy vs Loss","C) TPR vs FPR","D) Sensitivity vs Specificity"],correct:"C"}
{id:"Q167",marks:4,text:"Which technique handles missing values best?",options:["A) Dropping rows","B) Mean imputation","C) Model-based imputation","D) Random deletion"],correct:"C"}
{id:"Q168",marks:4,text:"Which optimizer adapts learning rates for each parameter?",options:["A) SGD","B) Momentum","C) Adam","D) Batch GD"],correct:"C"}
{id:"Q169",marks:4,text:"What is the output range of sigmoid function?",options:["A) (-1,1)","B) (0,1)","C) (-∞,∞)","D) (0,∞)"],correct:"B"}
{id:"Q170",marks:4,text:"Which algorithm is sensitive to feature scaling?",options:["A) Decision Tree","B) KNN","C) Naive Bayes","D) Random Forest"],correct:"B"}
{id:"Q171",marks:4,text:"What does bias represent in the bias-variance tradeoff?",options:["A) Model complexity","B) Error from noise","C) Error from oversimplification","D) Data size"],correct:"C"}
{id:"Q172",marks:4,text:"Which cross-validation method uses k subsets?",options:["A) Holdout","B) Bootstrap","C) K-Fold","D) Stratified sampling"],correct:"C"}
{id:"Q173",marks:4,text:"Which distance metric is used in KNN by default?",options:["A) Manhattan","B) Euclidean","C) Cosine","D) Minkowski"],correct:"B"}
{id:"Q174",marks:4,text:"What is the main drawback of decision trees?",options:["A) High bias","B) Overfitting","C) Underfitting","D) Slow prediction"],correct:"B"}
{id:"Q175",marks:4,text:"Which model works best for linearly separable data?",options:["A) KNN","B) Logistic Regression","C) K-Means","D) DBSCAN"],correct:"B"}
{id:"Q176",marks:4,text:"What does normalization do?",options:["A) Removes outliers","B) Scales features","C) Reduces dimensions","D) Encodes labels"],correct:"B"}
{id:"Q177",marks:4,text:"Which technique improves model generalization?",options:["A) Increasing epochs","B) Regularization","C) Increasing features","D) Reducing data"],correct:"B"}
{id:"Q178",marks:4,text:"Which clustering algorithm does not require number of clusters?",options:["A) K-Means","B) Hierarchical","C) DBSCAN","D) Gaussian Mixture"],correct:"C"}
{id:"Q179",marks:4,text:"Which evaluation uses unseen test data?",options:["A) Training","B) Validation","C) Testing","D) Cross-validation"],correct:"C"}
{id:"Q180",marks:4,text:"What does confusion matrix summarize?",options:["A) Errors","B) Predictions","C) Classification performance","D) Regression error"],correct:"C"}
{id:"Q181",marks:4,text:"Which algorithm is probabilistic?",options:["A) Linear Regression","B) Naive Bayes","C) KNN","D) SVM"],correct:"B"}
{id:"Q182",marks:4,text:"Which technique converts categorical data to numeric?",options:["A) Scaling","B) Encoding","C) Normalization","D) Binning"],correct:"B"}
{id:"Q183",marks:4,text:"What is underfitting?",options:["A) High variance","B) High bias","C) Perfect fit","D) Noise fitting"],correct:"B"}
{id:"Q184",marks:4,text:"Which model is non-parametric?",options:["A) Linear Regression","B) Logistic Regression","C) KNN","D) Naive Bayes"],correct:"C"}
{id:"Q185",marks:4,text:"What is the main goal of reinforcement learning?",options:["A) Minimize loss","B) Maximize reward","C) Reduce variance","D) Cluster data"],correct:"B"}
{id:"Q186",marks:4,text:"Which algorithm uses entropy and information gain?",options:["A) SVM","B) Decision Tree","C) KNN","D) Logistic Regression"],correct:"B"}
{id:"Q187",marks:4,text:"Which technique speeds up gradient descent?",options:["A) Momentum","B) Normalization","C) Bagging","D) Pruning"],correct:"A"}
{id:"Q188",marks:4,text:"What is the curse of dimensionality related to?",options:["A) Overfitting","B) Sparse data","C) High bias","D) Label noise"],correct:"B"}
{id:"Q189",marks:4,text:"Which algorithm works well with small datasets?",options:["A) Deep Neural Networks","B) KNN","C) Linear Regression","D) CNN"],correct:"C"}
{id:"Q190",marks:4,text:"Which metric measures false positives?",options:["A) Recall","B) Precision","C) Specificity","D) Accuracy"],correct:"C"}
{id:"Q191",marks:4,text:"What does early stopping prevent?",options:["A) Underfitting","B) Overfitting","C) High bias","D) Noise"],correct:"B"}
{id:"Q192",marks:4,text:"Which algorithm uses margin maximization?",options:["A) Logistic Regression","B) SVM","C) KNN","D) Naive Bayes"],correct:"B"}
{id:"Q193",marks:4,text:"Which loss function is used in SVM?",options:["A) Cross-entropy","B) Hinge loss","C) MSE","D) Log loss"],correct:"B"}
{id:"Q194",marks:4,text:"Which model is best for sequential data?",options:["A) CNN","B) RNN","C) SVM","D) KNN"],correct:"B"}
{id:"Q195",marks:4,text:"What does batch size control?",options:["A) Dataset size","B) Weight updates","C) Epochs","D) Learning rate"],correct:"B"}
{id:"Q196",marks:4,text:"Which technique reduces model complexity?",options:["A) Feature engineering","B) Regularization","C) Boosting","D) Bagging"],correct:"B"}
{id:"Q197",marks:4,text:"Which algorithm is sensitive to noise?",options:["A) Decision Tree","B) KNN","C) Random Forest","D) Naive Bayes"],correct:"B"}
{id:"Q198",marks:4,text:"What is the output of softmax?",options:["A) Binary values","B) Probabilities","C) Logits","D) Labels"],correct:"B"}
{id:"Q199",marks:4,text:"Which method improves weak learners?",options:["A) Bagging","B) Boosting","C) Pruning","D) Stacking"],correct:"B"}
{id:"Q200",marks:4,text:"Which approach allows a model to learn from rewards and penalties?",options:["A) Supervised learning","B) Unsupervised learning","C) Reinforcement learning","D) Transfer learning"],correct:"C"}

{id:"Q201",marks:4,text:"If the ratio of ages of A and B is 3:5 and the difference of their ages is 12 years, what is A’s age?",options:["A) 18","B) 24","C) 30","D) 36"],correct:"A"}
{id:"Q202",marks:4,text:"A train covers 360 km at a speed of 60 km/h. How much distance will it cover in 30 minutes?",options:["A) 25 km","B) 30 km","C) 35 km","D) 40 km"],correct:"B"}
{id:"Q203",marks:4,text:"The average of 10 numbers is 20. If one number is replaced by 50, the new average becomes 23. What was the replaced number?",options:["A) 10","B) 20","C) 30","D) 40"],correct:"A"}
{id:"Q204",marks:4,text:"If 5 men can complete a work in 12 days, how many days will 8 men take to complete the same work?",options:["A) 7.5","B) 8","C) 9","D) 10"],correct:"A"}
{id:"Q205",marks:4,text:"A sum amounts to ₹8000 in 2 years at simple interest. If the principal is ₹7000, what is the rate of interest per annum?",options:["A) 5%","B) 6%","C) 7.5%","D) 10%"],correct:"C"}
{id:"Q206",marks:4,text:"Find the next number in the series: 2, 6, 12, 20, ?",options:["A) 28","B) 30","C) 32","D) 36"],correct:"A"}
{id:"Q207",marks:4,text:"If the probability of an event is 0.35, what is the probability that it will not occur?",options:["A) 0.35","B) 0.55","C) 0.65","D) 0.75"],correct:"C"}
{id:"Q208",marks:4,text:"The ratio of boys to girls in a class is 4:3. If there are 28 students in total, how many girls are there?",options:["A) 12","B) 14","C) 16","D) 18"],correct:"B"}
{id:"Q209",marks:4,text:"A man walks 10 km north, then 5 km east, then 10 km south. How far is he from the starting point?",options:["A) 5 km","B) 10 km","C) 15 km","D) 20 km"],correct:"A"}
{id:"Q210",marks:4,text:"If x + 1/x = 5, find x² + 1/x².",options:["A) 21","B) 23","C) 25","D) 27"],correct:"A"}
{id:"Q211",marks:4,text:"A clock gains 5 minutes every hour. How much time will it gain in 24 hours?",options:["A) 1 hour","B) 2 hours","C) 3 hours","D) 4 hours"],correct:"B"}
{id:"Q212",marks:4,text:"The HCF of two numbers is 12 and their LCM is 180. If one number is 36, find the other.",options:["A) 48","B) 60","C) 72","D) 90"],correct:"A"}
{id:"Q213",marks:4,text:"If the cost price of 15 items is equal to the selling price of 12 items, what is the gain percentage?",options:["A) 20%","B) 25%","C) 30%","D) 35%"],correct:"B"}
{id:"Q214",marks:4,text:"How many sides does a polygon whose interior angle sum is 1260° have?",options:["A) 8","B) 9","C) 10","D) 11"],correct:"C"}
{id:"Q215",marks:4,text:"A mixture contains milk and water in the ratio 5:2. If 14 liters of water is added, the ratio becomes 5:4. Find the original quantity of milk.",options:["A) 25 L","B) 30 L","C) 35 L","D) 40 L"],correct:"C"}
{id:"Q216",marks:4,text:"If the perimeter of a square is 48 cm, what is its area?",options:["A) 100","B) 121","C) 144","D) 169"],correct:"C"}
{id:"Q217",marks:4,text:"A can do a piece of work in 10 days and B in 15 days. How long will they take together?",options:["A) 5 days","B) 6 days","C) 7 days","D) 8 days"],correct:"B"}
{id:"Q218",marks:4,text:"What is the value of √(0.0009)?",options:["A) 0.003","B) 0.03","C) 0.09","D) 0.3"],correct:"B"}
{id:"Q219",marks:4,text:"The average age of 5 men is 30 years. If a new man joins, the average becomes 32. What is the age of the new man?",options:["A) 40","B) 42","C) 44","D) 46"],correct:"C"}
{id:"Q220",marks:4,text:"If 3x − 5 = 16, what is the value of x?",options:["A) 5","B) 6","C) 7","D) 8"],correct:"C"}
{id:"Q221",marks:4,text:"Find the missing number: 1, 4, 9, 16, ?",options:["A) 20","B) 24","C) 25","D) 36"],correct:"C"}
{id:"Q222",marks:4,text:"If the radius of a circle is doubled, how many times does its area increase?",options:["A) 2","B) 3","C) 4","D) 6"],correct:"C"}
{id:"Q223",marks:4,text:"A boat goes 12 km upstream in 3 hours and returns downstream in 2 hours. Find the speed of the stream.",options:["A) 1 km/h","B) 2 km/h","C) 3 km/h","D) 4 km/h"],correct:"B"}
{id:"Q224",marks:4,text:"What is the smallest number divisible by 8, 12, and 18?",options:["A) 36","B) 48","C) 72","D) 144"],correct:"C"}
{id:"Q225",marks:4,text:"If sin θ = 3/5, find cos θ.",options:["A) 4/5","B) 5/4","C) 3/4","D) 5/3"],correct:"A"}
{id:"Q226",marks:4,text:"In a code, CAT is written as DBU. How is DOG written?",options:["A) EPH","B) EOG","C) EPH","D) FPH"],correct:"A"}
{id:"Q227",marks:4,text:"If the sum of first n natural numbers is 210, find n.",options:["A) 19","B) 20","C) 21","D) 22"],correct:"B"}
{id:"Q228",marks:4,text:"A person invests ₹5000 at 10% compound interest per annum. What will be the amount after 2 years?",options:["A) ₹6000","B) ₹6050","C) ₹6100","D) ₹6200"],correct:"B"}
{id:"Q229",marks:4,text:"If the diagonals of a rectangle are 10 cm each and its length is 8 cm, find its breadth.",options:["A) 4 cm","B) 5 cm","C) 6 cm","D) 7 cm"],correct:"A"}
{id:"Q230",marks:4,text:"Which number should replace the question mark? 3, 6, 18, 72, ?",options:["A) 216","B) 288","C) 360","D) 432"],correct:"B"}
{id:"Q231",marks:4,text:"A shopkeeper sells an item at 15% loss. If the cost price is ₹400, find the selling price.",options:["A) ₹320","B) ₹340","C) ₹360","D) ₹380"],correct:"C"}
{id:"Q232",marks:4,text:"The angles of a triangle are in the ratio 2:3:4. Find the largest angle.",options:["A) 40°","B) 60°","C) 80°","D) 90°"],correct:"C"}
{id:"Q233",marks:4,text:"How many prime numbers are there between 10 and 50?",options:["A) 10","B) 11","C) 12","D) 13"],correct:"B"}
{id:"Q234",marks:4,text:"If a number is increased by 20% and then decreased by 20%, what is the net change?",options:["A) No change","B) 2% decrease","C) 4% decrease","D) 4% increase"],correct:"C"}
{id:"Q235",marks:4,text:"A cube has a volume of 64 cm³. What is the length of its edge?",options:["A) 2 cm","B) 3 cm","C) 4 cm","D) 5 cm"],correct:"C"}
{id:"Q236",marks:4,text:"Find the odd one out: 2, 3, 5, 7, 11, 15",options:["A) 3","B) 5","C) 7","D) 15"],correct:"D"}
{id:"Q237",marks:4,text:"If x:y = 7:9 and y:z = 3:5, find x:z.",options:["A) 7:15","B) 21:45","C) 14:15","D) 21:25"],correct:"D"}
{id:"Q238",marks:4,text:"A sum of money becomes three times in 10 years at simple interest. Find the rate.",options:["A) 10%","B) 15%","C) 20%","D) 25%"],correct:"C"}
{id:"Q239",marks:4,text:"What is the value of (27)^(2/3)?",options:["A) 3","B) 6","C) 9","D) 18"],correct:"C"}
{id:"Q240",marks:4,text:"If 4x + 7 = 3x + 15, find x.",options:["A) 6","B) 7","C) 8","D) 9"],correct:"A"}
{id:"Q241",marks:4,text:"How many cubes of side 2 cm can be cut from a cube of side 8 cm?",options:["A) 16","B) 32","C) 64","D) 128"],correct:"C"}
{id:"Q242",marks:4,text:"A man buys 20 articles for ₹400 and sells them at ₹25 each. Find the profit percentage.",options:["A) 20%","B) 25%","C) 30%","D) 35%"],correct:"B"}
{id:"Q243",marks:4,text:"What is the next term: AZ, BY, CX, ?",options:["A) DW","B) EV","C) DX","D) EW"],correct:"A"}
{id:"Q244",marks:4,text:"If tan θ = 1, what is θ?",options:["A) 30°","B) 45°","C) 60°","D) 90°"],correct:"B"}
{id:"Q245",marks:4,text:"A sum of ₹6000 amounts to ₹7260 in 3 years at compound interest. Find the rate.",options:["A) 6%","B) 7%","C) 8%","D) 9%"],correct:"C"}
{id:"Q246",marks:4,text:"How many even numbers are there between 1 and 100?",options:["A) 48","B) 49","C) 50","D) 51"],correct:"C"}
{id:"Q247",marks:4,text:"If the area of a circle is 154 cm², find its radius. (π = 22/7)",options:["A) 5 cm","B) 6 cm","C) 7 cm","D) 8 cm"],correct:"C"}
{id:"Q248",marks:4,text:"Find the missing number: 5, 10, 20, 40, ?",options:["A) 60","B) 70","C) 80","D) 90"],correct:"C"}
{id:"Q249",marks:4,text:"A and B can complete a work in 18 days and 24 days respectively. In how many days will A alone complete the work?",options:["A) 36","B) 24","C) 18","D) 12"],correct:"C"}
{id:"Q250",marks:4,text:"If the letters of the word LOGIC are arranged alphabetically, which letter comes third?",options:["A) G","B) I","C) L","D) O"],correct:"C"}

{id:"Q251",marks:3,text:"Which cloud service model provides virtual machines and storage?",options:["A) SaaS","B) PaaS","C) IaaS","D) FaaS"],correct:"C"}
{id:"Q252",marks:3,text:"Which cloud deployment model is accessible only within an organization?",options:["A) Public","B) Private","C) Hybrid","D) Community"],correct:"B"}
{id:"Q253",marks:3,text:"Which AWS service is used for object storage?",options:["A) EC2","B) S3","C) RDS","D) Lambda"],correct:"B"}
{id:"Q254",marks:3,text:"What does SaaS stand for?",options:["A) Software as a Service","B) System as a Service","C) Storage as a Service","D) Solution as a Service"],correct:"A"}
{id:"Q255",marks:3,text:"Which cloud feature allows automatic resource scaling?",options:["A) Virtualization","B) Elasticity","C) Multi-tenancy","D) Metering"],correct:"B"}
{id:"Q256",marks:3,text:"Which cloud model combines public and private clouds?",options:["A) Community","B) Private","C) Hybrid","D) Distributed"],correct:"C"}
{id:"Q257",marks:3,text:"Which Google Cloud service is used for virtual machines?",options:["A) Cloud Functions","B) Compute Engine","C) App Engine","D) BigQuery"],correct:"B"}
{id:"Q258",marks:3,text:"Which cloud characteristic means users share resources?",options:["A) Elasticity","B) Scalability","C) Multi-tenancy","D) Availability"],correct:"C"}
{id:"Q259",marks:3,text:"Which Azure service provides scalable blob storage?",options:["A) Azure VM","B) Azure SQL","C) Azure Blob Storage","D) Azure DevOps"],correct:"C"}
{id:"Q260",marks:3,text:"Which service model hides infrastructure management from users?",options:["A) IaaS","B) PaaS","C) SaaS","D) DaaS"],correct:"C"}
{id:"Q261",marks:3,text:"What does cloud elasticity refer to?",options:["A) Fixed capacity","B) Resource pooling","C) On-demand scaling","D) High latency"],correct:"C"}
{id:"Q262",marks:3,text:"Which AWS service is serverless?",options:["A) EC2","B) S3","C) Lambda","D) EBS"],correct:"C"}
{id:"Q263",marks:3,text:"Which cloud concept ensures high availability?",options:["A) Load balancing","B) Virtualization","C) Encryption","D) Metering"],correct:"A"}
{id:"Q264",marks:3,text:"Which pricing model charges based on usage?",options:["A) Fixed pricing","B) Subscription","C) Pay-as-you-go","D) License-based"],correct:"C"}
{id:"Q265",marks:3,text:"Which protocol is commonly used for cloud data security?",options:["A) FTP","B) HTTP","C) HTTPS","D) SMTP"],correct:"C"}
{id:"Q266",marks:3,text:"Which AWS service provides relational databases?",options:["A) DynamoDB","B) RDS","C) S3","D) Redshift"],correct:"B"}
{id:"Q267",marks:3,text:"What is the main benefit of cloud computing?",options:["A) Higher latency","B) Cost efficiency","C) Manual scaling","D) Hardware ownership"],correct:"B"}
{id:"Q268",marks:3,text:"Which cloud service is best for hosting web applications without managing servers?",options:["A) IaaS","B) PaaS","C) On-premise","D) Colocation"],correct:"B"}
{id:"Q269",marks:3,text:"Which term refers to delivering services over the internet?",options:["A) Virtualization","B) Cloud computing","C) Grid computing","D) Edge computing"],correct:"B"}
{id:"Q270",marks:3,text:"Which AWS service distributes traffic across instances?",options:["A) Auto Scaling","B) Load Balancer","C) CloudFront","D) Route 53"],correct:"B"}
{id:"Q271",marks:3,text:"Which cloud storage type stores data as objects?",options:["A) Block storage","B) File storage","C) Object storage","D) Cache storage"],correct:"C"}
{id:"Q272",marks:3,text:"Which factor enables disaster recovery in cloud?",options:["A) Redundancy","B) Latency","C) Encryption","D) Virtual memory"],correct:"A"}
{id:"Q273",marks:3,text:"Which Azure service is used for serverless computing?",options:["A) Azure VM","B) Azure Functions","C) Azure Storage","D) Azure SQL"],correct:"B"}
{id:"Q274",marks:3,text:"Which cloud concept allows access from anywhere?",options:["A) Broad network access","B) Resource pooling","C) Elasticity","D) Metering"],correct:"A"}
{id:"Q275",marks:3,text:"Which service model is best for developers to deploy code quickly?",options:["A) SaaS","B) IaaS","C) PaaS","D) DaaS"],correct:"C"}
{id:"Q276",marks:3,text:"Which AWS service is used for DNS management?",options:["A) CloudFront","B) Route 53","C) VPC","D) IAM"],correct:"B"}
{id:"Q277",marks:3,text:"Which cloud term refers to measuring resource usage?",options:["A) Scalability","B) Metering","C) Elasticity","D) Orchestration"],correct:"B"}
{id:"Q278",marks:3,text:"Which cloud deployment model offers maximum control?",options:["A) Public cloud","B) Private cloud","C) Hybrid cloud","D) Community cloud"],correct:"B"}
{id:"Q279",marks:3,text:"Which AWS service manages user access and permissions?",options:["A) EC2","B) IAM","C) CloudWatch","D) S3"],correct:"B"}
{id:"Q280",marks:3,text:"What does PaaS primarily provide?",options:["A) Hardware","B) Development platform","C) End-user software","D) Network cables"],correct:"B"}
{id:"Q281",marks:3,text:"Which cloud benefit reduces capital expenditure?",options:["A) Scalability","B) Pay-as-you-go","C) Virtualization","D) Automation"],correct:"B"}
{id:"Q282",marks:3,text:"Which technology enables cloud resource abstraction?",options:["A) Encryption","B) Virtualization","C) Load balancing","D) Replication"],correct:"B"}
{id:"Q283",marks:3,text:"Which AWS service monitors cloud resources?",options:["A) CloudTrail","B) CloudWatch","C) Inspector","D) Shield"],correct:"B"}
{id:"Q284",marks:3,text:"Which cloud type is shared among organizations with similar needs?",options:["A) Public","B) Private","C) Community","D) Hybrid"],correct:"C"}
{id:"Q285",marks:3,text:"Which cloud model offers the least user control?",options:["A) IaaS","B) PaaS","C) SaaS","D) Private cloud"],correct:"C"}
{id:"Q286",marks:3,text:"Which AWS service provides content delivery network (CDN)?",options:["A) Route 53","B) CloudFront","C) S3","D) EC2"],correct:"B"}
{id:"Q287",marks:3,text:"Which cloud concept supports fault tolerance?",options:["A) Single instance","B) Redundancy","C) Metering","D) Latency"],correct:"B"}
{id:"Q288",marks:3,text:"Which Azure service provides SQL databases?",options:["A) Azure Blob","B) Azure SQL Database","C) Azure VM","D) Azure Functions"],correct:"B"}
{id:"Q289",marks:3,text:"Which cloud feature allows rapid provisioning?",options:["A) Manual setup","B) On-demand self-service","C) Fixed allocation","D) Hardware purchase"],correct:"B"}
{id:"Q290",marks:3,text:"Which AWS service provides NoSQL database?",options:["A) RDS","B) DynamoDB","C) Aurora","D) Redshift"],correct:"B"}
{id:"Q291",marks:3,text:"Which cloud concept ensures data confidentiality?",options:["A) Encryption","B) Redundancy","C) Load balancing","D) Elasticity"],correct:"A"}
{id:"Q292",marks:3,text:"Which service model is best for email services like Gmail?",options:["A) IaaS","B) PaaS","C) SaaS","D) FaaS"],correct:"C"}
{id:"Q293",marks:3,text:"Which cloud benefit improves application performance globally?",options:["A) Virtualization","B) CDN","C) Metering","D) Auto scaling"],correct:"B"}
{id:"Q294",marks:3,text:"Which AWS service provides virtual networking?",options:["A) VPC","B) IAM","C) EC2","D) S3"],correct:"A"}
{id:"Q295",marks:3,text:"Which cloud service reduces server management overhead?",options:["A) IaaS","B) On-premise","C) Serverless","D) Colocation"],correct:"C"}
{id:"Q296",marks:3,text:"Which cloud characteristic enables cost tracking?",options:["A) Metered service","B) Elasticity","C) Resource pooling","D) Availability"],correct:"A"}
{id:"Q297",marks:3,text:"Which AWS service is used for container orchestration?",options:["A) ECS","B) EC2","C) Lambda","D) S3"],correct:"A"}
{id:"Q298",marks:3,text:"Which cloud term means ability to handle increased workload?",options:["A) Availability","B) Scalability","C) Elasticity","D) Reliability"],correct:"B"}
{id:"Q299",marks:3,text:"Which cloud security feature controls user permissions?",options:["A) Firewall","B) IAM","C) CDN","D) Backup"],correct:"B"}
{id:"Q300",marks:3,text:"Which cloud model allows users to rent infrastructure?",options:["A) SaaS","B) PaaS","C) IaaS","D) FaaS"],correct:"C"}
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
