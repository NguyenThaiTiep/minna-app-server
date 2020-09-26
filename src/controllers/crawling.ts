import { CrawlAlphabet } from "../service/crawling/alphabet.cr";
import { CrawlPracticeWord } from "../service/crawling/practice_word.cr";
import { CrawlWord } from "../service/crawling/word.cr";
import { HandelStatus } from "./HandelSuccess";

module.exports.CrawlingWod = async (req, res) => {
  if (!req.params.index) {
    res.send(HandelStatus(204));
    return;
  }
  var index = req.params.index;

  var result = await CrawlWord(index);
  res.send(result);
};
module.exports.CrawlingAlpha = async (req, res) => {
  var result = await CrawlAlphabet();
  res.send(result);
};

module.exports.CrawlingPracticeWord = async (req, res) => {
  if (!req.params.index) {
    res.send(HandelStatus(204));
    return;
  }
  var index = req.params.index;

  var result = await CrawlPracticeWord(index);
  res.send(result);
};
