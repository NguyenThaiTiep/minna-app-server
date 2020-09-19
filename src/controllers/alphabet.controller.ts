import { Create, GetAll } from "../CRUD/alphabet";
import { HandelStatus } from "./HandelSuccess";

module.exports.create = async (req, res) => {
  if (!req.body.alpha) {
    res.send(HandelStatus(204));
    return;
  }
  var alpha = req.body.alpha;
  var result = await Create(alpha);
  res.send(result);
};
module.exports.getAll = async (req, res) => {
  let alphabets = await GetAll();
  res.send(alphabets);
};
