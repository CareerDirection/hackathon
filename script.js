// ================= CONFIG =================
const EXAM_DURATION_MIN = 40;
const QUESTIONS_PER_EXAM = 30;
const MAX_WARNINGS = 10;
const LOCK_DAYS = 15;
const ADMIN_RESET_CODE = "JJ5533!jj5533";

const WRONG_PENALTY = 2;
const UNANSWERED_BLOCK_PENALTY = 2;

// ================= QUESTION BANK (ADD MORE LATER) =================
const questionBank = [
{id:"Q1",marks:3,text:"Which data structure follows FIFO?",options:["A) Queue","B) Stack","C) Tree","D) Heap"],correct:"A"},
{id:"Q2",marks:3,text:"Which keyword defines a function in Python?",options:["A) func","B) define","C) def","D) function"],correct:"C"},
{id:"Q3",marks:3,text:"Which protocol is used for secure web browsing?",options:["A) HTTP","B) FTP","C) HTTPS","D) SMTP"],correct:"C"},
{id:"Q4",marks:3,text:"Which device stores data permanently?",options:["A) RAM","B) Cache","C) Register","D) Hard Disk"],correct:"D"},
{id:"Q5",marks:3,text:"Which sorting algorithm has O(n log n) average time?",options:["A) Merge Sort","B) Bubble Sort","C) Insertion Sort","D) Selection Sort"],correct:"A"},
{id:"Q6",marks:3,text:"Which is a NoSQL database?",options:["A) MySQL","B) MongoDB","C) Oracle","D) PostgreSQL"],correct:"B"},
{id:"Q7",marks:3,text:"Which component executes program instructions?",options:["A) RAM","B) CPU","C) HDD","D) GPU"],correct:"B"},
{id:"Q8",marks:3,text:"Which symbol is used for comments in Python?",options:["A) //","B) <!--","C) #","D) **"],correct:"C"},
{id:"Q9",marks:3,text:"Which data type is immutable in Python?",options:["A) List","B) Set","C) Tuple","D) Dictionary"],correct:"C"},
{id:"Q10",marks:3,text:"Which HTTP method retrieves data?",options:["A) POST","B) GET","C) DELETE","D) PUT"],correct:"B"},

{id:"Q11",marks:4,text:"Which algorithm is used for shortest path (no negative edges)?",options:["A) BFS","B) Dijkstra","C) DFS","D) Kruskal"],correct:"B"},
{id:"Q12",marks:4,text:"Which SQL clause is used to filter groups?",options:["A) WHERE","B) HAVING","C) ORDER BY","D) GROUP"],correct:"B"},
{id:"Q13",marks:4,text:"Which memory is fastest?",options:["A) RAM","B) Cache","C) HDD","D) SSD"],correct:"B"},
{id:"Q14",marks:4,text:"Which is used to containerize applications?",options:["A) Docker","B) Git","C) Jenkins","D) Linux"],correct:"A"},
{id:"Q15",marks:4,text:"Which AWS service is serverless compute?",options:["A) EC2","B) S3","C) Lambda","D) RDS"],correct:"C"},
{id:"Q16",marks:4,text:"Which data structure uses LIFO?",options:["A) Queue","B) Stack","C) Heap","D) Graph"],correct:"B"},
{id:"Q17",marks:4,text:"Which ML type uses labeled data?",options:["A) Supervised","B) Unsupervised","C) Reinforcement","D) Clustering"],correct:"A"},
{id:"Q18",marks:4,text:"Which command is used to install packages in Python?",options:["A) install","B) pip","C) setup","D) python-get"],correct:"B"},
{id:"Q19",marks:4,text:"Which traversal gives sorted output in BST?",options:["A) Preorder","B) Postorder","C) Inorder","D) Level order"],correct:"C"},
{id:"Q20",marks:4,text:"Which network device forwards packets between networks?",options:["A) Switch","B) Hub","C) Router","D) Repeater"],correct:"C"},

{id:"Q21",marks:3,text:"Which protocol sends emails?",options:["A) SMTP","B) FTP","C) HTTP","D) SSH"],correct:"A"},
{id:"Q22",marks:3,text:"Which is not an operating system?",options:["A) Linux","B) Windows","C) Oracle","D) macOS"],correct:"C"},
{id:"Q23",marks:3,text:"Which operator is used for exponentiation in Python?",options:["A) ^","B) **","C) exp","D) pow"],correct:"B"},
{id:"Q24",marks:3,text:"Which language is used for web page structure?",options:["A) CSS","B) JavaScript","C) HTML","D) SQL"],correct:"C"},
{id:"Q25",marks:3,text:"Which is volatile memory?",options:["A) ROM","B) SSD","C) HDD","D) RAM"],correct:"D"},
{id:"Q26",marks:3,text:"Which is a linear data structure?",options:["A) Tree","B) Graph","C) Array","D) Heap"],correct:"C"},
{id:"Q27",marks:3,text:"Which cloud model offers services over the internet?",options:["A) Private","B) Public","C) Hybrid","D) Community"],correct:"B"},
{id:"Q28",marks:3,text:"Which protocol transfers files?",options:["A) HTTP","B) SMTP","C) FTP","D) POP3"],correct:"C"},
{id:"Q29",marks:3,text:"Which symbol represents AND in logic?",options:["A) ||","B) &&","C) !","D) ^"],correct:"B"},
{id:"Q30",marks:3,text:"Which is a primary key property?",options:["A) Duplicate","B) Null","C) Unique","D) Optional"],correct:"C"},

{id:"Q31",marks:4,text:"Which SQL command removes a table?",options:["A) DELETE","B) REMOVE","C) DROP","D) CLEAR"],correct:"C"},
{id:"Q32",marks:4,text:"Which algorithm uses divide and conquer?",options:["A) Merge Sort","B) Linear Search","C) BFS","D) DFS"],correct:"A"},
{id:"Q33",marks:4,text:"Which HTTP code means Not Found?",options:["A) 200","B) 301","C) 404","D) 500"],correct:"C"},
{id:"Q34",marks:4,text:"Which DS is best for recursion stack?",options:["A) Queue","B) Stack","C) Heap","D) Array"],correct:"B"},
{id:"Q35",marks:4,text:"Which is relational database?",options:["A) MongoDB","B) DynamoDB","C) MySQL","D) Redis"],correct:"C"},
{id:"Q36",marks:4,text:"Which protocol secures remote login?",options:["A) Telnet","B) FTP","C) SSH","D) SMTP"],correct:"C"},
{id:"Q37",marks:4,text:"Which sorting is stable?",options:["A) Quick Sort","B) Heap Sort","C) Merge Sort","D) Selection Sort"],correct:"C"},
{id:"Q38",marks:4,text:"Which memory stores boot program?",options:["A) RAM","B) Cache","C) ROM","D) Register"],correct:"C"},
{id:"Q39",marks:4,text:"Which is a scripting language?",options:["A) C","B) Python","C) Java","D) C++"],correct:"B"},
{id:"Q40",marks:4,text:"Which structure handles LRU cache?",options:["A) Queue","B) Stack","C) HashMap + DLL","D) Tree"],correct:"C"},

{id:"Q41",marks:3,text:"Which keyword exits loop in Python?",options:["A) break","B) stop","C) end","D) exit"],correct:"A"},
{id:"Q42",marks:3,text:"Which protocol is used for DNS lookup?",options:["A) HTTP","B) SMTP","C) DNS","D) FTP"],correct:"C"},
{id:"Q43",marks:3,text:"Which operator checks equality in Python?",options:["A) =","B) ==","C) ===","D) equals"],correct:"B"},
{id:"Q44",marks:3,text:"Which is a front-end language?",options:["A) Python","B) Java","C) HTML","D) C"],correct:"C"},
{id:"Q45",marks:3,text:"Which stores key-value pairs?",options:["A) List","B) Tuple","C) Dictionary","D) Set"],correct:"C"},
{id:"Q46",marks:3,text:"Which OS manages hardware?",options:["A) Compiler","B) OS Kernel","C) BIOS","D) Driver"],correct:"B"},
{id:"Q47",marks:3,text:"Which is used for version control?",options:["A) Git","B) Docker","C) Linux","D) Jenkins"],correct:"A"},
{id:"Q48",marks:3,text:"Which network topology uses central hub?",options:["A) Bus","B) Ring","C) Star","D) Mesh"],correct:"C"},
{id:"Q49",marks:3,text:"Which is not cloud service model?",options:["A) IaaS","B) PaaS","C) SaaS","D) DaaS"],correct:"D"},
{id:"Q50",marks:3,text:"Which loop executes at least once?",options:["A) for","B) while","C) do-while","D) foreach"],correct:"C"},

{id:"Q51",marks:3,text:"Which structure is used to implement BFS?",options:["A) Stack","B) Queue","C) Heap","D) Tree"],correct:"B"},
{id:"Q52",marks:3,text:"Which keyword creates a class in Java?",options:["A) function","B) struct","C) class","D) object"],correct:"C"},
{id:"Q53",marks:3,text:"Which protocol is used to receive emails?",options:["A) SMTP","B) POP3","C) HTTP","D) FTP"],correct:"B"},
{id:"Q54",marks:3,text:"Which number system uses base 16?",options:["A) Binary","B) Decimal","C) Octal","D) Hexadecimal"],correct:"D"},
{id:"Q55",marks:3,text:"Which is not a loop structure?",options:["A) for","B) while","C) repeat","D) switch"],correct:"D"},
{id:"Q56",marks:3,text:"Which HTML tag creates a hyperlink?",options:["A) <link>","B) <a>","C) <href>","D) <url>"],correct:"B"},
{id:"Q57",marks:3,text:"Which memory is non-volatile?",options:["A) RAM","B) Cache","C) ROM","D) Register"],correct:"C"},
{id:"Q58",marks:3,text:"Which structure is hierarchical?",options:["A) Array","B) Linked List","C) Tree","D) Stack"],correct:"C"},
{id:"Q59",marks:3,text:"Which command shows current directory in Linux?",options:["A) dir","B) pwd","C) ls","D) cd"],correct:"B"},
{id:"Q60",marks:3,text:"Which symbol is used for OR in many languages?",options:["A) &&","B) ||","C) !","D) ^"],correct:"B"},

{id:"Q61",marks:4,text:"Which algorithm is used in minimum spanning tree?",options:["A) Dijkstra","B) Kruskal","C) DFS","D) Binary Search"],correct:"B"},
{id:"Q62",marks:4,text:"Which data structure allows O(1) insertion at end?",options:["A) Array (dynamic)","B) Linked List","C) Tree","D) Heap"],correct:"A"},
{id:"Q63",marks:4,text:"Which HTTP code means Internal Server Error?",options:["A) 200","B) 403","C) 500","D) 302"],correct:"C"},
{id:"Q64",marks:4,text:"Which SQL command adds a new column?",options:["A) MODIFY","B) ADD","C) INSERT","D) ALTER"],correct:"D"},
{id:"Q65",marks:4,text:"Which is used to virtualize containers?",options:["A) Hypervisor","B) Docker Engine","C) BIOS","D) Firmware"],correct:"B"},
{id:"Q66",marks:4,text:"Which protocol resolves domain names?",options:["A) HTTP","B) DNS","C) ARP","D) FTP"],correct:"B"},
{id:"Q67",marks:4,text:"Which Python structure removes duplicates automatically?",options:["A) List","B) Tuple","C) Set","D) Dictionary"],correct:"C"},
{id:"Q68",marks:4,text:"Which search works only on sorted data?",options:["A) Linear","B) Binary","C) DFS","D) BFS"],correct:"B"},
{id:"Q69",marks:4,text:"Which layer handles encryption in OSI?",options:["A) Session","B) Presentation","C) Transport","D) Network"],correct:"B"},
{id:"Q70",marks:4,text:"Which command initializes a Git repository?",options:["A) git start","B) git init","C) git new","D) git create"],correct:"B"},

{id:"Q71",marks:3,text:"Which symbol denotes pointer in C?",options:["A) &","B) *","C) #","D) %"],correct:"B"},
{id:"Q72",marks:3,text:"Which tag is used for images in HTML?",options:["A) <image>","B) <img>","C) <pic>","D) <src>"],correct:"B"},
{id:"Q73",marks:3,text:"Which device connects different networks?",options:["A) Switch","B) Hub","C) Router","D) Bridge"],correct:"C"},
{id:"Q74",marks:3,text:"Which is an interpreted language?",options:["A) C","B) C++","C) Python","D) Rust"],correct:"C"},
{id:"Q75",marks:3,text:"Which structure is used in recursion memory?",options:["A) Queue","B) Heap","C) Stack","D) Array"],correct:"C"},
{id:"Q76",marks:3,text:"Which is not a DBMS?",options:["A) Oracle","B) MySQL","C) Linux","D) SQL Server"],correct:"C"},
{id:"Q77",marks:3,text:"Which protocol is used for file transfer?",options:["A) SMTP","B) FTP","C) HTTP","D) POP3"],correct:"B"},
{id:"Q78",marks:3,text:"Which logic gate outputs true only if both inputs are true?",options:["A) OR","B) NOT","C) AND","D) XOR"],correct:"C"},
{id:"Q79",marks:3,text:"Which symbol starts a CSS class selector?",options:["A) #","B) .","C) *","D) &"],correct:"B"},
{id:"Q80",marks:3,text:"Which is used to style web pages?",options:["A) HTML","B) CSS","C) SQL","D) Python"],correct:"B"},

{id:"Q81",marks:4,text:"Which algorithm detects cycles in graph?",options:["A) BFS","B) DFS","C) Dijkstra","D) Kruskal"],correct:"B"},
{id:"Q82",marks:4,text:"Which data structure is best for priority queue?",options:["A) Stack","B) Heap","C) Array","D) Linked List"],correct:"B"},
{id:"Q83",marks:4,text:"Which HTTP method deletes resource?",options:["A) GET","B) POST","C) DELETE","D) PUT"],correct:"C"},
{id:"Q84",marks:4,text:"Which normal form removes transitive dependency?",options:["A) 1NF","B) 2NF","C) 3NF","D) BCNF"],correct:"C"},
{id:"Q85",marks:4,text:"Which cloud model is shared between orgs?",options:["A) Public","B) Private","C) Hybrid","D) Community"],correct:"D"},
{id:"Q86",marks:4,text:"Which structure is best for undo/redo feature?",options:["A) Queue","B) Stack","C) Tree","D) Graph"],correct:"B"},
{id:"Q87",marks:4,text:"Which protocol secures data in transit?",options:["A) FTP","B) Telnet","C) HTTPS","D) SMTP"],correct:"C"},
{id:"Q88",marks:4,text:"Which algorithm uses greedy method?",options:["A) Merge Sort","B) Quick Sort","C) Dijkstra","D) DFS"],correct:"C"},
{id:"Q89",marks:4,text:"Which command stages changes in Git?",options:["A) git push","B) git add","C) git commit","D) git clone"],correct:"B"},
{id:"Q90",marks:4,text:"Which OS manages processes?",options:["A) BIOS","B) Kernel","C) Driver","D) Shell"],correct:"B"},

{id:"Q91",marks:3,text:"Which language runs in browser?",options:["A) Python","B) C","C) JavaScript","D) Java"],correct:"C"},
{id:"Q92",marks:3,text:"Which device amplifies signals?",options:["A) Router","B) Repeater","C) Switch","D) Hub"],correct:"B"},
{id:"Q93",marks:3,text:"Which is not an OOP principle?",options:["A) Encapsulation","B) Abstraction","C) Compilation","D) Inheritance"],correct:"C"},
{id:"Q94",marks:3,text:"Which symbol is modulus operator?",options:["A) %","B) //","C) **","D) =="],correct:"A"},
{id:"Q95",marks:3,text:"Which HTML tag defines table row?",options:["A) <td>","B) <th>","C) <tr>","D) <table>"],correct:"C"},
{id:"Q96",marks:3,text:"Which storage is fastest?",options:["A) HDD","B) SSD","C) RAM","D) Cache"],correct:"D"},
{id:"Q97",marks:3,text:"Which tool builds CI pipelines?",options:["A) Git","B) Jenkins","C) Docker","D) AWS"],correct:"B"},
{id:"Q98",marks:3,text:"Which is a key-value store DB?",options:["A) MySQL","B) Redis","C) PostgreSQL","D) Oracle"],correct:"B"},
{id:"Q99",marks:3,text:"Which layer handles routing?",options:["A) Data Link","B) Transport","C) Network","D) Application"],correct:"C"},
{id:"Q100",marks:3,text:"Which structure allows fast search and insert?",options:["A) Linked List","B) Hash Table","C) Stack","D) Queue"],correct:"B"},

{id:"Q101",marks:3,text:"Which algorithm is used for searching in unsorted data?",options:["A) Binary Search","B) Linear Search","C) DFS","D) BFS"],correct:"B"},
{id:"Q102",marks:3,text:"Which is used to style HTML elements?",options:["A) Python","B) Java","C) CSS","D) SQL"],correct:"C"},
{id:"Q103",marks:3,text:"Which symbol denotes ID selector in CSS?",options:["A) .","B) #","C) *","D) &"],correct:"B"},
{id:"Q104",marks:3,text:"Which device works at data link layer?",options:["A) Router","B) Switch","C) Hub","D) Repeater"],correct:"B"},
{id:"Q105",marks:3,text:"Which keyword is used for inheritance in Java?",options:["A) implement","B) extend","C) inherits","D) using"],correct:"B"},
{id:"Q106",marks:3,text:"Which memory is closest to CPU?",options:["A) RAM","B) Cache","C) HDD","D) SSD"],correct:"B"},
{id:"Q107",marks:3,text:"Which command compiles Java code?",options:["A) java","B) run","C) javac","D) compile"],correct:"C"},
{id:"Q108",marks:3,text:"Which protocol transfers web pages?",options:["A) FTP","B) HTTP","C) SMTP","D) SSH"],correct:"B"},
{id:"Q109",marks:3,text:"Which is not a cloud provider?",options:["A) AWS","B) Azure","C) Google Cloud","D) Oracle DB"],correct:"D"},
{id:"Q110",marks:3,text:"Which logic gate inverts input?",options:["A) AND","B) OR","C) XOR","D) NOT"],correct:"D"},

{id:"Q111",marks:4,text:"Which DS is best for implementing recursion?",options:["A) Queue","B) Stack","C) Heap","D) Array"],correct:"B"},
{id:"Q112",marks:4,text:"Which SQL clause sorts results?",options:["A) GROUP BY","B) ORDER BY","C) HAVING","D) WHERE"],correct:"B"},
{id:"Q113",marks:4,text:"Which is used for virtualization of OS?",options:["A) Docker","B) Hypervisor","C) Git","D) Python"],correct:"B"},
{id:"Q114",marks:4,text:"Which algorithm uses dynamic programming?",options:["A) Binary Search","B) Fibonacci DP","C) DFS","D) BFS"],correct:"B"},
{id:"Q115",marks:4,text:"Which HTTP method creates a resource?",options:["A) GET","B) POST","C) DELETE","D) PATCH"],correct:"B"},
{id:"Q116",marks:4,text:"Which normalization removes partial dependency?",options:["A) 1NF","B) 2NF","C) 3NF","D) BCNF"],correct:"B"},
{id:"Q117",marks:4,text:"Which network topology has all nodes connected?",options:["A) Bus","B) Ring","C) Star","D) Mesh"],correct:"D"},
{id:"Q118",marks:4,text:"Which AWS service stores objects?",options:["A) EC2","B) Lambda","C) S3","D) RDS"],correct:"C"},
{id:"Q119",marks:4,text:"Which sorting algorithm uses pivot element?",options:["A) Merge Sort","B) Quick Sort","C) Heap Sort","D) Bubble Sort"],correct:"B"},
{id:"Q120",marks:4,text:"Which is used for orchestration of containers?",options:["A) Docker","B) Jenkins","C) Kubernetes","D) Git"],correct:"C"},

{id:"Q121",marks:3,text:"Which symbol ends statement in C?",options:["A) .","B) ;","C) :","D) !"],correct:"B"},
{id:"Q122",marks:3,text:"Which tool is used for code versioning?",options:["A) Docker","B) Git","C) AWS","D) Jenkins"],correct:"B"},
{id:"Q123",marks:3,text:"Which HTML tag creates paragraph?",options:["A) <p>","B) <para>","C) <text>","D) <br>"],correct:"A"},
{id:"Q124",marks:3,text:"Which memory is volatile?",options:["A) ROM","B) HDD","C) RAM","D) SSD"],correct:"C"},
{id:"Q125",marks:3,text:"Which protocol is used to send emails?",options:["A) SMTP","B) FTP","C) DNS","D) HTTP"],correct:"A"},
{id:"Q126",marks:3,text:"Which DS stores elements in contiguous memory?",options:["A) Array","B) Linked List","C) Tree","D) Graph"],correct:"A"},
{id:"Q127",marks:3,text:"Which OSI layer handles data formatting?",options:["A) Network","B) Session","C) Presentation","D) Transport"],correct:"C"},
{id:"Q128",marks:3,text:"Which operator is used for logical AND?",options:["A) &&","B) ||","C) !","D) ^"],correct:"A"},
{id:"Q129",marks:3,text:"Which is backend language?",options:["A) HTML","B) CSS","C) Python","D) XML"],correct:"C"},
{id:"Q130",marks:3,text:"Which is not programming language?",options:["A) Java","B) Python","C) HTML","D) C++"],correct:"C"},

{id:"Q131",marks:4,text:"Which algorithm finds MST?",options:["A) Dijkstra","B) Kruskal","C) DFS","D) BFS"],correct:"B"},
{id:"Q132",marks:4,text:"Which command shows files in Linux?",options:["A) cd","B) ls","C) pwd","D) dir"],correct:"B"},
{id:"Q133",marks:4,text:"Which database uses documents?",options:["A) MySQL","B) MongoDB","C) PostgreSQL","D) Oracle"],correct:"B"},
{id:"Q134",marks:4,text:"Which protocol secures remote terminal?",options:["A) Telnet","B) FTP","C) SSH","D) SMTP"],correct:"C"},
{id:"Q135",marks:4,text:"Which layer handles end-to-end communication?",options:["A) Network","B) Data Link","C) Transport","D) Application"],correct:"C"},
{id:"Q136",marks:4,text:"Which algorithm is used in load balancing hash?",options:["A) Consistent Hashing","B) DFS","C) BFS","D) Binary Search"],correct:"A"},
{id:"Q137",marks:4,text:"Which service provides CDN?",options:["A) EC2","B) CloudFront","C) Lambda","D) RDS"],correct:"B"},
{id:"Q138",marks:4,text:"Which DS is used in expression evaluation?",options:["A) Queue","B) Stack","C) Tree","D) Graph"],correct:"B"},
{id:"Q139",marks:4,text:"Which HTTP status means unauthorized?",options:["A) 200","B) 301","C) 403","D) 500"],correct:"C"},
{id:"Q140",marks:4,text:"Which command pushes code to remote?",options:["A) git commit","B) git push","C) git add","D) git pull"],correct:"B"},

{id:"Q141",marks:3,text:"Which unit measures CPU speed?",options:["A) Byte","B) Hertz","C) Volt","D) Watt"],correct:"B"},
{id:"Q142",marks:3,text:"Which symbol begins JS comment?",options:["A) <!--","B) //","C) #","D) **"],correct:"B"},
{id:"Q143",marks:3,text:"Which is used for AI model training?",options:["A) TensorFlow","B) HTML","C) CSS","D) Git"],correct:"A"},
{id:"Q144",marks:3,text:"Which DS is best for undo feature?",options:["A) Queue","B) Stack","C) Heap","D) Graph"],correct:"B"},
{id:"Q145",marks:3,text:"Which protocol assigns IP automatically?",options:["A) DNS","B) FTP","C) DHCP","D) SMTP"],correct:"C"},
{id:"Q146",marks:3,text:"Which symbol denotes class selector in CSS?",options:["A) #","B) .","C) *","D) &"],correct:"B"},
{id:"Q147",marks:3,text:"Which tool builds containers?",options:["A) Git","B) Docker","C) AWS","D) Linux"],correct:"B"},
{id:"Q148",marks:3,text:"Which type of DB stores rows and columns?",options:["A) NoSQL","B) Relational","C) Graph","D) Document"],correct:"B"},
{id:"Q149",marks:3,text:"Which protocol is used for secure file transfer?",options:["A) FTP","B) SFTP","C) HTTP","D) SMTP"],correct:"B"},
{id:"Q150",marks:3,text:"Which DS is used in BFS?",options:["A) Stack","B) Queue","C) Tree","D) Graph"],correct:"B"},

{id:"Q151",marks:4,text:"Which AWS service is used for serverless compute?",options:["A) EC2","B) Lambda","C) RDS","D) S3"],correct:"B"},
{id:"Q152",marks:4,text:"Which algorithm is best for shortest path with no negative weights?",options:["A) Bellman-Ford","B) Dijkstra","C) Floyd Warshall","D) Kruskal"],correct:"B"},
{id:"Q153",marks:4,text:"Which SQL command removes a table permanently?",options:["A) DELETE","B) DROP","C) REMOVE","D) CLEAR"],correct:"B"},
{id:"Q154",marks:4,text:"Which structure uses FIFO?",options:["A) Stack","B) Queue","C) Heap","D) Tree"],correct:"B"},
{id:"Q155",marks:4,text:"Which algorithm technique avoids recomputation using stored results?",options:["A) Greedy","B) Divide and Conquer","C) Dynamic Programming","D) Brute Force"],correct:"C"},
{id:"Q156",marks:4,text:"Which protocol translates domain names to IP addresses?",options:["A) HTTP","B) FTP","C) DNS","D) TCP"],correct:"C"},
{id:"Q157",marks:4,text:"Which OSI layer is responsible for routing?",options:["A) Data Link","B) Transport","C) Network","D) Session"],correct:"C"},
{id:"Q158",marks:4,text:"Which HTTP method partially updates resource?",options:["A) PUT","B) POST","C) PATCH","D) GET"],correct:"C"},
{id:"Q159",marks:4,text:"Which design pattern ensures a class has only one instance?",options:["A) Factory","B) Singleton","C) Observer","D) Adapter"],correct:"B"},
{id:"Q160",marks:4,text:"Which DB index improves search speed?",options:["A) Primary Key","B) Foreign Key","C) Index","D) Trigger"],correct:"C"},

{id:"Q161",marks:3,text:"Which command initializes a git repo?",options:["A) git start","B) git init","C) git new","D) git create"],correct:"B"},
{id:"Q162",marks:3,text:"Which language runs in browser?",options:["A) Python","B) Java","C) JavaScript","D) C++"],correct:"C"},
{id:"Q163",marks:3,text:"Which storage is persistent?",options:["A) RAM","B) Cache","C) SSD","D) Register"],correct:"C"},
{id:"Q164",marks:3,text:"Which operator is exponent in Python?",options:["A) ^","B) **","C) //","D) %"],correct:"B"},
{id:"Q165",marks:3,text:"Which port is HTTPS?",options:["A) 21","B) 80","C) 443","D) 22"],correct:"C"},
{id:"Q166",marks:3,text:"Which DS uses key-value pairs?",options:["A) Array","B) Stack","C) Dictionary","D) Queue"],correct:"C"},
{id:"Q167",marks:3,text:"Which command installs Python package?",options:["A) pip install","B) python install","C) apt install","D) npm install"],correct:"A"},
{id:"Q168",marks:3,text:"Which HTML tag inserts image?",options:["A) <img>","B) <pic>","C) <image>","D) <src>"],correct:"A"},
{id:"Q169",marks:3,text:"Which OS is open source?",options:["A) Windows","B) macOS","C) Linux","D) iOS"],correct:"C"},
{id:"Q170",marks:3,text:"Which protocol is stateless?",options:["A) FTP","B) HTTP","C) TCP","D) SMTP"],correct:"B"},

{id:"Q171",marks:4,text:"Which data structure is used for implementing priority queue?",options:["A) Stack","B) Heap","C) Queue","D) Array"],correct:"B"},
{id:"Q172",marks:4,text:"Which algorithm detects cycle in graph?",options:["A) DFS","B) BFS","C) Dijkstra","D) Prim"],correct:"A"},
{id:"Q173",marks:4,text:"Which cloud model shares infra among many users?",options:["A) Private Cloud","B) Public Cloud","C) Hybrid Cloud","D) Community Cloud"],correct:"B"},
{id:"Q174",marks:4,text:"Which normalization removes transitive dependency?",options:["A) 1NF","B) 2NF","C) 3NF","D) 4NF"],correct:"C"},
{id:"Q175",marks:4,text:"Which OS component schedules processes?",options:["A) Shell","B) Kernel","C) GUI","D) BIOS"],correct:"B"},
{id:"Q176",marks:4,text:"Which algorithm sorts by repeatedly swapping adjacent elements?",options:["A) Selection Sort","B) Bubble Sort","C) Merge Sort","D) Quick Sort"],correct:"B"},
{id:"Q177",marks:4,text:"Which protocol is used for secure web browsing?",options:["A) HTTP","B) HTTPS","C) FTP","D) SMTP"],correct:"B"},
{id:"Q178",marks:4,text:"Which cloud service is used for relational DB?",options:["A) DynamoDB","B) S3","C) RDS","D) EC2"],correct:"C"},
{id:"Q179",marks:4,text:"Which concept hides implementation details?",options:["A) Abstraction","B) Inheritance","C) Polymorphism","D) Encapsulation"],correct:"A"},
{id:"Q180",marks:4,text:"Which algorithm is divide and conquer?",options:["A) Bubble Sort","B) Merge Sort","C) Insertion Sort","D) Linear Search"],correct:"B"},

{id:"Q181",marks:3,text:"Which is frontend framework?",options:["A) Django","B) Flask","C) React","D) Node"],correct:"C"},
{id:"Q182",marks:3,text:"Which symbol is used for comments in Python?",options:["A) //","B) #","C) <!--","D) **"],correct:"B"},
{id:"Q183",marks:3,text:"Which DS is used for LIFO?",options:["A) Stack","B) Queue","C) Heap","D) Graph"],correct:"A"},
{id:"Q184",marks:3,text:"Which command runs Python script?",options:["A) run file.py","B) execute file.py","C) python file.py","D) start file.py"],correct:"C"},
{id:"Q185",marks:3,text:"Which device connects multiple networks?",options:["A) Switch","B) Router","C) Hub","D) Repeater"],correct:"B"},
{id:"Q186",marks:3,text:"Which cloud service monitors logs?",options:["A) CloudWatch","B) EC2","C) S3","D) IAM"],correct:"A"},
{id:"Q187",marks:3,text:"Which is used for styling web pages?",options:["A) HTML","B) SQL","C) CSS","D) XML"],correct:"C"},
{id:"Q188",marks:3,text:"Which tool automates CI/CD?",options:["A) Jenkins","B) Docker","C) Git","D) Linux"],correct:"A"},
{id:"Q189",marks:3,text:"Which DS stores hierarchical data?",options:["A) Stack","B) Tree","C) Queue","D) Array"],correct:"B"},
{id:"Q190",marks:3,text:"Which protocol sends files?",options:["A) FTP","B) HTTP","C) DNS","D) SSH"],correct:"A"},

{id:"Q191",marks:4,text:"Which sorting algorithm has O(n log n) worst case?",options:["A) Bubble Sort","B) Merge Sort","C) Insertion Sort","D) Selection Sort"],correct:"B"},
{id:"Q192",marks:4,text:"Which DS uses hash function?",options:["A) Stack","B) Queue","C) Hash Table","D) Tree"],correct:"C"},
{id:"Q193",marks:4,text:"Which protocol establishes reliable connection?",options:["A) UDP","B) TCP","C) IP","D) HTTP"],correct:"B"},
{id:"Q194",marks:4,text:"Which cloud service manages access control?",options:["A) IAM","B) EC2","C) S3","D) RDS"],correct:"A"},
{id:"Q195",marks:4,text:"Which algorithm builds minimum spanning tree?",options:["A) Kruskal","B) Dijkstra","C) DFS","D) BFS"],correct:"A"},
{id:"Q196",marks:4,text:"Which component handles arithmetic ops in CPU?",options:["A) ALU","B) CU","C) RAM","D) Cache"],correct:"A"},
{id:"Q197",marks:4,text:"Which SQL clause filters grouped data?",options:["A) WHERE","B) GROUP BY","C) HAVING","D) ORDER BY"],correct:"C"},
{id:"Q198",marks:4,text:"Which layer ensures data integrity with error checking?",options:["A) Transport","B) Network","C) Data Link","D) Session"],correct:"C"},
{id:"Q199",marks:4,text:"Which algorithm finds strongly connected components?",options:["A) Dijkstra","B) Prim","C) Kosaraju","D) Kruskal"],correct:"C"},
{id:"Q200",marks:4,text:"Which concept allows same method name with different behavior?",options:["A) Inheritance","B) Abstraction","C) Polymorphism","D) Encapsulation"],correct:"C"},

{id:"Q201",marks:3,text:"Which data type is immutable in Python?",options:["A) List","B) Dictionary","C) Tuple","D) Set"],correct:"C"},
{id:"Q202",marks:3,text:"Which SQL keyword removes duplicate records?",options:["A) UNIQUE","B) DISTINCT","C) FILTER","D) CLEAN"],correct:"B"},
{id:"Q203",marks:3,text:"Which port is used for SSH?",options:["A) 21","B) 22","C) 80","D) 443"],correct:"B"},
{id:"Q204",marks:3,text:"Which command lists files in Linux?",options:["A) dir","B) list","C) ls","D) show"],correct:"C"},
{id:"Q205",marks:3,text:"Which operator checks equality in Python?",options:["A) =","B) ==","C) !=","D) :="],correct:"B"},
{id:"Q206",marks:3,text:"Which device forwards packets based on MAC address?",options:["A) Router","B) Switch","C) Hub","D) Gateway"],correct:"B"},
{id:"Q207",marks:3,text:"Which HTML tag creates hyperlink?",options:["A) <link>","B) <a>","C) <href>","D) <url>"],correct:"B"},
{id:"Q208",marks:3,text:"Which cloud model combines public and private clouds?",options:["A) Public","B) Private","C) Hybrid","D) Community"],correct:"C"},
{id:"Q209",marks:3,text:"Which loop runs at least once?",options:["A) for","B) while","C) do-while","D) foreach"],correct:"C"},
{id:"Q210",marks:3,text:"Which keyword defines a function in Python?",options:["A) function","B) def","C) fun","D) define"],correct:"B"},

{id:"Q211",marks:4,text:"Which algorithm is used in routing protocols like OSPF?",options:["A) Kruskal","B) Bellman-Ford","C) Dijkstra","D) Prim"],correct:"C"},
{id:"Q212",marks:4,text:"Which normalization removes partial dependency?",options:["A) 1NF","B) 2NF","C) 3NF","D) BCNF"],correct:"B"},
{id:"Q213",marks:4,text:"Which structure is best for undo operations?",options:["A) Queue","B) Stack","C) Heap","D) Tree"],correct:"B"},
{id:"Q214",marks:4,text:"Which AWS service provides CDN?",options:["A) S3","B) EC2","C) CloudFront","D) Route53"],correct:"C"},
{id:"Q215",marks:4,text:"Which algorithm uses backtracking?",options:["A) BFS","B) DFS","C) N-Queens","D) Dijkstra"],correct:"C"},
{id:"Q216",marks:4,text:"Which metric evaluates regression?",options:["A) Accuracy","B) Precision","C) Recall","D) MSE"],correct:"D"},
{id:"Q217",marks:4,text:"Which protocol provides encryption for web traffic?",options:["A) HTTP","B) FTP","C) SSL/TLS","D) SMTP"],correct:"C"},
{id:"Q218",marks:4,text:"Which DS is used in BFS traversal?",options:["A) Stack","B) Queue","C) Heap","D) Tree"],correct:"B"},
{id:"Q219",marks:4,text:"Which cloud service provides container orchestration?",options:["A) EC2","B) ECS/EKS","C) S3","D) Lambda"],correct:"B"},
{id:"Q220",marks:4,text:"Which OS scheduling is preemptive?",options:["A) FCFS","B) SJF","C) Round Robin","D) FIFO"],correct:"C"},

{id:"Q221",marks:3,text:"Which Python library is used for data analysis?",options:["A) NumPy","B) Pandas","C) Matplotlib","D) Seaborn"],correct:"B"},
{id:"Q222",marks:3,text:"Which CSS property changes text color?",options:["A) font-color","B) text-style","C) color","D) text-color"],correct:"C"},
{id:"Q223",marks:3,text:"Which protocol sends email?",options:["A) HTTP","B) SMTP","C) FTP","D) DNS"],correct:"B"},
{id:"Q224",marks:3,text:"Which number system uses base 16?",options:["A) Binary","B) Decimal","C) Octal","D) Hexadecimal"],correct:"D"},
{id:"Q225",marks:3,text:"Which Git command uploads commits?",options:["A) git commit","B) git upload","C) git push","D) git send"],correct:"C"},
{id:"Q226",marks:3,text:"Which is NoSQL database?",options:["A) MySQL","B) PostgreSQL","C) MongoDB","D) Oracle"],correct:"C"},
{id:"Q227",marks:3,text:"Which keyword stops loop?",options:["A) stop","B) break","C) exit","D) end"],correct:"B"},
{id:"Q228",marks:3,text:"Which device amplifies signal?",options:["A) Router","B) Switch","C) Repeater","D) Gateway"],correct:"C"},
{id:"Q229",marks:3,text:"Which extension is Python file?",options:["A) .pt","B) .py","C) .pyt","D) .python"],correct:"B"},
{id:"Q230",marks:3,text:"Which protocol is connectionless?",options:["A) TCP","B) UDP","C) HTTP","D) FTP"],correct:"B"},

{id:"Q231",marks:4,text:"Which algorithm finds MST?",options:["A) Dijkstra","B) Bellman-Ford","C) Kruskal","D) BFS"],correct:"C"},
{id:"Q232",marks:4,text:"Which DS is used in recursion?",options:["A) Queue","B) Stack","C) Heap","D) Graph"],correct:"B"},
{id:"Q233",marks:4,text:"Which AWS service is for object storage?",options:["A) EC2","B) RDS","C) S3","D) Lambda"],correct:"C"},
{id:"Q234",marks:4,text:"Which SQL join returns matching rows only?",options:["A) LEFT JOIN","B) RIGHT JOIN","C) INNER JOIN","D) FULL JOIN"],correct:"C"},
{id:"Q235",marks:4,text:"Which protocol resolves IP to MAC?",options:["A) DNS","B) ARP","C) HTTP","D) ICMP"],correct:"B"},
{id:"Q236",marks:4,text:"Which OS component handles memory?",options:["A) Kernel","B) Shell","C) GUI","D) BIOS"],correct:"A"},
{id:"Q237",marks:4,text:"Which algorithm is greedy?",options:["A) Merge Sort","B) Dijkstra","C) Bubble Sort","D) DFS"],correct:"B"},
{id:"Q238",marks:4,text:"Which cloud service manages DNS?",options:["A) CloudFront","B) Route53","C) S3","D) VPC"],correct:"B"},
{id:"Q239",marks:4,text:"Which SQL clause sorts results?",options:["A) GROUP BY","B) ORDER BY","C) HAVING","D) WHERE"],correct:"B"},
{id:"Q240",marks:4,text:"Which DS gives O(1) average lookup?",options:["A) Tree","B) Array","C) Hash Table","D) Stack"],correct:"C"},

{id:"Q241",marks:3,text:"Which Python keyword handles exceptions?",options:["A) catch","B) error","C) except","D) handle"],correct:"C"},
{id:"Q242",marks:3,text:"Which HTML tag is for table row?",options:["A) <td>","B) <th>","C) <tr>","D) <table>"],correct:"C"},
{id:"Q243",marks:3,text:"Which Git command creates branch?",options:["A) git branch","B) git new","C) git create","D) git fork"],correct:"A"},
{id:"Q244",marks:3,text:"Which port is HTTP?",options:["A) 21","B) 22","C) 80","D) 443"],correct:"C"},
{id:"Q245",marks:3,text:"Which Python function gets input?",options:["A) get()","B) input()","C) scan()","D) read()"],correct:"B"},
{id:"Q246",marks:3,text:"Which DS follows FIFO?",options:["A) Stack","B) Queue","C) Tree","D) Graph"],correct:"B"},
{id:"Q247",marks:3,text:"Which is backend language?",options:["A) HTML","B) CSS","C) JavaScript","D) Python"],correct:"D"},
{id:"Q248",marks:3,text:"Which cloud model is on-premise?",options:["A) Public","B) Private","C) Hybrid","D) Community"],correct:"B"},
{id:"Q249",marks:3,text:"Which operator means AND in Python?",options:["A) &&","B) &","C) and","D) &&&"],correct:"C"},
{id:"Q250",marks:3,text:"Which protocol checks connectivity?",options:["A) FTP","B) ICMP","C) SMTP","D) ARP"],correct:"B"},

{id:"Q251",marks:4,text:"Which DS is used in DFS?",options:["A) Queue","B) Stack","C) Heap","D) Array"],correct:"B"},
{id:"Q252",marks:4,text:"Which algorithm finds shortest path with negative edges?",options:["A) Dijkstra","B) Bellman-Ford","C) BFS","D) Prim"],correct:"B"},
{id:"Q253",marks:4,text:"Which AWS service is for monitoring?",options:["A) IAM","B) S3","C) CloudWatch","D) Lambda"],correct:"C"},
{id:"Q254",marks:4,text:"Which SQL command updates data?",options:["A) MODIFY","B) CHANGE","C) UPDATE","D) ALTER"],correct:"C"},
{id:"Q255",marks:4,text:"Which protocol transfers files securely?",options:["A) FTP","B) HTTP","C) SFTP","D) SMTP"],correct:"C"},
{id:"Q256",marks:4,text:"Which OS scheduling is non-preemptive?",options:["A) Round Robin","B) SJF","C) Priority Preemptive","D) Multilevel"],correct:"B"},
{id:"Q257",marks:4,text:"Which algorithm is divide and conquer?",options:["A) Quick Sort","B) Bubble Sort","C) DFS","D) BFS"],correct:"A"},
{id:"Q258",marks:4,text:"Which DS maintains sorted order?",options:["A) Heap","B) BST","C) Stack","D) Queue"],correct:"B"},
{id:"Q259",marks:4,text:"Which cloud service runs containers?",options:["A) Lambda","B) ECS","C) S3","D) RDS"],correct:"B"},
{id:"Q260",marks:4,text:"Which SQL clause groups rows?",options:["A) ORDER BY","B) GROUP BY","C) WHERE","D) HAVING"],correct:"B"},

{id:"Q261",marks:3,text:"Which Python lib is for plotting?",options:["A) NumPy","B) Pandas","C) Matplotlib","D) SciPy"],correct:"C"},
{id:"Q262",marks:3,text:"Which command checks Python version?",options:["A) python -v","B) python --version","C) python check","D) python info"],correct:"B"},
{id:"Q263",marks:3,text:"Which HTML tag defines paragraph?",options:["A) <para>","B) <p>","C) <text>","D) <h1>"],correct:"B"},
{id:"Q264",marks:3,text:"Which device filters traffic by IP?",options:["A) Switch","B) Router","C) Firewall","D) Hub"],correct:"C"},
{id:"Q265",marks:3,text:"Which DS uses nodes and pointers?",options:["A) Array","B) Linked List","C) Stack","D) Queue"],correct:"B"},
{id:"Q266",marks:3,text:"Which Python symbol starts comment?",options:["A) //","B) <!--","C) #","D) **"],correct:"C"},
{id:"Q267",marks:3,text:"Which protocol is for remote login?",options:["A) HTTP","B) SSH","C) FTP","D) SMTP"],correct:"B"},
{id:"Q268",marks:3,text:"Which cloud service provides virtual servers?",options:["A) S3","B) RDS","C) EC2","D) Lambda"],correct:"C"},
{id:"Q269",marks:3,text:"Which Git command stages files?",options:["A) git stage","B) git add","C) git push","D) git commit"],correct:"B"},
{id:"Q270",marks:3,text:"Which DS stores elements in order of priority?",options:["A) Stack","B) Queue","C) Priority Queue","D) List"],correct:"C"},

{id:"Q271",marks:4,text:"Which algorithm detects cycle using DSU?",options:["A) BFS","B) DFS","C) Union-Find","D) Dijkstra"],correct:"C"},
{id:"Q272",marks:4,text:"Which SQL function counts rows?",options:["A) SUM()","B) COUNT()","C) AVG()","D) TOTAL()"],correct:"B"},
{id:"Q273",marks:4,text:"Which cloud service stores secrets?",options:["A) IAM","B) Secrets Manager","C) EC2","D) S3"],correct:"B"},
{id:"Q274",marks:4,text:"Which OS concept prevents deadlock?",options:["A) Starvation","B) Mutual Exclusion","C) Deadlock Prevention","D) Paging"],correct:"C"},
{id:"Q275",marks:4,text:"Which DS is used for implementing graph adjacency list?",options:["A) Array","B) Linked List","C) Stack","D) Heap"],correct:"B"},
{id:"Q276",marks:4,text:"Which protocol handles email retrieval?",options:["A) SMTP","B) FTP","C) POP3/IMAP","D) HTTP"],correct:"C"},
{id:"Q277",marks:4,text:"Which algorithm uses heuristic search?",options:["A) BFS","B) DFS","C) A*","D) Dijkstra"],correct:"C"},
{id:"Q278",marks:4,text:"Which AWS service is for serverless DB?",options:["A) RDS","B) DynamoDB","C) Aurora Serverless","D) Redshift"],correct:"C"},
{id:"Q279",marks:4,text:"Which SQL constraint ensures uniqueness?",options:["A) PRIMARY KEY","B) FOREIGN KEY","C) UNIQUE","D) NOT NULL"],correct:"C"},
{id:"Q280",marks:4,text:"Which DS allows O(log n) insertion?",options:["A) Array","B) BST","C) Stack","D) Queue"],correct:"B"},

{id:"Q281",marks:3,text:"Which Python function finds length?",options:["A) count()","B) size()","C) len()","D) length()"],correct:"C"},
{id:"Q282",marks:3,text:"Which HTML tag defines list item?",options:["A) <ul>","B) <ol>","C) <li>","D) <list>"],correct:"C"},
{id:"Q283",marks:3,text:"Which protocol syncs time?",options:["A) HTTP","B) FTP","C) NTP","D) SNMP"],correct:"C"},
{id:"Q284",marks:3,text:"Which device works at OSI layer 1?",options:["A) Switch","B) Router","C) Hub","D) Firewall"],correct:"C"},
{id:"Q285",marks:3,text:"Which Git command downloads repo?",options:["A) git get","B) git clone","C) git fetch","D) git pull"],correct:"B"},
{id:"Q286",marks:3,text:"Which operator is floor division in Python?",options:["A) /","B) //","C) %","D) **"],correct:"B"},
{id:"Q287",marks:3,text:"Which cloud service balances traffic?",options:["A) ELB","B) S3","C) IAM","D) Route53"],correct:"A"},
{id:"Q288",marks:3,text:"Which DS works on LIFO?",options:["A) Queue","B) Stack","C) List","D) Heap"],correct:"B"},
{id:"Q289",marks:3,text:"Which extension is Java file?",options:["A) .java","B) .js","C) .class","D) .jar"],correct:"A"},
{id:"Q290",marks:3,text:"Which protocol is used in IoT messaging?",options:["A) HTTP","B) FTP","C) MQTT","D) SMTP"],correct:"C"},

{id:"Q291",marks:4,text:"Which algorithm is stable sort?",options:["A) Quick Sort","B) Heap Sort","C) Merge Sort","D) Selection Sort"],correct:"C"},
{id:"Q292",marks:4,text:"Which SQL join returns all rows from both tables?",options:["A) INNER","B) LEFT","C) RIGHT","D) FULL OUTER"],correct:"D"},
{id:"Q293",marks:4,text:"Which cloud service manages certificates?",options:["A) IAM","B) ACM","C) S3","D) Route53"],correct:"B"},
{id:"Q294",marks:4,text:"Which DS supports O(1) insertion at end?",options:["A) ArrayList","B) Linked List","C) Stack","D) Tree"],correct:"A"},
{id:"Q295",marks:4,text:"Which protocol ensures reliable transmission?",options:["A) UDP","B) TCP","C) HTTP","D) FTP"],correct:"B"},
{id:"Q296",marks:4,text:"Which OS concept allows multiple processes in memory?",options:["A) Paging","B) Segmentation","C) Multiprogramming","D) Virtualization"],correct:"C"},
{id:"Q297",marks:4,text:"Which AWS service provides VPC networking?",options:["A) EC2","B) VPC","C) IAM","D) Route53"],correct:"B"},
{id:"Q298",marks:4,text:"Which algorithm is used in PageRank?",options:["A) BFS","B) DFS","C) Iterative graph ranking","D) Dijkstra"],correct:"C"},
{id:"Q299",marks:4,text:"Which SQL command adds new record?",options:["A) ADD","B) INSERT","C) UPDATE","D) CREATE"],correct:"B"},
{id:"Q300",marks:4,text:"Which DS is used in LRU cache implementation?",options:["A) Stack","B) Queue","C) HashMap + Doubly Linked List","D) Array"],correct:"C"},
];

// ================= STATE =================
let chosenQuestions=[], userAnswers={}, remainingSeconds=EXAM_DURATION_MIN*60;
let timerId=null, warnings=0, inExam=false, quizFinished=false, currentUser=null, cameraStream=null;

const $=id=>document.getElementById(id);

// ================= HELPERS =================
function showSection(id){
 document.querySelectorAll(".pageSection").forEach(s=>s.classList.remove("active"));
 $(id).classList.add("active");
}

function shuffle(arr){
 for(let i=arr.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [arr[i],arr[j]]=[arr[j],arr[i]];
 }
}

function formatTime(s){return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;}

// ================= CAMERA =================
async function startCamera(){
 try{
  cameraStream=await navigator.mediaDevices.getUserMedia({video:true});
  $("cameraFeed").srcObject=cameraStream;
 }catch{ alert("Camera access required"); }
}
function stopCamera(){if(cameraStream){cameraStream.getTracks().forEach(t=>t.stop());}}

// ================= WARNINGS =================
function issueWarning(msg){
 if(!inExam||quizFinished)return;
 warnings++;
 $("warningCount").textContent=warnings;
 alert(`Warning ${warnings}/${MAX_WARNINGS}: ${msg}`);
 if(warnings>=MAX_WARNINGS) finishExam();
}

document.addEventListener("visibilitychange",()=>{if(document.hidden)issueWarning("Tab switch detected")});
window.addEventListener("blur",()=>issueWarning("Window focus lost"));

// ================= TIMER =================
function startTimer(){
 $("timer").textContent=formatTime(remainingSeconds);
 timerId=setInterval(()=>{
  remainingSeconds--;
  $("timer").textContent=formatTime(remainingSeconds);
  if(remainingSeconds<=0) finishExam();
 },1000);
}

// ================= QUESTIONS =================
function pickQuestions(){
 const copy=[...questionBank];
 shuffle(copy);
 chosenQuestions=copy.slice(0,Math.min(QUESTIONS_PER_EXAM,questionBank.length));
}

function saveAnswer(qid,val){userAnswers[qid]=val;updateStats();}
function updateStats(){
 const answered=Object.keys(userAnswers).length;
 $("answeredCount").textContent=answered;
 $("unansweredCount").textContent=chosenQuestions.length-answered;
}

function renderAllQuestions(){
 const box=$("questionsBox"); box.innerHTML="";
 chosenQuestions.forEach((q,i)=>{
  let div=document.createElement("div");
  div.className="questionBlock";
  div.innerHTML=`<p><b>Q${i+1}. ${q.text}</b></p>`;
  q.options.forEach(opt=>{
   const v=opt[0];
   div.innerHTML+=`<div class="optionRow">
     <label><input type="radio" name="${q.id}" value="${v}" onchange="saveAnswer('${q.id}','${v}')"> ${opt}</label>
   </div>`;
  });
  box.appendChild(div);
 });
 updateStats();
}

// ================= SCORING =================
function computeScore(){
 let correct=0,wrong=0,unanswered=0,marks=0;
 chosenQuestions.forEach(q=>{
  const sel=userAnswers[q.id];
  if(!sel) unanswered++;
  else if(sel===q.correct){correct++;marks+=q.marks;}
  else wrong++;
 });
 const wrongPenalty=wrong*WRONG_PENALTY;
 const unPenalty=Math.floor(unanswered/5)*UNANSWERED_BLOCK_PENALTY;
 let final=marks-wrongPenalty-unPenalty;
 if(final<0) final=0;
 return {correct,wrong,unanswered,wrongPenalty,unPenalty,final};
}

// ================= FINISH =================
function finishExam(){
 if(quizFinished)return;
 quizFinished=true; inExam=false;
 clearInterval(timerId); stopCamera();

 const r=computeScore();
 $("finalScore").textContent=`Final Score: ${r.final} / 100`;
 $("resultBreakdown").innerHTML=
  `Attempted: ${r.correct+r.wrong}<br>
   Not Attempted: ${r.unanswered}<br>
   Correct: ${r.correct}<br>
   Wrong: ${r.wrong}<br>
   Negative Marks: -${r.wrongPenalty+r.unPenalty}`;

 let message="";
 if(r.final>=75) message="🌟 Outstanding performance!";
 else if(r.final>=50) message="🎉 Great job! Internship eligible.";
 else if(r.final>=30) message="👍 Good attempt! Keep improving.";
 else message="👏 Thank you for participating. Keep learning!";

 $("resultMessage").textContent=message;
 $("resultStudent").textContent=`Name: ${currentUser.name} | Email: ${currentUser.email} | College: ${currentUser.college}`;
 showSection("resultSection");
}

// ================= START =================
function startExam(){
 inExam=true; quizFinished=false; warnings=0; userAnswers={};
 remainingSeconds=EXAM_DURATION_MIN*60;
 pickQuestions(); renderAllQuestions(); startCamera(); startTimer();
 showSection("examSection");
}

// ================= DOM READY =================
document.addEventListener("DOMContentLoaded",()=>{
 $("startBtn").onclick=()=>{
  currentUser={
   name:$("fullName").value.trim(),
   email:$("email").value.trim(),
   college:$("college").value.trim(),
   stream:$("stream").value.trim()
  };
  startExam();
 };

 $("nextSetBtn").onclick=finishExam;
});
