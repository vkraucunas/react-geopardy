var express = require('express');
var router = express.Router();
var queries = require('../db/queries/queries');
var queries2 = require('../db/queries/categoryQuery');


//Returns an array of all questions for a given game
router.get('/:gameID/questions2', function(req, res, next) {
  queries2.Categories(req.params.gameID)
  .then(function (categories) {
    queries.Questions(req.params.gameID)
    .then(function (questions) {
      res.json({ categories: categories, questions: questions });
    });
  });
});

router.post('/games', function(req, res, next) {
  queries.addGame(req.body.url)
  .then(function(game) {

  });
});

module.exports = router;
