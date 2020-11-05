const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
const $ = require('jquery');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


var db = mysql.createConnection({
  user: 'root',
  database: 'my_orders'
});



db.connect((err) => {
  if (err) {
    throw err
  } else {
    console.log('DB connected!');
  }
});



app.use(express.static('dist'));



function postModel (data, callback) {
  var post  = "INSERT INTO order_info (name, email, password) VALUES('" + data.name + "', '" + data.email +"', '" + data.password + "')";

    db.query(post, (error, results ) => {
      if(error) {
        console.log(error);
      } else {
        callback(null, results)
        console.log('order_info posted to DB successfully!')
      }

  })
}

app.post('/confirmation', (req, res)=> {
  var data = req.body;

  postModel(data, (err, results) => {
    if(err) {
      throw err;
    } else {
      res.send(results)
    }
  });

});


  //how to separate files? for module exports











app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
