var express = require('express');
var router = express.Router();

var URL = require('url')

var client = require('./gameDatabaseConnect')

var mechs = ['池库构筑(DBG)','工人放置','多样玩家能力','掷骰','合作']

var createGameList = function(params, info) {
    if(typeof(info) == "string") {
        return {tag : "context", context : info}
    } else {
        var retVal = {}
        if(info.title) {
            retVal.title = {tag : "title", context : info.title}
        }
        if(info.context) {
            retVal.list = []
            for (item in info.context) {
                retVal.list.push(createGameList(params, info.context[item]));
            }
        }
        return retVal
    }
}

router.get('/', function(req, res, next) {
    var params = URL.parse(req.url, true).query
    var gameInfo = require('./gameinfoExample')
    var gameList = createGameList(params, gameInfo.rule)
    res.render('gameInfo', {param : params, gameInfo : gameInfo, gameList : gameList})
});

module.exports = router;
