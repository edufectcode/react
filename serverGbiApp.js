var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port= 2450;
grtOrLess = "";
statecity=[];
customers = [
  { name: "Daniel", password: "dan1234", role: "manager" },
  { name: "Rachel", password: "rachel123", role: "customer" },
  { name: "Harry", password: "harry123", role: "customer" },
  { name: "Sunil", password: "sunil123", role: "customer" },
  { name: "Nimit", password: "nimit123", role: "customer" },
  { name: "Chitrank", password: "chitrankl123", role: "customer" },
  { name: "Aditya", password: "adityal123", role: "customer" },
  { name: "Ronald", password: "ronald123", role: "customer" },
  { name: "Sonia", password: "sonia123", role: "customer" },
  { name: "Mark", password: "markl123", role: "customer" },
  { name: "Mohit", password: "mohit123", role: "customer" },
  { name: "Naveen", password: "naveenl123", role: "customer" },
  { name: "Kabir", password: "kabir123", role: "customer" },
  { name: "Apoorv", password: "apoorv123", role: "customer" },
  { name: "Shanky", password: "shanky123", role: "customer" }
];
customerDetails = [
  {
    name: "Apoorv",
    gender: "Male",
    addressLine1: "New Ashok Nagar",
    state: "Uttar Pradesh",
    city: " Lucknow ",
    dob: "7-August-1996",
    PAN: "AQSON7890T"
  },
  {
    name: "Rachel",
    gender: "Female",
    addressLine1: "Sec-115",
    state: "Uttar Pradesh",
    city: " Noida ",
    dob: "17-September-1994",
    PAN: "AQSDN7123T"
  },
  {
    name: "Nimit",
    gender: "Male",
    addressLine1: "Sec-15",
    state: "Madhya Pradesh",
    city: " Bhopal ",
    dob: "7-Jan-1992",
    PAN: "PQLON7890P"
  },
  {
    name: "Sonia",
    gender: "Female",
    addressLine1: "Sec-62",
    state: "Uttar Pradesh",
    city: " Noida ",
    dob: "27-August-1989",
    PAN: "AQSONAS590T"
  }
];
nomineeDetails = [
  {
    name: "Nimit",
    nomineeName: "Kavita",
    gender: "Female",
    dob: "8-Feb-1993",
    relationship: "Wife",
    jointsignatory: true
  },
  {
    name: "Sunil",
    nomineeName: "Sameer",
    gender: "Male",
    dob: "22-July-1965",
    relationship: "Father",
    jointsignatory: true
  },
  {
    name: "Sonia",
    nomineeName: "Nayan",
    gender: "Male",
    dob: "5-June-1993",
    relationship: "Brother",
    jointsignatory: false
  },
  {
    name: "Aditya",
    nomineeName: "Vishlesha",
    gender: "Female",
    dob: "23-Aug-1995",
    relationship: "Sister",
    jointsignatory: false
  },
  {
    name: "Apoorv",
    nomineeName: "Neelam",
    gender: "Female",
    dob: "23-Feb-1988",
    relationship: "Sister",
    jointsignatory: true
  }
];
customerList = [];
allCheques = [
  {
    name: "Apoorv",
    chequeNumber: "456702345671",
    bankName: "HDFC",
    branch: "AS34",
    amount: "50000"
  },
  {
    name: "Apoorv",
    chequeNumber: "456702345675",
    bankName: "SBI",
    branch: "AS34",
    amount: "5000"
  },
  {
    name: "Apoorv",
    chequeNumber: "456702345672",
    bankName: "SBI",
    branch: "AS34",
    amount: "4000"
  },
  {
    name: "Apoorv",
    chequeNumber: "456702345673",
    bankName: "SBI",
    branch: "AS34",
    amount: "3000"
  },
  {
    name: "Apoorv",
    chequeNumber: "585323655223",
    bankName: "AXIS",
    branch: "AS90",
    amount: "35000"
  },
  {
    name: "Apoorv",
    chequeNumber: "235545521525",
    bankName: "ICICI",
    branch: "ER45",
    amount: "7800"
  },
  {
    name: "Apoorv",
    chequeNumber: "565656236635",
    bankName: "HDFC",
    branch: "55TH",
    amount: "35000"
  },
  {
    name: "Apoorv",
    chequeNumber: 58326695318,
    bankName: "SBI",
    branch: "AS23",
    amount: 2000
  },
  {
    name: "Apoorv",
    chequeNumber: 66665563583,
    bankName: "GBI",
    branch: "DR1G",
    amount: 4500
  },
  {
    name: "Apoorv",
    chequeNumber: 58326695653,
    bankName: "HDFC",
    branch: "BO91",
    amount: 48000
  },
  {
    name: "Apoorv",
    chequeNumber: 52984712340,
    bankName: "AXIS",
    branch: "FM80",
    amount: 33000
  },
  {
    name: "Apoorv",
    chequeNumber: 96762487347,
    bankName: "SBI",
    branch: "DN15",
    amount: 44000
  },
  {
    name: "Apoorv",
    chequeNumber: 54657843735,
    bankName: "GBI",
    branch: "DJ70",
    amount: 22000
  },
  {
    name: "Apoorv",
    chequeNumber: 34578498773,
    bankName: "GBI",
    branch: "CL01",
    amount: 51000
  },
  {
    name: "Apoorv",
    chequeNumber: 35467832726,
    bankName: "AXIS",
    branch: "CG15",
    amount: 11000
  },
  {
    name: "Apoorv",
    chequeNumber: 34564786536,
    bankName: "HDFC",
    branch: "JJ56",
    amount: 7000
  },
  {
    name: "Apoorv",
    chequeNumber: 56652523585,
    bankName: "SBI",
    branch: "PL92",
    amount: 8000
  },
  {
    name: "Apoorv",
    chequeNumber: 58565555555,
    bankName: "AXIS",
    branch: "RF10",
    amount: 2000
  },
  {
    name: "Apoorv",
    chequeNumber: 22585659566,
    bankName: "SBI",
    branch: "TH5T",
    amount: 11500
  },
  {
    name: "Apoorv",
    chequeNumber: 65623265656,
    bankName: "ICICI",
    branch: "CD51",
    amount: 12000
  },
  {
    name: "Mohit",
    chequeNumber: 86659963563,
    bankName: "SBI",
    branch: "CH56",
    amount: 15000
  },
  {
    name: "Aditya",
    chequeNumber: 32255555526,
    bankName: "AXIS",
    branch: "YN78",
    amount: 8000
  },
  {
    name: "Sonia",
    chequeNumber: 58326695318,
    bankName: "GBI",
    branch: "DF34",
    amount: 9000
  },
  {
    name: "Mohit",
    chequeNumber: 58326695318,
    bankName: "HDFC",
    branch: "BH12",
    amount: 60000
  },
  {
    name: "Chitrank",
    chequeNumber: 58326695318,
    bankName: "SBI",
    branch: "RT67",
    amount: 2000
  },
  {
    name: "Sonia",
    chequeNumber: 56324832936,
    bankName: "SBI",
    branch: "NT51",
    amount: 6000
  },
  {
    name: "Chitrank",
    chequeNumber: 15863485262,
    bankName: "AXIS",
    branch: "NA08",
    amount: 55000
  },
  {
    name: "Kabir",
    chequeNumber: 68989523891,
    bankName: "HDFC",
    branch: "BA01",
    amount: 30000
  },{name:'Apoorv',chequeNumber:65897532145,bankName:'HDFC',branch:'BA01',amount:9000},{name:'Kabir',chequeNumber:25631785121,bankName:'HDFC',branch:'BA01',amount:5000},{name:'Apoorv',chequeNumber:30145693568,bankName:'HDFC',branch:'BA02',amount:5600},{name:'Kabir',chequeNumber:26987365485,bankName:'HDFC',branch:'BA02',amount:8000},{name:'Apoorv',chequeNumber:98635826555,bankName:'HDFC',branch:'BA01',amount:6000},{name:'Kabir',chequeNumber:20347865428,bankName:'HDFC',branch:'BA02',amount:15000},{name:'Apoorv',chequeNumber:55520653059,bankName:'HDFC',branch:'BA02',amount:20000},{name:'Kabir',chequeNumber:45823236985,bankName:'HDFC',branch:'BA01',amount:64000},{name:'Apoorv',chequeNumber:35888655866,bankName:'HDFC',branch:'BA02',amount:80000},{name:'Kabir',chequeNumber:56585544555,bankName:'HDFC',branch:'BA01',amount:78000},{name:'Chitrank',chequeNumber:45601230784,bankName:'SBI',branch:'NT51',amount:5000},{name:'Apoorv',chequeNumber:35961204521,bankName:'SBI',branch:'NT51',amount:9000},{name:'Chitrank',chequeNumber:10256398452,bankName:'SBI',branch:'NT51',amount:6000},{name:'Apoorv',chequeNumber:35689751125,bankName:'SBI',branch:'NT51',amount:8000},{name:'Kabir',chequeNumber:20457896422,bankName:'SBI',branch:'NT51',amount:3000},{name:'Apoorv',chequeNumber:30245896455,bankName:'SBI',branch:'NT51',amount:2000},{name:'Apoorv',chequeNumber:45785102547,bankName:'SBI',branch:'NT51',amount:30000},{name:'Kabir',chequeNumber:10256398452,bankName:'ICICI',branch:'CD51',amount:30000},{name:'Apoorv',chequeNumber:20457896422,bankName:'ICICI',branch:'CD51',amount:40000},{name:'Chitrank',chequeNumber:35689751125,bankName:'ICICI',branch:'CD51',amount:65000},{name:'Kabir',chequeNumber:10256398452,bankName:'ICICI',branch:'CD51',amount:80000},{name:'Chitrank',chequeNumber:20457896422,bankName:'ICICI',branch:'CD51',amount:30000},{name:'Apoorv',chequeNumber:45601230784,bankName:'ICICI',branch:'CD51',amount:25000},{name:'Kabir',chequeNumber:35689751125,bankName:'ICICI',branch:'CD51',amount:8000},{name:'Apoorv',chequeNumber:45601230784,bankName:'ICICI',branch:'CD51',amount:2000},{name:'Kabir',chequeNumber:20457896422,bankName:'ICICI',branch:'CD51',amount:6000},{name:'Chitrank',chequeNumber:35689751125,bankName:'ICICI',branch:'CD51',amount:4000},{name:'Apoorv',chequeNumber:10256398452,bankName:'ICICI',branch:'CD51',amount:3000},{name:'Apoorv',chequeNumber:20457896422,bankName:'ICICI',branch:'CD51',amount:9000},{name:'Apoorv',chequeNumber:45601230784,bankName:'ICICI',branch:'CD51',amount:4500},{name:'Kabir',chequeNumber:20457896422,bankName:'ICICI',branch:'CD51',amount:85000},{name:'Apoorv',chequeNumber:35689751125,bankName:'ICICI',branch:'CD51',amount:6500},{name:'Kabir',chequeNumber:10256398452,bankName:'GBI',branch:'DF34',amount:30000},{name:'Apoorv',chequeNumber:20457896422,bankName:'GBI',branch:'DF34',amount:40000},{name:'Chitrank',chequeNumber:35689751125,bankName:'GBI',branch:'DF34',amount:65000},{name:'Kabir',chequeNumber:10256398452,bankName:'GBI',branch:'DF34',amount:80000},{name:'Chitrank',chequeNumber:20457896422,bankName:'GBI',branch:'DF34',amount:30000},{name:'Apoorv',chequeNumber:45601230784,bankName:'GBI',branch:'DF34',amount:25000},{name:'Kabir',chequeNumber:35689751125,bankName:'GBI',branch:'DF34',amount:8000},{name:'Apoorv',chequeNumber:45601230784,bankName:'GBI',branch:'DF34',amount:2000},{name:'Kabir',chequeNumber:20457896422,bankName:'GBI',branch:'DF34',amount:6000},{name:'Chitrank',chequeNumber:35689751125,bankName:'GBI',branch:'DF34',amount:4000},{name:'Apoorv',chequeNumber:10256398452,bankName:'GBI',branch:'DF34',amount:3000},{name:'Apoorv',chequeNumber:20457896422,bankName:'GBI',branch:'DF34',amount:9000},{name:'Apoorv',chequeNumber:45601230784,bankName:'GBI',branch:'DF34',amount:4500},{name:'Kabir',chequeNumber:20457896422,bankName:'GBI',branch:'DF34',amount:85000},{name:'Apoorv',chequeNumber:35689751125,bankName:'GBI',branch:'DF34',amount:6500},{name:'Chitrank',chequeNumber:20457896422,bankName:'DBS',branch:'DS12',amount:30000},{name:'Apoorv',chequeNumber:45601230784,bankName:'DBS',branch:'DS12',amount:25000},{name:'Kabir',chequeNumber:35689751125,bankName:'DBS',branch:'DS12',amount:8000},{name:'Apoorv',chequeNumber:45601230784,bankName:'DBS',branch:'DS12',amount:2000},{name:'Kabir',chequeNumber:20457896422,bankName:'DBS',branch:'DS12',amount:6000},{name:'Chitrank',chequeNumber:35689751125,bankName:'DBS',branch:'DS12',amount:4000},{name:'Apoorv',chequeNumber:10256398452,bankName:'DBS',branch:'DS12',amount:3000},{name:'Apoorv',chequeNumber:20457896422,bankName:'DBS',branch:'DS12',amount:9000},{name:'Apoorv',chequeNumber:45601230784,bankName:'DBS',branch:'DS12',amount:4500},{name:'Kabir',chequeNumber:20457896422,bankName:'DBS',branch:'DS12',amount:85000},{name:'Apoorv',chequeNumber:35689751125,bankName:'DBS',branch:'DS12',amount:6500}
];
allNetTransactions = [
  {
    name: "Apoorv",
    payeeName: "Neha",
    comment: "Car EMI",
    amount: "30000",
    bankName: "GBI"
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    comment: "Car EMI",
    amount: "3000",
    bankName: "SBI"
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    comment: "Car EMI",
    amount: "5000",
    bankName: "SBI"
  },
  {
    name: "Apoorv",
    payeeName: "Vinod",
    comment: "STUDY",
    amount: "67000",
    bankName: "SBI"
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    comment: "College Tuition",
    amount: 42000,
    bankName: "GBI"
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    comment: "None",
    amount: 5000,
    bankName: "AXIS"
  },
  {
    name: "Apoorv",
    payeeName: "Vinod",
    comment: "None",
    amount: 10000,
    bankName: "SBI"
  },
  {
    name: "Apoorv",
    payeeName: "Satish",
    comment: "Study Loan",
    amount: 70000,
    bankName: "ICICI"
  },
  {
    name: "Apoorv",
    payeeName: "Arihant",
    bankName: "AXIS",
    comment: "Study",
    amount: 2000
  },
  {
    name: "Apoorv",
    payeeName: "Vinod",
    bankName: "GBI",
    comment: "",
    amount: 4500
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    bankName: "HDFC",
    comment: "",
    amount: 48000
  },
  {
    name: "Apoorv",
    payeeName: "Arihant",
    bankName: "AXIS",
    comment: "Home",
    amount: 33000
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    bankName: "SBI",
    comment: "",
    amount: 44000
  },
  {
    name: "Apoorv",
    payeeName: "Vinod",
    bankName: "GBI",
    comment: "Study",
    amount: 22000
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    bankName: "GBI",
    comment: "",
    amount: 51000
  },
  {
    name: "Apoorv",
    payeeName: "Arihant",
    bankName: "AXIS",
    comment: "Self Expense",
    amount: 11000
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    bankName: "HDFC",
    comment: "",
    amount: 7000
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    bankName: "SBI",
    comment: "Study",
    amount: 8000
  },
  {
    name: "Apoorv",
    payeeName: "Satish",
    bankName: "AXIS",
    comment: "Home",
    amount: 2000
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    bankName: "SBI",
    comment: "Study",
    amount: 11500
  },
  {
    name: "Apoorv",
    payeeName: "Vinod",
    bankName: "ICICI",
    comment: "Self Expense",
    amount: 12000
  },
  {
    name: "Apoorv",
    payeeName: "Satish",
    bankName: "SBI",
    comment: "",
    amount: 15000
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    bankName: "AXIS",
    comment: "Home",
    amount: 8000
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    bankName: "GBI",
    comment: "Self Expense",
    amount: 9000
  },
  {
    name: "Apoorv",
    payeeName: "Satish",
    bankName: "HDFC",
    comment: "Home",
    amount: 60000
  },
  {
    name: "Apoorv",
    payeeName: "Vinod",
    bankName: "SBI",
    comment: "",
    amount: 2000
  },
  {
    name: "Apoorv",
    payeeName: "Satish",
    bankName: "SBI",
    comment: "Self Expense",
    amount: 6000
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    bankName: "AXIS",
    comment: "",
    amount: 55000
  },
  {
    name: "Kabir",
    payeeName: "Vinod",
    bankName: "HDFC",
    comment: "Home",
    amount: 30000
  },{name:'Apoorv',payeeName:'Anita',bankName:'SBI',comment:'""',amount:7000},{name:'Apoorv',payeeName:'Neha',bankName:'SBI',comment:'Study',amount:8000},{name:'Apoorv',payeeName:'Satish',bankName:'SBI',comment:'Home',amount:2000},{name:'Apoorv',payeeName:'Anita',bankName:'SBI',comment:'Study',amount:5000},{name:'Apoorv',payeeName:'Vinod',bankName:'SBI',comment:'Self Expense',amount:4000},{name:'Mohit',payeeName:'Satish',bankName:'SBI',comment:'""',amount:15000},{name:'Chitrank',payeeName:'Neha',bankName:'SBI',comment:'Home',amount:8000},{name:'Chitrank',payeeName:'Anita',bankName:'SBI',comment:'Self Expense',amount:9000},{name:'Chitrank',payeeName:'Satish',bankName:'SBI',comment:'Home',amount:60000},{name:'Chitrank',payeeName:'Vinod',bankName:'SBI',comment:'""',amount:40000},{name:'Sonia',payeeName:'Satish',bankName:'SBI',comment:'Self Expense',amount:30000},{name:'Apoorv',payeeName:'Anita',bankName:'ICICI',comment:'""',amount:7000},{name:'Apoorv',payeeName:'Neha',bankName:'ICICI',comment:'Study',amount:8000},{name:'Apoorv',payeeName:'Satish',bankName:'ICICI',comment:'Home',amount:2000},{name:'Apoorv',payeeName:'Anita',bankName:'ICICI',comment:'Study',amount:5000},{name:'Apoorv',payeeName:'Vinod',bankName:'ICICI',comment:'Self Expense',amount:4000},{name:'Mohit',payeeName:'Satish',bankName:'ICICI',comment:'""',amount:15000},{name:'Chitrank',payeeName:'Neha',bankName:'ICICI',comment:'Home',amount:8000},{name:'Chitrank',payeeName:'Anita',bankName:'ICICI',comment:'Self Expense',amount:9000},{name:'Chitrank',payeeName:'Satish',bankName:'ICICI',comment:'Home',amount:60000},{name:'Chitrank',payeeName:'Vinod',bankName:'ICICI',comment:'""',amount:40000},{name:'Sonia',payeeName:'Satish',bankName:'ICICI',comment:'Self Expense',amount:30000},{name:'Apoorv',payeeName:'Anita',bankName:'HDFC',comment:'""',amount:4500},{name:'Apoorv',payeeName:'Neha',bankName:'HDFC',comment:'Study',amount:60000},{name:'Apoorv',payeeName:'Satish',bankName:'HDFC',comment:'Home',amount:2000},{name:'Apoorv',payeeName:'Anita',bankName:'HDFC',comment:'Study',amount:5000},{name:'Apoorv',payeeName:'Vinod',bankName:'HDFC',comment:'Self Expense',amount:4000},{name:'Mohit',payeeName:'Satish',bankName:'HDFC',comment:'""',amount:15000},{name:'Chitrank',payeeName:'Neha',bankName:'HDFC',comment:'Home',amount:8000},{name:'Chitrank',payeeName:'Anita',bankName:'HDFC',comment:'Self Expense',amount:9000},{name:'Chitrank',payeeName:'Satish',bankName:'HDFC',comment:'Home',amount:60000},{name:'Chitrank',payeeName:'Vinod',bankName:'HDFC',comment:'""',amount:40000},{name:'Sonia',payeeName:'Satish',bankName:'HDFC',comment:'Self Expense',amount:30000},{name:'Apoorv',payeeName:'Anita',bankName:'AXIS',comment:'""',amount:7000},{name:'Apoorv',payeeName:'Neha',bankName:'AXIS',comment:'Study',amount:8000},{name:'Apoorv',payeeName:'Satish',bankName:'AXIS',comment:'Home',amount:2000},{name:'Apoorv',payeeName:'Anita',bankName:'AXIS',comment:'Study',amount:5000},{name:'Apoorv',payeeName:'Vinod',bankName:'AXIS',comment:'Self Expense',amount:4000},{name:'Mohit',payeeName:'Satish',bankName:'AXIS',comment:'""',amount:15000},{name:'Chitrank',payeeName:'Neha',bankName:'AXIS',comment:'Home',amount:8000},{name:'Chitrank',payeeName:'Anita',bankName:'AXIS',comment:'Self Expense',amount:9000},{name:'Chitrank',payeeName:'Satish',bankName:'AXIS',comment:'Home',amount:60000},{name:'Chitrank',payeeName:'Vinod',bankName:'AXIS',comment:'""',amount:40000},{name:'Sonia',payeeName:'Satish',bankName:'AXIS',comment:'Self Expense',amount:30000},{name:'Apoorv',payeeName:'Anita',bankName:'DBS',comment:'""',amount:7000},{name:'Apoorv',payeeName:'Neha',bankName:'DBS',comment:'Study',amount:8000},{name:'Apoorv',payeeName:'Satish',bankName:'DBS',comment:'Home',amount:2000},{name:'Apoorv',payeeName:'Anita',bankName:'DBS',comment:'Study',amount:5000},{name:'Apoorv',payeeName:'Vinod',bankName:'DBS',comment:'Self Expense',amount:4000},{name:'Mohit',payeeName:'Satish',bankName:'DBS',comment:'""',amount:15000},{name:'Chitrank',payeeName:'Neha',bankName:'DBS',comment:'Home',amount:8000},{name:'Chitrank',payeeName:'Anita',bankName:'DBS',comment:'Self Expense',amount:9000},{name:'Chitrank',payeeName:'Satish',bankName:'DBS',comment:'Home',amount:60000},{name:'Chitrank',payeeName:'Vinod',bankName:'DBS',comment:'""',amount:40000},{name:'Sonia',payeeName:'Satish',bankName:'DBS',comment:'Self Expense',amount:30000}
];
payeeList = [
  {
    name: "Apoorv",
    payeeName: "Vinod",
    IFSC: "",
    accNumber: 469381278291,
    bankName: ""
  },
  {
    name: "Apoorv",
    payeeName: "Neha",
    IFSC: "SBI6THR78",
    accNumber: 4092878913710,
    bankName: "SBI"
  },
  {
    name: "Apoorv",
    payeeName: "Satish",
    IFSC: "ICIGJK578",
    accNumber: 780326891230,
    bankName: "ICICI"
  },
  {
    name: "Apoorv",
    payeeName: "Anita",
    IFSC: "SBI6THR78",
    accNumber: 568439672307,
    bankName: "SBI"
  },
  {
    name: "Apoorv",
    payeeName: "Arihant",
    IFSC: "",
    accNumber: "345674389092",
    bankName: ""
  }
];
bankList = ["SBI", "ICICI", "HDFC", "AXIS", "DBS", "GBI"];
amountList = ["<10000", ">10000"];
state_arr = [
  {stateName: "Andaman & Nicobar", cityArr:  " Alipur | Andaman Island | Anderson Island | Arainj-Laka-Punga | Austinabad | Bamboo Flat | Barren Island | Beadonabad | Betapur | Bindraban | Bonington | Brookesabad | Cadell Point | Calicut | Chetamale | Cinque Islands | Defence Island | Digilpur | Dolyganj | Flat Island | Geinyale | Great Coco Island | Haddo | Havelock Island | Henry Lawrence Island | Herbertabad | Hobdaypur | Ilichar | Ingoie | Inteview Island | Jangli Ghat | Jhon Lawrence Island | Karen | Kartara | KYD Islannd | Landfall Island | Little Andmand | Little Coco Island | Long Island | Maimyo | Malappuram | Manglutan | Manpur | Mitha Khari | Neill Island | Nicobar Island | North Brother Island | North Passage Island | North Sentinel Island | Nothen Reef Island | Outram Island | Pahlagaon | Palalankwe | Passage Island | Phaiapong | Phoenix Island | Port Blair | Preparis Island | Protheroepur | Rangachang | Rongat | Rutland Island | Sabari | Saddle Peak | Shadipur | Smith Island | Sound Island | South Sentinel Island | Spike Island | Tarmugli Island | Taylerabad | Titaije | Toibalawe | Tusonabad | West Island | Wimberleyganj | Yadita"},
  {stateName: "Andhra Pradesh", cityArr: " Achampet | Adilabad | Adoni | Alampur | Allagadda | Alur | Amalapuram | Amangallu | Anakapalle | Anantapur | Andole | Araku | Armoor | Asifabad | Aswaraopet | Atmakur | B. Kothakota | Badvel | Banaganapalle | Bandar | Bangarupalem | Banswada | Bapatla | Bellampalli | Bhadrachalam | Bhainsa | Bheemunipatnam | Bhimadole | Bhimavaram | Bhongir | Bhooragamphad | Boath | Bobbili | Bodhan | Chandoor | Chavitidibbalu | Chejerla | Chepurupalli | Cherial | Chevella | Chinnor | Chintalapudi | Chintapalle | Chirala | Chittoor | Chodavaram | Cuddapah | Cumbum | Darsi | Devarakonda | Dharmavaram | Dichpalli | Divi | Donakonda | Dronachalam | East Godavari | Eluru | Eturnagaram | Gadwal | Gajapathinagaram | Gajwel | Garladinne | Giddalur | Godavari | Gooty | Gudivada | Gudur | Guntur | Hindupur | Hunsabad | Huzurabad | Huzurnagar | Hyderabad | Ibrahimpatnam | Jaggayyapet | Jagtial | Jammalamadugu | Jangaon | Jangareddygudem | Jannaram | Kadiri | Kaikaluru | Kakinada | Kalwakurthy | Kalyandurg | Kamalapuram | Kamareddy | Kambadur | Kanaganapalle | Kandukuru | Kanigiri | Karimnagar | Kavali | Khammam | Khanapur (AP) | Kodangal | Koduru | Koilkuntla | Kollapur | Kothagudem | Kovvur | Krishna | Krosuru | Kuppam | Kurnool | Lakkireddipalli | Madakasira | Madanapalli | Madhira | Madnur | Mahabubabad | Mahabubnagar | Mahadevapur | Makthal | Mancherial | Mandapeta | Mangalagiri | Manthani | Markapur | Marturu | Medachal | Medak | Medarmetla | Metpalli | Mriyalguda | Mulug | Mylavaram | Nagarkurnool | Nalgonda | Nallacheruvu | Nampalle | Nandigama | Nandikotkur | Nandyal | Narasampet | Narasaraopet | Narayanakhed | Narayanpet | Narsapur | Narsipatnam | Nazvidu | Nelloe | Nellore | Nidamanur | Nirmal | Nizamabad | Nuguru | Ongole | Outsarangapalle | Paderu | Pakala | Palakonda | Paland | Palmaneru | Pamuru | Pargi | Parkal | Parvathipuram | Pathapatnam | Pattikonda | Peapalle | Peddapalli | Peddapuram | Penukonda | Piduguralla | Piler | Pithapuram | Podili | Polavaram | Prakasam | Proddatur | Pulivendla | Punganur | Putturu | Rajahmundri | Rajampeta | Ramachandrapuram | Ramannapet | Rampachodavaram | Rangareddy | Rapur | Rayachoti | Rayadurg | Razole | Repalle | Saluru | Sangareddy | Sathupalli | Sattenapalle | Satyavedu | Shadnagar | Siddavattam | Siddipet | Sileru | Sircilla | Sirpur Kagaznagar | Sodam | Sompeta | Srikakulam | Srikalahasthi | Srisailam | Srungavarapukota | Sudhimalla | Sullarpet | Tadepalligudem | Tadipatri | Tanduru | Tanuku | Tekkali | Tenali | Thungaturthy | Tirivuru | Tirupathi | Tuni | Udaygiri | Ulvapadu | Uravakonda | Utnor | V.R. Puram | Vaimpalli | Vayalpad | Venkatgiri | Venkatgirikota | Vijayawada | Vikrabad | Vinjamuru | Vinukonda | Visakhapatnam | Vizayanagaram | Vizianagaram | Vuyyuru | Wanaparthy | Warangal | Wardhannapet | Yelamanchili | Yelavaram | Yeleswaram | Yellandu | Yellanuru | Yellareddy | Yerragondapalem | Zahirabad "},
  {stateName: "Arunachal Pradesh", cityArr: " Along | Anini | Anjaw | Bameng | Basar | Changlang | Chowkhem | Daporizo | Dibang Valley | Dirang | Hayuliang | Huri | Itanagar | Jairampur | Kalaktung | Kameng | Khonsa | Kolaring | Kurung Kumey | Lohit | Lower Dibang Valley | Lower Subansiri | Mariyang | Mechuka | Miao | Nefra | Pakkekesang | Pangin | Papum Pare | Passighat | Roing | Sagalee | Seppa | Siang | Tali | Taliha | Tawang | Tezu | Tirap | Tuting | Upper Siang | Upper Subansiri | Yiang Kiag "},
  {stateName:"Assam",cityArr:" Abhayapuri | Baithalangshu | Barama | Barpeta Road | Bihupuria | Bijni | Bilasipara | Bokajan | Bokakhat | Boko | Bongaigaon | Cachar | Cachar Hills | Darrang | Dhakuakhana | Dhemaji | Dhubri | Dibrugarh | Digboi | Diphu | Goalpara | Gohpur | Golaghat | Guwahati | Hailakandi | Hajo | Halflong | Hojai | Howraghat | Jorhat | Kamrup | Karbi Anglong | Karimganj | Kokarajhar | Kokrajhar | Lakhimpur | Maibong | Majuli | Mangaldoi | Mariani | Marigaon | Moranhat | Morigaon | Nagaon | Nalbari | Rangapara | Sadiya | Sibsagar | Silchar | Sivasagar | Sonitpur | Tarabarihat | Tezpur | Tinsukia | Udalgiri | Udalguri | UdarbondhBarpeta"},
  {stateName:"Bihar",cityArr: " Adhaura | Amarpur | Araria | Areraj | Arrah | Arwal | Aurangabad | Bagaha | Banka | Banmankhi | Barachakia | Barauni | Barh | Barosi | Begusarai | Benipatti | Benipur | Bettiah | Bhabhua | Bhagalpur | Bhojpur | Bidupur | Biharsharif | Bikram | Bikramganj | Birpur | Buxar | Chakai | Champaran | Chapara | Dalsinghsarai | Danapur | Darbhanga | Daudnagar | Dhaka | Dhamdaha | Dumraon | Ekma | Forbesganj | Gaya | Gogri | Gopalganj | H.Kharagpur | Hajipur | Hathua | Hilsa | Imamganj | Jahanabad | Jainagar | Jamshedpur | Jamui | Jehanabad | Jhajha | Jhanjharpur | Kahalgaon | Kaimur (Bhabua) | Katihar | Katoria | Khagaria | Kishanganj | Korha | Lakhisarai | Madhepura | Madhubani | Maharajganj | Mahua | Mairwa | Mallehpur | Masrakh | Mohania | Monghyr | Motihari | Motipur | Munger | Muzaffarpur | Nabinagar | Nalanda | Narkatiaganj | Naugachia | Nawada | Pakribarwan | Pakridayal | Patna | Phulparas | Piro | Pupri | Purena | Purnia | Rafiganj | Rajauli | Ramnagar | Raniganj | Raxaul | Rohtas | Rosera | S.Bakhtiarpur | Saharsa | Samastipur | Saran | Sasaram | Seikhpura | Sheikhpura | Sheohar | Sherghati | Sidhawalia | Singhwara | Sitamarhi | Siwan | Sonepur | Supaul | Thakurganj | Triveniganj | Udakishanganj | Vaishali | Wazirganj" },
  {stateName:"Chandigarh",cityArr: " Chandigarh | Mani Marja" },
  {stateName:"Chhattisgarh",cityArr: " Ambikapur | Antagarh | Arang | Bacheli | Bagbahera | Bagicha | Baikunthpur | Balod | Balodabazar | Balrampur | Barpalli | Basana | Bastanar | Bastar | Bderajpur | Bemetara | Berla | Bhairongarh | Bhanupratappur | Bharathpur | Bhatapara | Bhilai | Bhilaigarh | Bhopalpatnam | Bijapur | Bilaspur | Bodla | Bokaband | Chandipara | Chhinagarh | Chhuriakala | Chingmut | Chuikhadan | Dabhara | Dallirajhara | Dantewada | Deobhog | Dhamda | Dhamtari | Dharamjaigarh | Dongargarh | Durg | Durgakondal | Fingeshwar | Gariaband | Garpa | Gharghoda | Gogunda | Ilamidi | Jagdalpur | Janjgir | Janjgir-Champa | Jarwa | Jashpur | Jashpurnagar | Kabirdham-Kawardha | Kanker | Kasdol | Kathdol | Kathghora | Kawardha | Keskal | Khairgarh | Kondagaon | Konta | Korba | Korea | Kota | Koyelibeda | Kuakunda | Kunkuri | Kurud | Lohadigundah | Lormi | Luckwada | Mahasamund | Makodi | Manendragarh | Manpur | Marwahi | Mohla | Mungeli | Nagri | Narainpur | Narayanpur | Neora | Netanar | Odgi | Padamkot | Pakhanjur | Pali | Pandaria | Pandishankar | Parasgaon | Pasan | Patan | Pathalgaon | Pendra | Pratappur | Premnagar | Raigarh | Raipur | Rajnandgaon | Rajpur | Ramchandrapur | Saraipali | Saranggarh | Sarona | Semaria | Shakti | Sitapur | Sukma | Surajpur | Surguja | Tapkara | Toynar | Udaipur | Uproda | Wadrainagar"},
  {stateName:"Dadra & Nagar Haveli",cityArr: " Amal | Amli | Bedpa | Chikhli | Dadra & Nagar Haveli | Dahikhed | Dolara | Galonda | Kanadi | Karchond | Khadoli | Kharadpada | Kherabari | Kherdi | Kothar | Luari | Mashat | Rakholi | Rudana | Saili | Sili | Silvassa | Sindavni | Udva | Umbarkoi | Vansda | Vasona | Velugam "},
  {stateName:"Daman & Diu",cityArr: " Brancavare | Dagasi | Daman | Diu | Magarvara | Nagwa | Pariali | Passo Covo "},
  {stateName:"Delhi",cityArr:" Central Delhi | East Delhi | New Delhi | North Delhi | North East Delhi | North West Delhi | South Delhi | South West Delhi | West Delhi " },
  {stateName:"Goa",cityArr:  " Canacona | Candolim | Chinchinim | Cortalim | Goa | Jua | Madgaon | Mahem | Mapuca | Marmagao | Panji | Ponda | Sanvordem | Terekhol " },
  {stateName:"Gujarat",cityArr:" Ahmedabad | Ahwa | Amod | Amreli | Anand | Anjar | Ankaleshwar | Babra | Balasinor | Banaskantha | Bansada | Bardoli | Bareja | Baroda | Barwala | Bayad | Bhachav | Bhanvad | Bharuch | Bhavnagar | Bhiloda | Bhuj | Billimora | Borsad | Botad | Chanasma | Chhota Udaipur | Chotila | Dabhoi | Dahod | Damnagar | Dang | Danta | Dasada | Dediapada | Deesa | Dehgam | Deodar | Devgadhbaria | Dhandhuka | Dhanera | Dharampur | Dhari | Dholka | Dhoraji | Dhrangadhra | Dhrol | Dwarka | Fortsongadh | Gadhada | Gandhi Nagar | Gariadhar | Godhra | Gogodar | Gondal | Halol | Halvad | Harij | Himatnagar | Idar | Jambusar | Jamjodhpur | Jamkalyanpur | Jamnagar | Jasdan | Jetpur | Jhagadia | Jhalod | Jodia | Junagadh | Junagarh | Kalawad | Kalol | Kapad Wanj | Keshod | Khambat | Khambhalia | Khavda | Kheda | Khedbrahma | Kheralu | Kodinar | Kotdasanghani | Kunkawav | Kutch | Kutchmandvi | Kutiyana | Lakhpat | Lakhtar | Lalpur | Limbdi | Limkheda | Lunavada | M.M.Mangrol | Mahuva | Malia-Hatina | Maliya | Malpur | Manavadar | Mandvi | Mangrol | Mehmedabad | Mehsana | Miyagam | Modasa | Morvi | Muli | Mundra | Nadiad | Nakhatrana | Nalia | Narmada | Naswadi | Navasari | Nizar | Okha | Paddhari | Padra | Palanpur | Palitana | Panchmahals | Patan | Pavijetpur | Porbandar | Prantij | Radhanpur | Rahpar | Rajaula | Rajkot | Rajpipla | Ranavav | Sabarkantha | Sanand | Sankheda | Santalpur | Santrampur | Savarkundla | Savli | Sayan | Sayla | Shehra | Sidhpur | Sihor | Sojitra | Sumrasar | Surat | Surendranagar | Talaja | Thara | Tharad | Thasra | Una-Diu | Upleta | Vadgam | Vadodara | Valia | Vallabhipur | Valod | Valsad | Vanthali | Vapi | Vav | Veraval | Vijapur | Viramgam | Visavadar | Visnagar | Vyara | Waghodia | Wankaner " },
  {stateName:"Haryana",cityArr:" Adampur Mandi | Ambala | Assandh | Bahadurgarh | Barara | Barwala | Bawal | Bawanikhera | Bhiwani | Charkhidadri | Cheeka | Chhachrauli | Dabwali | Ellenabad | Faridabad | Fatehabad | Ferojpur Jhirka | Gharaunda | Gohana | Gurgaon | Hansi | Hisar | Jagadhari | Jatusana | Jhajjar | Jind | Julana | Kaithal | Kalanaur | Kalanwali | Kalka | Karnal | Kosli | Kurukshetra | Loharu | Mahendragarh | Meham | Mewat | Mohindergarh | Naraingarh | Narnaul | Narwana | Nilokheri | Nuh | Palwal | Panchkula | Panipat | Pehowa | Ratia | Rewari | Rohtak | Safidon | Sirsa | Siwani | Sonipat | Tohana | Tohsam | Yamunanagar " },
  {stateName:"Himachal Pradesh",cityArr: " Amb | Arki | Banjar | Bharmour | Bilaspur | Chamba | Churah | Dalhousie | Dehra Gopipur | Hamirpur | Jogindernagar | Kalpa | Kangra | Kinnaur | Kullu | Lahaul | Mandi | Nahan | Nalagarh | Nirmand | Nurpur | Palampur | Pangi | Paonta | Pooh | Rajgarh | Rampur Bushahar | Rohru | Shimla | Sirmaur | Solan | Spiti | Sundernagar | Theog | Udaipur | Una"},
  {stateName:"Jammu & Kashmir",cityArr: " Akhnoor | Anantnag | Badgam | Bandipur | Baramulla | Basholi | Bedarwah | Budgam | Doda | Gulmarg | Jammu | Kalakot | Kargil | Karnah | Kathua | Kishtwar | Kulgam | Kupwara | Leh | Mahore | Nagrota | Nobra | Nowshera | Nyoma | Padam | Pahalgam | Patnitop | Poonch | Pulwama | Rajouri | Ramban | Ramnagar | Reasi | Samba | Srinagar | Udhampur | Vaishno Devi "},
  {stateName:"Jharkhand",cityArr:  " Bagodar | Baharagora | Balumath | Barhi | Barkagaon | Barwadih | Basia | Bermo | Bhandaria | Bhawanathpur | Bishrampur | Bokaro | Bolwa | Bundu | Chaibasa | Chainpur | Chakardharpur | Chandil | Chatra | Chavparan | Daltonganj | Deoghar | Dhanbad | Dumka | Dumri | Garhwa | Garu | Ghaghra | Ghatsila | Giridih | Godda | Gomia | Govindpur | Gumla | Hazaribagh | Hunterganj | Ichak | Itki | Jagarnathpur | Jamshedpur | Jamtara | Japla | Jharmundi | Jhinkpani | Jhumaritalaiya | Kathikund | Kharsawa | Khunti | Koderma | Kolebira | Latehar | Lohardaga | Madhupur | Mahagama | Maheshpur Raj | Mandar | Mandu | Manoharpur | Muri | Nagarutatri | Nala | Noamundi | Pakur | Palamu | Palkot | Patan | Rajdhanwar | Rajmahal | Ramgarh | Ranchi | Sahibganj | Saraikela | Simaria | Simdega | Singhbhum | Tisri | Torpa "},
  {stateName:"Karnataka",cityArr: " Afzalpur | Ainapur | Aland | Alur | Anekal | Ankola | Arsikere | Athani | Aurad | Bableshwar | Badami | Bagalkot | Bagepalli | Bailhongal | Bangalore | Bangalore Rural | Bangarpet | Bantwal | Basavakalyan | Basavanabagewadi | Basavapatna | Belgaum | Bellary | Belthangady | Belur | Bhadravati | Bhalki | Bhatkal | Bidar | Bijapur | Biligi | Chadchan | Challakere | Chamrajnagar | Channagiri | Channapatna | Channarayapatna | Chickmagalur | Chikballapur | Chikkaballapur | Chikkanayakanahalli | Chikkodi | Chikmagalur | Chincholi | Chintamani | Chitradurga | Chittapur | Cowdahalli | Davanagere | Deodurga | Devangere | Devarahippargi | Dharwad | Doddaballapur | Gadag | Gangavathi | Gokak | Gowribdanpur | Gubbi | Gulbarga | Gundlupet | H.B.Halli | H.D. Kote | Haliyal | Hampi | Hangal | Harapanahalli | Hassan | Haveri | Hebri | Hirekerur | Hiriyur | Holalkere | Holenarsipur | Honnali | Honnavar | Hosadurga | Hosakote | Hosanagara | Hospet | Hubli | Hukkeri | Humnabad | Hungund | Hunsagi | Hunsur | Huvinahadagali | Indi | Jagalur | Jamkhandi | Jewargi | Joida | K.R. Nagar | Kadur | Kalghatagi | Kamalapur | Kanakapura | Kannada | Kargal | Karkala | Karwar | Khanapur | Kodagu | Kolar | Kollegal | Koppa | Koppal | Koratageri | Krishnarajapet | Kudligi | Kumta | Kundapur | Kundgol | Kunigal | Kurugodu | Kustagi | Lingsugur | Madikeri | Madugiri | Malavalli | Malur | Mandya | Mangalore | Manipal | Manvi | Mashal | Molkalmuru | Mudalgi | Muddebihal | Mudhol | Mudigere | Mulbagal | Mundagod | Mundargi | Murugod | Mysore | Nagamangala | Nanjangud | Nargund | Narsimrajapur | Navalgund | Nelamangala | Nimburga | Pandavapura | Pavagada | Puttur | Raibag | Raichur | Ramdurg | Ranebennur | Ron | Sagar | Sakleshpur | Salkani | Sandur | Saundatti | Savanur | Sedam | Shahapur | Shankarnarayana | Shikaripura | Shimoga | Shirahatti | Shorapur | Siddapur | Sidlaghatta | Sindagi | Sindhanur | Sira | Sirsi | Siruguppa | Somwarpet | Sorab | Sringeri | Sriniwaspur | Srirangapatna | Sullia | T. Narsipur | Tallak | Tarikere | Telgi | Thirthahalli | Tiptur | Tumkur | Turuvekere | Udupi | Virajpet | Wadi | Yadgiri | Yelburga | Yellapur "},
  {stateName:"Kerala",cityArr:" Adimaly | Adoor | Agathy | Alappuzha | Alathur | Alleppey | Alwaye | Amini | Androth | Attingal | Badagara | Bitra | Calicut | Cannanore | Chetlet | Ernakulam | Idukki | Irinjalakuda | Kadamath | Kalpeni | Kalpetta | Kanhangad | Kanjirapally | Kannur | Karungapally | Kasargode | Kavarathy | Kiltan | Kochi | Koduvayur | Kollam | Kottayam | Kovalam | Kozhikode | Kunnamkulam | Malappuram | Mananthodi | Manjeri | Mannarghat | Mavelikkara | Minicoy | Munnar | Muvattupuzha | Nedumandad | Nedumgandam | Nilambur | Palai | Palakkad | Palghat | Pathaanamthitta | Pathanamthitta | Payyanur | Peermedu | Perinthalmanna | Perumbavoor | Punalur | Quilon | Ranni | Shertallai | Shoranur | Taliparamba | Tellicherry | Thiruvananthapuram | Thodupuzha | Thrissur | Tirur | Tiruvalla | Trichur | Trivandrum | Uppala | Vadakkanchery | Vikom | Wayanad " },
  {stateName:"Lakshadweep",cityArr: " Agatti Island | Bingaram Island | Bitra Island | Chetlat Island | Kadmat Island | Kalpeni Island | Kavaratti Island | Kiltan Island | Lakshadweep Sea | Minicoy Island | North Island | South Island "},
  {stateName:"Madhya Pradesh",cityArr: " Agar | Ajaigarh | Alirajpur | Amarpatan | Amarwada | Ambah | Anuppur | Arone | Ashoknagar | Ashta | Atner | Babaichichli | Badamalhera | Badarwsas | Badnagar | Badnawar | Badwani | Bagli | Baihar | Balaghat | Baldeogarh | Baldi | Bamori | Banda | Bandhavgarh | Bareli | Baroda | Barwaha | Barwani | Batkakhapa | Begamganj | Beohari | Berasia | Berchha | Betul | Bhainsdehi | Bhander | Bhanpura | Bhikangaon | Bhimpur | Bhind | Bhitarwar | Bhopal | Biaora | Bijadandi | Bijawar | Bijaypur | Bina | Birsa | Birsinghpur | Budhni | Burhanpur | Buxwaha | Chachaura | Chanderi | Chaurai | Chhapara | Chhatarpur | Chhindwara | Chicholi | Chitrangi | Churhat | Dabra | Damoh | Datia | Deori | Deosar | Depalpur | Dewas | Dhar | Dharampuri | Dindori | Gadarwara | Gairatganj | Ganjbasoda | Garoth | Ghansour | Ghatia | Ghatigaon | Ghorandogri | Ghughari | Gogaon | Gohad | Goharganj | Gopalganj | Gotegaon | Gourihar | Guna | Gunnore | Gwalior | Gyraspur | Hanumana | Harda | Harrai | Harsud | Hatta | Hoshangabad | Ichhawar | Indore | Isagarh | Itarsi | Jabalpur | Jabera | Jagdalpur | Jaisinghnagar | Jaithari | Jaitpur | Jaitwara | Jamai | Jaora | Jatara | Jawad | Jhabua | Jobat | Jora | Kakaiya | Kannod | Kannodi | Karanjia | Kareli | Karera | Karhal | Karpa | Kasrawad | Katangi | Katni | Keolari | Khachrod | Khajuraho | Khakner | Khalwa | Khandwa | Khaniadhana | Khargone | Khategaon | Khetia | Khilchipur | Khirkiya | Khurai | Kolaras | Kotma | Kukshi | Kundam | Kurwai | Kusmi | Laher | Lakhnadon | Lamta | Lanji | Lateri | Laundi | Maheshwar | Mahidpurcity | Maihar | Majhagwan | Majholi | Malhargarh | Manasa | Manawar | Mandla | Mandsaur | Manpur | Mauganj | Mawai | Mehgaon | Mhow | Morena | Multai | Mungaoli | Nagod | Nainpur | Narsingarh | Narsinghpur | Narwar | Nasrullaganj | Nateran | Neemuch | Niwari | Niwas | Nowgaon | Pachmarhi | Pandhana | Pandhurna | Panna | Parasia | Patan | Patera | Patharia | Pawai | Petlawad | Pichhore | Piparia | Pohari | Prabhapattan | Punasa | Pushprajgarh | Raghogarh | Raghunathpur | Rahatgarh | Raisen | Rajgarh | Rajpur | Ratlam | Rehli | Rewa | Sabalgarh | Sagar | Sailana | Sanwer | Sarangpur | Sardarpur | Satna | Saunsar | Sehore | Sendhwa | Seondha | Seoni | Seonimalwa | Shahdol | Shahnagar | Shahpur | Shajapur | Sheopur | Sheopurkalan | Shivpuri | Shujalpur | Sidhi | Sihora | Silwani | Singrauli | Sirmour | Sironj | Sitamau | Sohagpur | Sondhwa | Sonkatch | Susner | Tamia | Tarana | Tendukheda | Teonthar | Thandla | Tikamgarh | Timarani | Udaipura | Ujjain | Umaria | Umariapan | Vidisha | Vijayraghogarh | Waraseoni | Zhirnia "},
  {stateName:"Maharashtra",cityArr:" Achalpur | Aheri | Ahmednagar | Ahmedpur | Ajara | Akkalkot | Akola | Akole | Akot | Alibagh | Amagaon | Amalner | Ambad | Ambejogai | Amravati | Arjuni Merogaon | Arvi | Ashti | Atpadi | Aurangabad | Ausa | Babhulgaon | Balapur | Baramati | Barshi Takli | Barsi | Basmatnagar | Bassein | Beed | Bhadrawati | Bhamregadh | Bhandara | Bhir | Bhiwandi | Bhiwapur | Bhokar | Bhokardan | Bhoom | Bhor | Bhudargad | Bhusawal | Billoli | Brahmapuri | Buldhana | Butibori | Chalisgaon | Chamorshi | Chandgad | Chandrapur | Chandur | Chanwad | Chhikaldara | Chikhali | Chinchwad | Chiplun | Chopda | Chumur | Dahanu | Dapoli | Darwaha | Daryapur | Daund | Degloor | Delhi Tanda | Deogad | Deolgaonraja | Deori | Desaiganj | Dhadgaon | Dhanora | Dharani | Dhiwadi | Dhule | Dhulia | Digras | Dindori | Edalabad | Erandul | Etapalli | Gadhchiroli | Gadhinglaj | Gaganbavada | Gangakhed | Gangapur | Gevrai | Ghatanji | Golegaon | Gondia | Gondpipri | Goregaon | Guhagar | Hadgaon | Hatkangale | Hinganghat | Hingoli | Hingua | Igatpuri | Indapur | Islampur | Jalgaon | Jalna | Jamkhed | Jamner | Jath | Jawahar | Jintdor | Junnar | Kagal | Kaij | Kalamb | Kalamnuri | Kallam | Kalmeshwar | Kalwan | Kalyan | Kamptee | Kandhar | Kankavali | Kannad | Karad | Karjat | Karmala | Katol | Kavathemankal | Kedgaon | Khadakwasala | Khamgaon | Khed | Khopoli | Khultabad | Kinwat | Kolhapur | Kopargaon | Koregaon | Kudal | Kuhi | Kurkheda | Kusumba | Lakhandur | Langa | Latur | Lonar | Lonavala | Madangad | Madha | Mahabaleshwar | Mahad | Mahagaon | Mahasala | Mahaswad | Malegaon | Malgaon | Malgund | Malkapur | Malsuras | Malwan | Mancher | Mangalwedha | Mangaon | Mangrulpur | Manjalegaon | Manmad | Maregaon | Mehda | Mekhar | Mohadi | Mohol | Mokhada | Morshi | Mouda | Mukhed | Mul | Mumbai | Murbad | Murtizapur | Murud | Nagbhir | Nagpur | Nahavara | Nanded | Nandgaon | Nandnva | Nandurbar | Narkhed | Nashik | Navapur | Ner | Newasa | Nilanga | Niphad | Omerga | Osmanabad | Pachora | Paithan | Palghar | Pali | Pandharkawada | Pandharpur | Panhala | Paranda | Parbhani | Parner | Parola | Parseoni | Partur | Patan | Pathardi | Pathari | Patoda | Pauni | Peint | Pen | Phaltan | Pimpalner | Pirangut | Poladpur | Pune | Pusad | Pusegaon | Radhanagar | Rahuri | Raigad | Rajapur | Rajgurunagar | Rajura | Ralegaon | Ramtek | Ratnagiri | Raver | Risod | Roha | Sakarwadi | Sakoli | Sakri | Salekasa | Samudrapur | Sangamner | Sanganeshwar | Sangli | Sangola | Sanguem | Saoner | Saswad | Satana | Satara | Sawantwadi | Seloo | Shahada | Shahapur | Shahuwadi | Shevgaon | Shirala | Shirol | Shirpur | Shirur | Shirwal | Sholapur | Shri Rampur | Shrigonda | Shrivardhan | Sillod | Sinderwahi | Sindhudurg | Sindkheda | Sindkhedaraja | Sinnar | Sironcha | Soyegaon | Surgena | Talasari | Talegaon S.Ji Pant | Taloda | Tasgaon | Thane | Tirora | Tiwasa | Trimbak | Tuljapur | Tumsar | Udgir | Umarkhed | Umrane | Umrer | Urlikanchan | Vaduj | Velhe | Vengurla | Vijapur | Vita | Wada | Wai | Walchandnagar | Wani | Wardha | Warlydwarud | Warora | Washim | Wathar | Yavatmal | Yawal | Yeola | Yeotmal " },
  {stateName:"Manipur",cityArr: " Bishnupur | Chakpikarong | Chandel | Chattrik | Churachandpur | Imphal | Jiribam | Kakching | Kalapahar | Mao | Mulam | Parbung | Sadarhills | Saibom | Sempang | Senapati | Sochumer | Taloulong | Tamenglong | Thinghat | Thoubal | Ukhrul "},
  {stateName:"Meghalaya",cityArr: " Amlaren | Baghmara | Cherrapunjee | Dadengiri | Garo Hills | Jaintia Hills | Jowai | Khasi Hills | Khliehriat | Mariang | Mawkyrwat | Nongpoh | Nongstoin | Resubelpara | Ri Bhoi | Shillong | Tura | Williamnagar"},
  {stateName:"Mizoram",cityArr: " Aizawl | Champhai | Demagiri | Kolasib | Lawngtlai | Lunglei | Mamit | Saiha | Serchhip"},
  {stateName:"Nagaland",cityArr: " Dimapur | Jalukie | Kiphire | Kohima | Mokokchung | Mon | Phek | Tuensang | Wokha | Zunheboto "},
  {stateName:"Orissa",cityArr:" Anandapur | Angul | Anugul | Aska | Athgarh | Athmallik | Attabira | Bagdihi | Balangir | Balasore | Baleswar | Baliguda | Balugaon | Banaigarh | Bangiriposi | Barbil | Bargarh | Baripada | Barkot | Basta | Berhampur | Betanati | Bhadrak | Bhanjanagar | Bhawanipatna | Bhubaneswar | Birmaharajpur | Bisam Cuttack | Boriguma | Boudh | Buguda | Chandbali | Chhatrapur | Chhendipada | Cuttack | Daringbadi | Daspalla | Deodgarh | Deogarh | Dhanmandal | Dharamgarh | Dhenkanal | Digapahandi | Dunguripali | G. Udayagiri | Gajapati | Ganjam | Ghatgaon | Gudari | Gunupur | Hemgiri | Hindol | Jagatsinghapur | Jajpur | Jamankira | Jashipur | Jayapatna | Jeypur | Jharigan | Jharsuguda | Jujumura | Kalahandi | Kalimela | Kamakhyanagar | Kandhamal | Kantabhanji | Kantamal | Karanjia | Kashipur | Kendrapara | Kendujhar | Keonjhar | Khalikote | Khordha | Khurda | Komana | Koraput | Kotagarh | Kuchinda | Lahunipara | Laxmipur | M. Rampur | Malkangiri | Mathili | Mayurbhanj | Mohana | Motu | Nabarangapur | Naktideul | Nandapur | Narlaroad | Narsinghpur | Nayagarh | Nimapara | Nowparatan | Nowrangapur | Nuapada | Padampur | Paikamal | Palla Hara | Papadhandi | Parajang | Pardip | Parlakhemundi | Patnagarh | Pattamundai | Phiringia | Phulbani | Puri | Puruna Katak | R. Udayigiri | Rairakhol | Rairangpur | Rajgangpur | Rajkhariar | Rayagada | Rourkela | Sambalpur | Sohela | Sonapur | Soro | Subarnapur | Sunabeda | Sundergarh | Surada | T. Rampur | Talcher | Telkoi | Titlagarh | Tumudibandha | Udala | Umerkote " },
  {stateName:"Pondicherry",cityArr: " Bahur | Karaikal | Mahe | Pondicherry | Purnankuppam | Valudavur | Villianur | Yanam "},
  {stateName:"Punjab",cityArr: " Abohar | Ajnala | Amritsar | Balachaur | Barnala | Batala | Bathinda | Chandigarh | Dasua | Dinanagar | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Garhashanker | Goindwal | Gurdaspur | Guruharsahai | Hoshiarpur | Jagraon | Jalandhar | Jugial | Kapurthala | Kharar | Kotkapura | Ludhiana | Malaut | Malerkotla | Mansa | Moga | Muktasar | Nabha | Nakodar | Nangal | Nawanshahar | Nawanshahr | Pathankot | Patiala | Patti | Phagwara | Phillaur | Phulmandi | Quadian | Rajpura | Raman | Rayya | Ropar | Rupnagar | Samana | Samrala | Sangrur | Sardulgarh | Sarhind | SAS Nagar | Sultanpur Lodhi | Sunam | Tanda Urmar | Tarn Taran | Zira "},
  {stateName:"Rajasthan",cityArr: " Abu Road | Ahore | Ajmer | Aklera | Alwar | Amber | Amet | Anupgarh | Asind | Aspur | Atru | Bagidora | Bali | Bamanwas | Banera | Bansur | Banswara | Baran | Bari | Barisadri | Barmer | Baseri | Bassi | Baswa | Bayana | Beawar | Begun | Behror | Bhadra | Bharatpur | Bhilwara | Bhim | Bhinmal | Bikaner | Bilara | Bundi | Chhabra | Chhipaborad | Chirawa | Chittorgarh | Chohtan | Churu | Dantaramgarh | Dausa | Deedwana | Deeg | Degana | Deogarh | Deoli | Desuri | Dhariawad | Dholpur | Digod | Dudu | Dungarpur | Dungla | Fatehpur | Gangapur | Gangdhar | Gerhi | Ghatol | Girwa | Gogunda | Hanumangarh | Hindaun | Hindoli | Hurda | Jahazpur | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Kaman | Kapasan | Karauli | Kekri | Keshoraipatan | Khandar | Kherwara | Khetri | Kishanganj | Kishangarh | Kishangarhbas | Kolayat | Kota | Kotputli | Kotra | Kotri | Kumbalgarh | Kushalgarh | Ladnun | Ladpura | Lalsot | Laxmangarh | Lunkaransar | Mahuwa | Malpura | Malvi | Mandal | Mandalgarh | Mandawar | Mangrol | Marwar-Jn | Merta | Nadbai | Nagaur | Nainwa | Nasirabad | Nathdwara | Nawa | Neem Ka Thana | Newai | Nimbahera | Nohar | Nokha | Onli | Osian | Pachpadara | Pachpahar | Padampur | Pali | Parbatsar | Phagi | Phalodi | Pilani | Pindwara | Pipalda | Pirawa | Pokaran | Pratapgarh | Raipur | Raisinghnagar | Rajgarh | Rajsamand | Ramganj Mandi | Ramgarh | Rashmi | Ratangarh | Reodar | Rupbas | Sadulshahar | Sagwara | Sahabad | Salumber | Sanchore | Sangaria | Sangod | Sapotra | Sarada | Sardarshahar | Sarwar | Sawai Madhopur | Shahapura | Sheo | Sheoganj | Shergarh | Sikar | Sirohi | Siwana | Sojat | Sri Dungargarh | Sri Ganganagar | Sri Karanpur | Sri Madhopur | Sujangarh | Taranagar | Thanaghazi | Tibbi | Tijara | Todaraisingh | Tonk | Udaipur | Udaipurwati | Uniayara | Vallabhnagar | Viratnagar "},
  {stateName:"Sikkim",cityArr: " Barmiak | Be | Bhurtuk | Chhubakha | Chidam | Chubha | Chumikteng | Dentam | Dikchu | Dzongri | Gangtok | Gauzing | Gyalshing | Hema | Kerung | Lachen | Lachung | Lema | Lingtam | Lungthu | Mangan | Namchi | Namthang | Nanga | Nantang | Naya Bazar | Padamachen | Pakhyong | Pemayangtse | Phensang | Rangli | Rinchingpong | Sakyong | Samdong | Singtam | Siniolchu | Sombari | Soreng | Sosing | Tekhug | Temi | Tsetang | Tsomgo | Tumlong | Yangang | Yumtang "},
  {stateName:"Tamil Nadu",cityArr:" Ambasamudram | Anamali | Arakandanallur | Arantangi | Aravakurichi | Ariyalur | Arkonam | Arni | Aruppukottai | Attur | Avanashi | Batlagundu | Bhavani | Chengalpattu | Chengam | Chennai | Chidambaram | Chingleput | Coimbatore | Courtallam | Cuddalore | Cumbum | Denkanikoitah | Devakottai | Dharampuram | Dharmapuri | Dindigul | Erode | Gingee | Gobichettipalayam | Gudalur | Gudiyatham | Harur | Hosur | Jayamkondan | Kallkurichi | Kanchipuram | Kangayam | Kanyakumari | Karaikal | Karaikudi | Karur | Keeranur | Kodaikanal | Kodumudi | Kotagiri | Kovilpatti | Krishnagiri | Kulithalai | Kumbakonam | Kuzhithurai | Madurai | Madurantgam | Manamadurai | Manaparai | Mannargudi | Mayiladuthurai | Mayiladutjurai | Mettupalayam | Metturdam | Mudukulathur | Mulanur | Musiri | Nagapattinam | Nagarcoil | Namakkal | Nanguneri | Natham | Neyveli | Nilgiris | Oddanchatram | Omalpur | Ootacamund | Ooty | Orathanad | Palacode | Palani | Palladum | Papanasam | Paramakudi | Pattukottai | Perambalur | Perundurai | Pollachi | Polur | Pondicherry | Ponnamaravathi | Ponneri | Pudukkottai | Rajapalayam | Ramanathapuram | Rameshwaram | Ranipet | Rasipuram | Salem | Sankagiri | Sankaran | Sathiyamangalam | Sivaganga | Sivakasi | Sriperumpudur | Srivaikundam | Tenkasi | Thanjavur | Theni | Thirumanglam | Thiruraipoondi | Thoothukudi | Thuraiyure | Tindivanam | Tiruchendur | Tiruchengode | Tiruchirappalli | Tirunelvelli | Tirupathur | Tirupur | Tiruttani | Tiruvallur | Tiruvannamalai | Tiruvarur | Tiruvellore | Tiruvettipuram | Trichy | Tuticorin | Udumalpet | Ulundurpet | Usiliampatti | Uthangarai | Valapady | Valliyoor | Vaniyambadi | Vedasandur | Vellore | Velur | Vilathikulam | Villupuram | Virudhachalam | Virudhunagar | Wandiwash | Yercaud " },
  {stateName:"Tripura",cityArr: " Agartala | Ambasa | Bampurbari | Belonia | Dhalai | Dharam Nagar | Kailashahar | Kamal Krishnabari | Khopaiyapara | Khowai | Phuldungsei | Radha Kishore Pur | Tripura "},
  {stateName:"Uttar Pradesh",cityArr: " Achhnera | Agra | Akbarpur | Aliganj | Aligarh | Allahabad | Ambedkar Nagar | Amethi | Amiliya | Amroha | Anola | Atrauli | Auraiya | Azamgarh | Baberu | Badaun | Baghpat | Bagpat | Baheri | Bahraich | Ballia | Balrampur | Banda | Bansdeeh | Bansgaon | Bansi | Barabanki | Bareilly | Basti | Bhadohi | Bharthana | Bharwari | Bhogaon | Bhognipur | Bidhuna | Bijnore | Bikapur | Bilari | Bilgram | Bilhaur | Bindki | Bisalpur | Bisauli | Biswan | Budaun | Budhana | Bulandshahar | Bulandshahr | Capianganj | Chakia | Chandauli | Charkhari | Chhata | Chhibramau | Chirgaon | Chitrakoot | Chunur | Dadri | Dalmau | Dataganj | Debai | Deoband | Deoria | Derapur | Dhampur | Domariyaganj | Dudhi | Etah | Etawah | Faizabad | Farrukhabad | Fatehpur | Firozabad | Garauth | Garhmukteshwar | Gautam Buddha Nagar | Ghatampur | Ghaziabad | Ghazipur | Ghosi | Gonda | Gorakhpur | Gunnaur | Haidergarh | Hamirpur | Hapur | Hardoi | Harraiya | Hasanganj | Hasanpur | Hathras | Jalalabad | Jalaun | Jalesar | Jansath | Jarar | Jasrana | Jaunpur | Jhansi | Jyotiba Phule Nagar | Kadipur | Kaimganj | Kairana | Kaisarganj | Kalpi | Kannauj | Kanpur | Karchhana | Karhal | Karvi | Kasganj | Kaushambi | Kerakat | Khaga | Khair | Khalilabad | Kheri | Konch | Kumaon | Kunda | Kushinagar | Lalganj | Lalitpur | Lucknow | Machlishahar | Maharajganj | Mahoba | Mainpuri | Malihabad | Mariyahu | Math | Mathura | Mau | Maudaha | Maunathbhanjan | Mauranipur | Mawana | Meerut | Mehraun | Meja | Mirzapur | Misrikh | Modinagar | Mohamdabad | Mohamdi | Moradabad | Musafirkhana | Muzaffarnagar | Nagina | Najibabad | Nakur | Nanpara | Naraini | Naugarh | Nawabganj | Nighasan | Noida | Orai | Padrauna | Pahasu | Patti | Pharenda | Phoolpur | Phulpur | Pilibhit | Pitamberpur | Powayan | Pratapgarh | Puranpur | Purwa | Raibareli | Rampur | Ramsanehi Ghat | Rasara | Rath | Robertsganj | Sadabad | Safipur | Sagri | Saharanpur | Sahaswan | Sahjahanpur | Saidpur | Salempur | Salon | Sambhal | Sandila | Sant Kabir Nagar | Sant Ravidas Nagar | Sardhana | Shahabad | Shahganj | Shahjahanpur | Shikohabad | Shravasti | Siddharthnagar | Sidhauli | Sikandra Rao | Sikandrabad | Sitapur | Siyana | Sonbhadra | Soraon | Sultanpur | Tanda | Tarabganj | Tilhar | Unnao | Utraula | Varanasi | Zamania "},
  {stateName:"Uttaranchal",cityArr: " Almora | Bageshwar | Bhatwari | Chakrata | Chamoli | Champawat | Dehradun | Deoprayag | Dharchula | Dunda | Haldwani | Haridwar | Joshimath | Karan Prayag | Kashipur | Khatima | Kichha | Lansdown | Munsiari | Mussoorie | Nainital | Pantnagar | Partapnagar | Pauri Garhwal | Pithoragarh | Purola | Rajgarh | Ranikhet | Roorkee | Rudraprayag | Tehri Garhwal | Udham Singh Nagar | Ukhimath | Uttarkashi "},
  {stateName:"West Bengal",cityArr:  " Adra | Alipurduar | Amlagora | Arambagh | Asansol | Balurghat | Bankura | Bardhaman | Basirhat | Berhampur | Bethuadahari | Birbhum | Birpara | Bishanpur | Bolpur | Bongoan | Bulbulchandi | Burdwan | Calcutta | Canning | Champadanga | Contai | Cooch Behar | Daimond Harbour | Dalkhola | Dantan | Darjeeling | Dhaniakhali | Dhuliyan | Dinajpur | Dinhata | Durgapur | Gangajalghati | Gangarampur | Ghatal | Guskara | Habra | Haldia | Harirampur | Harishchandrapur | Hooghly | Howrah | Islampur | Jagatballavpur | Jalpaiguri | Jhalda | Jhargram | Kakdwip | Kalchini | Kalimpong | Kalna | Kandi | Karimpur | Katwa | Kharagpur | Khatra | Krishnanagar | Mal Bazar | Malda | Manbazar | Mathabhanga | Medinipur | Mekhliganj | Mirzapur | Murshidabad | Nadia | Nagarakata | Nalhati | Nayagarh | Parganas | Purulia | Raiganj | Rampur Hat | Ranaghat | Seharabazar | Siliguri | Suri | Takipur | Tamluk"}
];
app.get("/getCustomers", function(req, res) {
  customerList = [];
  customers.map(function(item) {
    //console.log(item);
    if(item.role==='customer')
    {
      let obj2= {name: item.name, role: item.role}
      let obj = customerDetails.find(obj => obj.name === item.name );
    if (obj != null) {
      let jsonObj = { ...obj2, ...obj };
      console.log(jsonObj);
      customerList.push(jsonObj);
    } else {

      customerList.push(obj2);
    }
    }

  });
  let result = pagination(customerList, parseInt(req.query.page));
  console.log('Array ',result)

  res.json({
    page: parseInt(req.query.page),
    items: result,
    totalItems: result.length,
    totalNum: customerList.length
  });
});

app.post("/register", function(req, res) {
  const cust = {
    name: req.body.name,
    password: req.body.password,
    role: "customer"
  };
  customers.unshift(cust);
  var customerRes= {
    name: req.body.name,
    role: "customer"
  }
  res.send(customerRes);
});
app.post("/login", function(req, res) {
  var name = req.body.name;
  var password = req.body.password;

  var cust = customers.find(function(item) {
    return item.name === name && item.password === password;
  });
  console.log(cust);
  var custRec= {
    name: cust.name,
    role: cust.role
  }
  //if null then send error
  res.send(custRec);
});
app.post("/customerDetails", function(req, res) {
  const custDet = {
    name: req.body.name,
    gender: req.body.gender,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    state: req.body.state,
    city: req.body.city,
    dob: req.body.dob,
    PAN: req.body.PAN,
    bankName: req.body.bankName
  };
  console.log(custDet);
  customerDetails.push(custDet);
  res.send(custDet);
});
app.post("/nomineeDetails", function(req, res) {
  const nominee = {
    name: req.body.name,
    nomineeName: req.body.nomineeName,
    gender: req.body.gender,
    dob: req.body.dob,
    relationship: req.body.relationship,
    jointsignatory: req.body.jointSignatory
  };
  console.log(nominee);
  nomineeDetails.push(nominee);
  res.send(nominee);
});
app.post("/addPayee", function(req, res) {
  var payee = {
    name: req.body.name,
    payeeName: req.body.payeeName,
    IFSC: req.body.IFSC,
    accNumber: req.body.accNumber,
    bankName: req.body.bankName
  };
  if(payee.bankName==='')
  payee.bankName= 'GBI'
  console.log(payee);
  payeeList.unshift(payee);
  res.send(payee);
});
app.get("/getPayees/:username", function(req, res) {
  var user = req.params.username;
  var list = payeeList.filter(function(item) {
    return item.name === user;
  });
  console.log(list);
  res.send(list);
});
app.get("/getBanks", function(req, res) {
  res.send(bankList);
});
app.get("/statecity", function(req, res) {
  
  state_arr.map(function(item)
  {
    var arrMade= item.cityArr.split("|");
  console.log(arrMade);
    var body={stateName:item.stateName,cityArr:arrMade}
    statecity.push(body)
  })
  res.send(statecity);

});

app.post("/postCheque", function(req, res) {
  const cheque = {
    name: req.body.name,
    chequeNumber: req.body.chequeNumber,
    bankName: req.body.bankName,
    branch: req.body.branch,
    amount: req.body.amount
  };
  allCheques.unshift(cheque);
  res.send(cheque);
});
app.post("/postNet", function(req, res) {
  const net = {
    name: req.body.name,
    payeeName: req.body.payeeName,
    comment: req.body.comment,
    amount: req.body.amount,
    bankName: req.body.bankName
  };
  allNetTransactions.unshift(net);
  res.send(net);
});
app.get("/getAllCheques", function(req, res) {
  var bank = req.query.bank;
  let list = [];
  console.log(bank);
  var amt = req.query.amount;
  var amount;
  if (amt) {
    amount = makeAmt(amt);
    console.log("Amount =", amount);
    console.log(grtOrLess.charCodeAt(0));
  }

  if (bank != null && amount != null) {
    list = allCheques.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62)
        return item.bankName === bank && item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60)
        return item.bankName === bank && item.amount < amount;
    });
  } else if (bank != null) {
    console.log("Inside only bank");
    list = allCheques.filter(function(item) {
      console.log(item.bankName);
      return item.bankName === bank;
    });
  } else if (amount != null) {
    list = allCheques.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62) return item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60) return item.amount < amount;
    });
  } else {
    list = allCheques;
  }
  let resArr = pagination(list, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});
app.get("/getAllNetBankings", function(req, res) {
  var bank = req.query.bank;
  var amt = req.query.amount;
  var amount;
  var list = [];
  if (amt) {
    amount = makeAmt(amt);
    console.log("Amount =", amount);
    console.log(grtOrLess.charCodeAt(0));
  }

  if (bank != null && amount != null) {
    list = allNetTransactions.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62)
        return item.bankName === bank && item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60)
        return item.bankName === bank && item.amount < amount;
    });
  } else if (bank != null) {
    list = allNetTransactions.filter(function(item) {
      return item.bankName === bank;
    });
  } else if (amount != null) {
    list = allNetTransactions.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62) return item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60) return item.amount < amount;
    });
  } else {
    list = allNetTransactions;
  }
  let resArr = pagination(list, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});
app.get("/getChequeByName/:username", function(req, res) {
  var user = req.params.username;
  var list = allCheques.filter(function(item) {
    return item.name === user;
  });
  console.log(list);

  let resArr = pagination(list, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});
app.get("/getNetBankingByName/:username", function(req, res) {
  var user = req.params.username;
  console.log(user);
  var list = allNetTransactions.filter(function(item) {
    console.log("item", item.name);
    return item.name === user;
  });
  console.log(list);
  let resArr = pagination(list, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: list.length
  });
});
app.get("/getAmount", function(req, res) {
  res.send(amountList);
});

app.get("/getNominee/:username", function(req, res) {
  var user = req.params.username;
  console.log("Username", user);
  const nomineeObj = nomineeDetails.find(function(item) {
    return item.name === user;
  });
  console.log(nomineeObj);
  res.send(nomineeObj);
});
app.get("/getCustomer/:username", function(req, res) {
  var user = req.params.username;
  console.log("Username", user);
  const custObj = customerDetails.find(function(item) {
    return item.name === user;
  });
  console.log(custObj);
  res.send(custObj);
});
function pagination(obj, page) {
  const postCount = obj.length;
  const perPage = 10;
  //const pageCount = Math.ceil(postCount / perPage);
  var resArr = obj;
  resArr = resArr.slice(page * 5 - 5, page * 5);
  return resArr;
}
function makeAmt(queryAmt) {
  console.log("Query", queryAmt);
  var t = queryAmt.split("");
  var str = "";
  grtOrLess = queryAmt[0];
  t.map(function(item) {
    if (!isNaN(item)) {
      str = str + item;
    }
  });
  console.log("String", str);
  return parseInt(str);
}
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
