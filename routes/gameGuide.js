var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var gameGuide = require('./gameGuideExample')
    res.render('gameGuide', {gameGuide : JSON.stringify(gameGuide)})
});

module.exports = router;
