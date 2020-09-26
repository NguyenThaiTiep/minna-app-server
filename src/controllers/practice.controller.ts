import { GenPracticeAlpha, GenTestItem } from "../CRUD/practiceAlphabet";
import {
  GenQuestionWordUnit,
  GenQuestionWriteUnit,
} from "../CRUD/practiceUnit";
import { HandelStatus } from "./HandelSuccess";
const queryString = require("query-string");

module.exports.getPracticeAlphabet = async (req, res) => {
  var amount = req.params.amount;
  if (!amount) res.send(HandelStatus(204));
  var result = await GenPracticeAlpha(amount);
  res.send(HandelStatus(200, null, result));
};
module.exports.GetPracticeUnitWord = async (req, res) => {
  var amount = req.params.amount;
  var unitId = req.params.unitId;

  if (!amount || !unitId) {
    res.send(HandelStatus(204));
    return;
  }
  var result = await GenQuestionWordUnit(unitId, amount);
  res.send(HandelStatus(200, null, result));
};
module.exports.GetPracticeUnitWrite = async (req, res) => {
  var amount = req.params.amount;
  var unitId = req.params.unitId;

  if (!amount || !unitId) {
    res.send(HandelStatus(204));
    return;
  }
  var result = await GenQuestionWriteUnit(unitId, amount);
  res.send(result);
};
