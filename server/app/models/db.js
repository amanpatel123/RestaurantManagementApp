'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'restaurant'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;