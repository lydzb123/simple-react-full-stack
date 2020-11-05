const express = require('express');
// var mysql = require('mysql');
const $ = require('jquery');


const app = express();


// var connection = mysql.createConnection({
//   host: 'localhost:8080'
//   user: "root",
//   database: 'my_orders'
// });

// connection.connect();



app.use(express.static('dist'));


app.post('/confirmation', (req, res)=> {
//db logic
res.redirect('/')
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
