var express = require("express");
import * as cors from "cors";
require("dotenv").config();
var app = express();
require("./database/connect");
var http = require("http");
var bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
var swaggerDocument = require("./lib/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var UnitRouter = require("./routes/unit.router");
var WordRouter = require("./routes/word.router");
var AlphaBetRouter = require("./routes/alphabet.router");
var CrawlRouter = require("./routes/crawling.router");
var PracticeRouter = require("./routes/practice.router");

app.use("/unit", UnitRouter);
app.use("/word", WordRouter);
app.use("/alphabet", AlphaBetRouter);
app.use("/crawling", CrawlRouter);
app.use("/practice", PracticeRouter);
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false,
};
app.use(cors(options));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Xin chao");
});

var server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening port 3000");
});
