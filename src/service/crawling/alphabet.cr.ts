import { eventNames } from "process";
import { getRepository } from "typeorm";
import { HandelStatus } from "../../controllers/HandelSuccess";
import { Create } from "../../CRUD/alphabet";
import { Alphabet } from "../../entity/Alphabet";

var request = require("request");
var cheerio = require("cheerio");

export const CrawlAlphabet = async () => {
  var url = `https://mina.mazii.net/api/getKana.php`;
  await request.get(url, async (err, response, body) => {
    let AlphabetRepo = getRepository(Alphabet);
    var result = JSON.parse(body);
    for (var i = 0; i < result.length; i++) {
      var alphabet = result[i];
      var alphaRes = await Create({
        index: i + 1,
        romaji: alphabet.romaji,
        hiragana: alphabet.hira,
        katakana: alphabet.kata,
        example: alphabet.example,
        HiraganaWrite:
          alphabet.hira.length < 2 && !checkIncludes(alphabet.romaji)
            ? `https://www.vnjpclub.com/images/chucai/${alphabet.romaji}.gif`
            : null,
        KatakanaWrite:
          alphabet.hira.length < 2 && !checkIncludes(alphabet.romaji)
            ? `https://www.vnjpclub.com/images/chucai/${alphabet.romaji}ka.gif`
            : null,
        voice: `https://mina.mazii.net/db/alphabet/${alphabet.romaji}.mp3`,
      });
    }
  });
  return HandelStatus(200);
};
const checkIncludes = (str: string) => {
  return (
    str.includes("g") ||
    str.includes("d") ||
    str.includes("b") ||
    str.includes("p") ||
    str.includes("z")
  );
};
