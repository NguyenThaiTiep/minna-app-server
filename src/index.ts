var express = require("express");

require("dotenv").config();
var app = express();
require("./database/connect");

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var UserRouter = require("./routers/user.router");

// app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.send("Xin chao");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening port 3000");
});
