import { getRepository } from "typeorm";
import { HandelStatus } from "../../controllers/HandelSuccess";
import { Create } from "../../CRUD/word";
import { Unit } from "../../entity/Unit";
import { Word } from "../../entity/Word";

var request = require("request");
var cheerio = require("cheerio");

export const CrawlPracticeWord = async (index) => {
  var url = `http://jls.vnjpclub.com/kiem-tra-minna-no-nihongo-${index}.html`;
  await request.get(url, async (err, response, body) => {
    var content = cheerio.load(body);
    if (content) {
      let UnitRepo = getRepository(Unit);
      let WordRepo = getRepository(Word);
      var result = content(body).find("div.tracnghiem");
      for (var i = 0; i < result.length; i++) {
        var r = result[i];
        var title = r.children[1].children[2].children[0].children[0].data;
        var answers = r.children[3].children[1].children;
        var answerA = answers[0].children
          ? answers[0].children[1].children[3].children[0].data
          : null;
        var answerB = answers[2]
          ? answers[2].children[1].children[3].children[0].data
          : null;
        var answerC = answers[4]
          ? answers[4].children[1].children[3].children[0].data
          : null;
        var answerD = answers[6]
          ? answers[6].children[1].children[3].children[0].data
          : null;
        var answerTrue = answers[0].children
          ? answers[0].children[1].children[0]
          : null;
        console.log({
          title,
          answerA,
          answerB,
          answerC,
          answerD,
        });
      }

      for (var i = 0; i < result.length; i++) {
        var item = result[i];
      }
    }
  });
  return HandelStatus(200);
};
