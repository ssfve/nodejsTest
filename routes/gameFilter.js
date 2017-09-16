var express = require('express');
var router = express.Router();

var URL = require('url')

var client = require('./gameDatabaseConnect')

var mechs = ['池库构筑(DBG)','工人放置','多样玩家能力','掷骰','合作']

router.get('/', function(req, res, next) {
    var params = URL.parse(req.url, true).query;

    var modSql = 'SELECT * FROM bggdatacn';
    var where = ' WHERE nameCN != ""'

    if(params.name) {
        where += ' AND nameCN like "%' + params.name + '%"'
    } else {
        params.name = ""
    }
    if(params.minPlayers) {
        where += ' AND minplayers <= ' + params.minPlayers
        where += ' AND maxplayers >= ' + params.minPlayers
    }
    if(params.maxPlayers) {
        where += ' AND minplayers <= ' + params.maxPlayers
        where += ' AND maxplayers >= ' + params.maxPlayers
    }
    
    if(typeof(params.mech) == 'string') {
        where += ' AND mechanicsCN like "%' + params.mech + '%"'
    } else {
        for (item in params.mech) {
            where += ' AND mechanicsCN like "%' + params.mech[item] + '%"'
        }
    }

    modSql += where;
    
    modSql += ' ORDER BY average DESC'
    modSql += ' LIMIT 10'

    console.log(modSql)

    client.query(modSql, null,
    function selectCb(err, results, fields) {
        if (err) {throw err;}

        //console.log(results)
        //console.log('outer')
        if(results) {
            res.render('gameFilter', {param : params, gamedata : results, mechs : mechs});
        }
    });
});

module.exports = router;
