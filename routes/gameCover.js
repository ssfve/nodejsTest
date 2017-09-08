var express = require('express');
var router = express.Router();

var URL = require('url')
var mysql = require('mysql');
var Game = require('./game');
var Control = require('./control');

/* GET users listing. */
var TEST_DATABASE = 'boardgames';
var TEST_TABLE = 'bggdatacn';

var client = mysql.createConnection({
    host: '127.0.0.1',
    user:'mysql',
    password:'MyNewPass4!',
    port: '3306',
});

//var Game = require('../routes/Game');
/* GET home page. */
router.get('/', function(req, res, next) {
	var game = new Game();
    var params = URL.parse(req.url, true).query;

    //client.connect();
    client.query("use " + TEST_DATABASE);

    var modSql = 'SELECT * FROM bggdatacn WHERE gameid = ?';
    var modSqlParams = [params.gameid];

    client.query(modSql, modSqlParams,
    function selectCb(err, results, fields) {
        if (err) {throw err;}
        //console.log(results)
        //console.log(results[0].age)
        if(results)
        {
            console.log(results[0])
            res.render('gameCover', {title : params.id, game : JSON.stringify(results[0])});
        }
    });
});

module.exports = router;
