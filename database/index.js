var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'morePlaces'
});

connection.connect();

module.exports = connection;