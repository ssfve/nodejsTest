var express = require('express');
var router = express.Router();

var URL = require('url')

var client = require('./gameDatabaseConnect')

router.get('/', function(req, res, next) {
    var params = URL.parse(req.url, true).query;

    var modSql = 'SELECT * FROM bggdatacn WHERE gameid = ?';
    var modSqlParams = [params.id];

    console.log(modSql)

    client.query(modSql, modSqlParams,
    function selectCb(err, results, fields) {
        if (err) {throw err;}

        //console.log(results)
        //console.log('outer')
        if(results) {
            showdata = results[0]
            showdata.rates = new Number(showdata.average).toFixed(1)
            showdata.weight = new Number(showdata.averageweight).toFixed(2)
            console.log(showdata)
            //console.log('in')
            res.render('gameCoverOld', showdata);
        }
    });
});

module.exports = router;
