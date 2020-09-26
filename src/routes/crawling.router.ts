var express = require("express");
var router = express.Router();
var Crawl = require("../controllers/crawling");

router.post("/word/:index", Crawl.CrawlingWod);
router.post("/alphabet", Crawl.CrawlingAlpha);
router.post("/practice_word/:index", Crawl.CrawlingPracticeWord);

module.exports = router;
