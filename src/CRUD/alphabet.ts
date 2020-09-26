import { getRepository } from "typeorm";
import { HandelStatus } from "../controllers/HandelSuccess";
import { Alphabet, alphabetConfig } from "../entity/Alphabet";

export const Create = async (alphabetConfig: alphabetConfig) => {
  let AlphabetRepo = getRepository(Alphabet);
  if (
    !alphabetConfig.hiragana ||
    !alphabetConfig.katakana ||
    !alphabetConfig.romaji
  ) {
    return HandelStatus(204);
  }
  let alpha = await AlphabetRepo.findOne({ hiragana: alphabetConfig.hiragana });
  if (alpha) {
    return HandelStatus(302);
  }
  let alphabet = new Alphabet();
  alphabet.hiragana = alphabetConfig.hiragana;
  alphabet.katakana = alphabetConfig.katakana;
  alphabet.romaji = alphabetConfig.romaji;
  alphabet.voice = alphabetConfig.voice || null;
  alphabet.HiraganaWrite = alphabetConfig.HiraganaWrite || null;
  alphabet.KatakanaWrite = alphabetConfig.KatakanaWrite || null;
  alphabet.example = alphabetConfig.example || null;
  alphabet.index = alphabetConfig.index || null;

  await AlphabetRepo.save(alphabet);
  return HandelStatus(200);
};
export const GetAll = async () => {
  let AlphabetRepo = getRepository(Alphabet);
  let alphabets = await AlphabetRepo.find();
  return HandelStatus(200, null, alphabets);
};
export const GetById = async (id) => {
  let AlphabetRepo = getRepository(Alphabet);
  let alphabet = await AlphabetRepo.findOne({ id: id });
  return HandelStatus(200, null, alphabet);
};
module.exports.Update = () => {};
module.exports.Delete = () => {};
