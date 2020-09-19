var express = require("express");

require("dotenv").config();
var app = express();
require("./database/connect");
var http = require("http");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var UnitRouter = require("./routes/unit.router");
var WordRouter = require("./routes/word.router");
var AlphaBetRouter = require("./routes/alphabet.router");
var CrawlRouter = require("./routes/crawling.router");

app.use("/unit", UnitRouter);
app.use("/word", WordRouter);
app.use("/alphabet", AlphaBetRouter);
app.use("/crawling", CrawlRouter);

app.get("/", (req, res) => {
  res.send("Xin chao");
});

var server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening port 3000");
});
