var express = require("express");
var router = express.Router();
var WordController = require("../controllers/word.controller");

router.post("/create", WordController.create);
router.get("/", WordController.getAll);
module.exports = router;
