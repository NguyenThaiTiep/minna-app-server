import { getRepository } from "typeorm";
import { HandelStatus } from "../../controllers/HandelSuccess";
import { Create } from "../../CRUD/word";
import { Unit } from "../../entity/Unit";
import { Word } from "../../entity/Word";

var request = require("request");
var cheerio = require("cheerio");

export const CrawlWord = async (index) => {
  var url = `http://jls.vnjpclub.com/tu-vung-minna-no-nihongo-bai-${index}.html`;
  await request.get(url, async (err, response, body) => {
    var content = cheerio.load(body);
    if (content) {
      let UnitRepo = getRepository(Unit);
      let WordRepo = getRepository(Word);
      var result = content(body).find("table.search_result tbody tr");
      if (result) {
        var context;
        console.log(result.length);
        var unit = new Unit();
        unit.index = index;
        unit.name = `Bài ${index}`;
        unit.kotoba = `http://eup.mobi/apps/mina/listen/${index} - 1 - Kotoba.mp3`;
        await UnitRepo.save(unit);

        for (var i = 0; i < result.length; i++) {
          context = result[i];
          var word = context.children[1].children[0].data;
          var romaji = context.children[3].children[0].data;
          var audio = context.children[5].children[0].children[0]
            ? "http://jls.vnjpclub.com/" +
              context.children[5].children[0].children[0].attribs.href
            : null;
          var kanji = context.children[8].children[0]
            ? context.children[8].children[0].data
            : null;
          var kanko = context.children[10].children[0]
            ? context.children[10].children[0].data
            : null;
          var mean = context.children[12].children[0].data;
          var r = await Create({
            unitId: unit.id,
            name: word,
            kanji: kanji,
            romaji: romaji,
            voice: audio,
            mean: mean,
            kanOto: kanko,
            index: i + 1,
          });
        }
      }
    }
  });
  return HandelStatus(200);
};
