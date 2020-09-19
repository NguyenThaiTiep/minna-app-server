import { Create, GetAll } from "../CRUD/word";
import { HandelStatus } from "./HandelSuccess";

module.exports.create = async (req, res) => {
  if (!req.body.word) {
    res.send(HandelStatus(204));
    return;
  }
  var word = req.body.word;
  var result = await Create(word);
  res.send(result);
};
module.exports.getAll = async (req, res) => {
  let words = await GetAll();
  res.send(words);
};
