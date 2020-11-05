var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost:8080'
  user: "root",
  database: 'my_orders'
});


connection.connect();