const express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

let port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

const infos = [
  "No Info",
  "Hello this is Info 1 with code =RUYWG46NN",
  "Hello this is Info 2 with code =BVNCPPKD35",
  "Hello this is Info 3 with code =ZZXC100TTQ",
  "Hello this is Info 4 with code =MMPPA359BB",
  "Hello this is Info 5 with code =GGGKKK867DD",
];

app.get("/displayinfo/:id", function (req, res) {
  let id = +req.params.id;
  res.send(infos[id]);
});
