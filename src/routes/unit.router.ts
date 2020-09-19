var express = require("express");
var router = express.Router();
var UnitController = require("../controllers/unit.controller");

router.post("/create", UnitController.create);
router.get("/", UnitController.getAll);
router.get("/words/:index", UnitController.getUnitAndWords);

module.exports = router;
