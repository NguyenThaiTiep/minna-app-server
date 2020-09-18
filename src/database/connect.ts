import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
var config = require("./config");

createConnection(config)
  .then(async (connection) => {
    console.log("Connect Database");
  })
  .catch((error) => console.log(error));
