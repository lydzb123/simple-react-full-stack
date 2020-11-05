const express = require('express');
const bodyParser = require('body-parser');
// var mysql = require('mysql');
const $ = require('jquery');




const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// var connection = mysql.createConnection({
//   host: 'localhost:8080'
//   user: "root",
//   database: 'my_orders'
// });

// connection.connect();



app.use(express.static('dist'));


app.post('/confirmation', (req, res)=> {
  var data = req.body;
  console.log(data);
  res.end();
//db logic
// res.redirect('/')
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
