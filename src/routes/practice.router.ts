var express = require("express");
var router = express.Router();
var PracticeController = require("../controllers/practice.controller");

router.get("/alphabet/:amount", PracticeController.getPracticeAlphabet);
router.get(
  "/unit/word/:unitId/:amount",
  PracticeController.GetPracticeUnitWord
);
router.get(
  "/unit/write/:unitId/:amount",
  PracticeController.GetPracticeUnitWrite
);

module.exports = router;
