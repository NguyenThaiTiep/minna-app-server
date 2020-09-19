import { getUnpackedSettings } from "http2";
import { Create, GetAll, getUnitAndWordOfUnit } from "../CRUD/unit";
import { HandelStatus } from "./HandelSuccess";

module.exports.create = async (req, res) => {
  if (!req.body.unit) {
    res.send(HandelStatus(204));
    return;
  }
  var unit = req.body.unit;
  var result = await Create(unit);
  res.send(result);
};
module.exports.getAll = async (req, res) => {
  let units = await GetAll();
  res.send(units);
};
module.exports.getUnitAndWords = async (req, res) => {
  var id = req.params.index;
  var result = await getUnitAndWordOfUnit(id);
  res.send(result);
};
