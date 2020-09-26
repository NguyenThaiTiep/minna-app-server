import { Index } from "typeorm";
import { HandelStatus } from "../controllers/HandelSuccess";
import { GetIndexArrayRandom, randomIndexFromMaxMin, shuffle } from "../untils/Random";
import { GetAll, GetById } from "./alphabet";

export const GenTestItem = async (id) => {
  var alphabetsResult = await GetAll();
  var alphabets = alphabetsResult.result;
  var indexGet = id;
  var MaxMinIndex = GetIndexArrayRandom(indexGet, alphabets);
  var array = randomIndexFromMaxMin(
    MaxMinIndex.max,
    MaxMinIndex.min,
    3,
    indexGet
  );
  var answerArr = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var answer = await GetById(element);
    if (answer.result) {
      answerArr.push({
        hiragana: (answer.result as any).hiragana,
        katakana: (answer.result as any).katakana,
        romaji: (answer.result as any).romaji,
      });
    }
  }

  var question = {
    answer: answerArr[0],
    selects: shuffle(answerArr),
  };
  return question;
};
export const GenPracticeAlpha = async (amount) => {
  var alphabetsResult = await GetAll();
  var alphabets = alphabetsResult.result;

  var array = randomIndexFromMaxMin(
    (alphabets as any).length - 1,
    0,
    amount < (alphabets as any).length ? amount : (alphabets as any).length,
    null
  );

  var questions = [];
  for (var i = 0; i < (array as any).length; i++) {
    var element = array[i];
    var question = await GenTestItem(element);

    questions.push(question);
  }
  return { length: questions.length, questions };
};


