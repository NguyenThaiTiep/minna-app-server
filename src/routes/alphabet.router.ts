var express = require("express");
var router = express.Router();
var AlphabetController = require("../controllers/alphabet.controller");

router.post("/create", AlphabetController.create);
router.get("/", AlphabetController.getAll);

module.exports = router;
