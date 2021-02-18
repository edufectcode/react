var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 2410;
const pageSize = 5;
let id = 45;
let persons = [
  {
    id: "1",
    name: "Jack Smith",
    age: 28,
    city: "London",
    company: "Apple",
  },
  {
    id: "2",
    name: "Bob Kelley",
    age: 37,
    city: "Paris",
    company: "Microsoft",
  },
  {
    id: "3",
    name: "Amit Gupta",
    age: 29,
    city: "New Delhi",
    company: "Google",
  },
  {
    id: "6",
    name: "Mary Stevens",
    age: 30,
    city: "London",
    company: "Facebook",
  },
  {
    id: "8",
    name: "Dave Burton",
    age: 31,
    city: "Paris",
    company: "Tesla",
  },
  {
    id: "11",
    name: "Pradeep Kumar",
    age: 43,
    city: "Bangalore",
    company: "Amazon",
  },
];

let products = [
  {
    id: "A101",
    name: "Pepsi 300ml",
    price: 20,
  },
  {
    id: "A232",
    name: "Diet Coke 300ml",
    price: 25,
  },
  {
    id: "A102",
    name: "Pepsi 500ml",
    price: 40,
  },
  {
    id: "A237",
    name: "Coke 1l",
    price: 75,
  },
  {
    id: "B034",
    name: "Fruit and Nuts - 40g",
    price: 15,
  },
  {
    id: "B035",
    name: "Crackles - 100g",
    price: 45,
  },
  {
    id: "B036",
    name: "Nutties - 20g",
    price: 10,
  },
  {
    id: "B173",
    name: "25gm bar",
    price: 35,
  },
];
let users = [
  { username: "Emp101", password: "Emp101", name: "Jack Smith", role: "user" },
  { username: "Emp107", password: "Emp107", name: "Mary Gomes", role: "user" },
  { username: "Emp211", password: "Emp211", name: "Anna Steve", role: "admin" },
  { username: "Emp218", password: "Emp218", name: "Bob Jenner", role: "admin" },
];

app.get("/productApp/products", function (req, res) {
  res.send(products);
});
app.get("/productApp/users", function (req, res) {
  let users1 = users.map((u) => ({
    username: u.username,
    name: u.name,
    role: u.role,
  }));
  res.send(users1);
});
app.post("/productApp/products", (req, res) => {
  const product = req.body;
  let prod = products.find((pr) => pr.id === product.id);
  if (!prod) {
    products.push(product);
    console.log(product);
    res.send(product);
  } else res.status(400).send("Product Id already exists");
});
app.post("/productApp/users", (req, res) => {
  const user = req.body;
  let u1 = users.find((u) => u.username === user.username);
  if (!u1) {
    users.push(user);
    let user1 = {
      username: user.username,
      name: user.name,
      role: user.role,
    };
    res.send(user1);
  } else res.status(400).send("Username already exists");
});
app.post("/productApp/login", (req, res) => {
  const details = req.body;
  let user = users.find(
    (u1) => u1.username === details.username && u1.password === details.password
  );
  if (user) {
    let u1 = {
      username: user.username,
      name: user.name,
      role: user.role,
    };
    res.send(u1);
  } else res.status(400).send("Invalid username or password");
});
app.get("/productApp/products/:id", function (req, res) {
  let id = req.params.id;
  let obj = products.find((obj1) => obj1.id === id);
  obj ? res.send(obj) : res.send("not found");
});
app.put("/productApp/products/:id", function (req, res) {
  let id = req.params.id;
  const product = req.body;
  let index = products.findIndex((obj1) => obj1.id === id);
  if (index >= 0) {
    products[index] = product;
    res.send(product);
  } else res.send("not found");
});
app.delete("/productApp/products/:id", function (req, res) {
  let id = req.params.id;
  let index = products.findIndex((obj1) => obj1.id === id);
  if (index >= 0) {
    let product = products.splice(index, 1);
    res.send(product);
  } else res.send("not found");
});
app.put("/productApp/users/:username", function (req, res) {
  let username = req.params.username;
  const user = req.body;
  let index = users.findIndex((obj1) => obj1.username === username);
  if (index >= 0) {
    users[index] = user;
    let user1 = {
      username: user.username,
      name: user.name,
      role: user.role,
    };
    res.send(user1);
  } else res.send("not found");
});
app.delete("/productApp/users/:username", function (req, res) {
  let username = req.params.username;
  let index = users.findIndex((obj1) => obj1.username === username);
  if (index >= 0) {
    let user = users.splice(index, 1);
    res.send("User deleted");
  } else res.send("not found");
});

app.get("/personApp/persons", function (req, res) {
  let page = req.query.page ? +req.query.page : 1;
  let city = req.query.city;
  let company = req.query.company;
  let data1 = persons;
  data1 = filterParam(data1, "city", city);
  data1 = filterParam(data1, "company", company);
  res.send(makeData(page, pageSize, data1));
});

app.post("/personApp/persons", (req, res) => {
  const person = req.body;
  person.id = id + 1;
  id = id + 1;
  persons.push(person);
  res.send(person);
});

let makeData = (pageNum, size, data1) => {
  let startIndex = (pageNum - 1) * size;
  let endIndex =
    data1.length > startIndex + size - 1
      ? startIndex + size - 1
      : data1.length - 1;
  let data2 = data1.filter(
    (lt, index) => index >= startIndex && index <= endIndex
  );
  let dataFull = {
    startIndex: data1.length > 0 ? startIndex + 1 : startIndex,
    endIndex: data1.length > 0 ? endIndex + 1 : endIndex,
    numOfItems: data1.length,
    data: data2,
  };
  return dataFull;
};

let filterParam = (arr, name, values) => {
  if (!values) return arr;
  let valuesArr = values.split(",");
  let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1[name]));
  return arr1;
};

app.get("/personApp/persons/:id", function (req, res) {
  let id = req.params.id;
  let obj = persons.find((obj1) => obj1.id === id);
  if (obj) res.send(obj);
  res.send("not found");
});
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
