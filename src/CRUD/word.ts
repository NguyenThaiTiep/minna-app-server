import { getRepository } from "typeorm";
import { HandelStatus } from "../controllers/HandelSuccess";
import { Unit } from "../entity/Unit";
import { Word, wordConfig } from "../entity/Word";

export const Create = async (wordConfig: wordConfig) => {
  let WordRepo = getRepository(Word);
  let UnitRepo = getRepository(Unit);
  if (
    !wordConfig.unitId ||
    !wordConfig.mean ||
    !wordConfig.romaji ||
    !wordConfig.name
  ) {
    return HandelStatus(204);
  }
  var word = new Word();
  word.name = wordConfig.name;
  word.mean = wordConfig.mean;
  word.romaji = wordConfig.romaji;
  word.kanji = wordConfig.kanji || null;
  word.type = wordConfig.type || null;
  word.voice = wordConfig.voice || null;
  word.kanOto = wordConfig.kanOto || null;
  word.index = wordConfig.index || null;
  let unit = await UnitRepo.findOne({ id: wordConfig.unitId });
  if (!unit) {
    return HandelStatus(404, "Not found UnitId");
  }
  word.unit = unit;
  await WordRepo.save(word);
  return HandelStatus(200);
};
export const GetAll = async () => {
  let WordRepo = getRepository(Word);
  let words = await WordRepo.find();
  return HandelStatus(200, null, words);
};
export const getById = async (id) => {
  let WordRepo = getRepository(Word);
  let word = await WordRepo.findOne({ id: id });
  if (!word) {
    return HandelStatus(404);
  }
  return HandelStatus(200, null, word);
};
export const removeById = async (id) => {
  let WordRepo = getRepository(Word);
  let word = await WordRepo.findOne({ id: id });
  if (!word) {
    return HandelStatus(404);
  }
  await WordRepo.remove(word);
  return HandelStatus(200, null);
};
export const UpdateById = async (wordConfig: wordConfig) => {
  if (!wordConfig.id) {
    return HandelStatus(204);
  }
  var id = wordConfig.id;
  let WordRepo = getRepository(Word);
  let UnitRepo = getRepository(Unit);
  let word = await WordRepo.findOne({ id: id });
  if (!word) {
    return HandelStatus(404);
  }
  word.name = wordConfig.name || word.name;
  word.mean = wordConfig.mean || word.mean;
  word.romaji = wordConfig.romaji || word.romaji;
  word.type = wordConfig.type || word.type;
  word.voice = wordConfig.type || word.type;
  if (wordConfig.unitId) {
    var unit = await UnitRepo.findOne({ id: wordConfig.unitId });
    word.unit = unit || word.unit;
  }
  await WordRepo.update(id, word);

  return HandelStatus(200, null);
};
