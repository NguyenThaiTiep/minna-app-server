import { HandelStatus } from "../controllers/HandelSuccess";
import {
  GetIndexArrayRandom,
  randomIndexFromMaxMin,
  removeSpecialChar,
  shuffle,
} from "../untils/Random";
import { GetAll } from "./alphabet";
import { getUnitAndWordOfUnit } from "./unit";
import { getById } from "./word";

export const GenQuestionWordItem = async (UnitId, id) => {
  var unit = await getUnitAndWordOfUnit(UnitId);
  var words = (unit.result as any).words;
  var indexGet = id;
  var MaxMinIndex = GetIndexArrayRandom(indexGet, words);
  var array = randomIndexFromMaxMin(
    MaxMinIndex.max,
    MaxMinIndex.min,
    3,
    indexGet
  );
  var answerArr = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var answer = await getById(element);
    if (answer.result) {
      answerArr.push({
        name: (answer.result as any).name,
        mean: (answer.result as any).mean,
        romaji: (answer.result as any).romaji,
        kanji: (answer.result as any).kanji,
      });
    }
  }

  var question = {
    answer: answerArr[0],
    selects: shuffle(answerArr),
  };
  return question;
};
export const GenQuestionWordUnit = async (unitId, amount) => {
  var unit = await getUnitAndWordOfUnit(unitId);
  var words = (unit.result as any).words;

  var array = randomIndexFromMaxMin(
    (words as any).length - 1,
    0,
    amount < (words as any).length ? amount : (words as any).length,
    null
  );
  var questions = [];
  for (var i = 0; i < (array as any).length; i++) {
    var element = array[i];
    var question = await GenQuestionWordItem(unitId, element);

    questions.push(question);
  }
  return { length: questions.length, questions };
};
export const GenQuestionWriteUnit = async (unitId, amount) => {
  var unit = await getUnitAndWordOfUnit(unitId);
  if (!unit) {
    return HandelStatus(404);
  }
  var words = (unit.result as any).words;

  var array = randomIndexFromMaxMin(
    (words as any).length - 1,
    0,
    amount > (words as any).length ? (words as any).length : amount,
    null
  );

  var questions = [];
  for (var i = 0; i < (array as any).length; i++) {
    var element = array[i];
    var question = await GenQuestionWrite(element);

    questions.push(question);
  }
  return HandelStatus(200, null, { length: questions.length, questions });
};
const GenQuestionWrite = async (WordId) => {
  var alphabetsResult = await GetAll();
  var alphabets = alphabetsResult.result;
  var indexGet = WordId;
  var word = await getById(WordId);
  if (!word.result) return;
  var array = randomIndexFromMaxMin(
    (alphabets as any).length - 1,
    0,
    10 - (word.result as any).length > 0 ? 10 - (word.result as any).length : 3,
    indexGet
  );

  var answer = removeSpecialChar((word.result as any).name);

  var answerArr = removeSpecialChar((word.result as any).name).split("");
  if ((word.result as any).kanji) {
    answerArr = removeSpecialChar((word.result as any).kanji).split("");
    answer = removeSpecialChar((word.result as any).kanji);
  }

  for (var i = 1; i < (array as any).length; i++) {
    var element = array[i];
    var alpha = (alphabets as any).find((o) => o.id == element);
    if (alpha) {
      answerArr.push(alpha.hiragana);
    }
  }
  var question = {
    answer: { answer, mean: (word.result as any).mean },

    selects: shuffle(answerArr),
  };
  return question;
};
