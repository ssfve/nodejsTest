var mysql = require('mysql');

var DatabaseName = 'boardgames';

var client = mysql.createConnection({
    host: '180.76.244.130',
    user:'mysql',
    password:'MyNewPass4!',
    port: '3306',
});

client.query("use " + DatabaseName);

module.exports = client;
