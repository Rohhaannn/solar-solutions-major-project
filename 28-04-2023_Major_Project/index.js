var express = require('express');
var ejs = require('ejs'); //which is gonna allow me pass data to HTML whenever I want
var bodyparser = require('body-parser');
var mysql = require('mysql');

sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node_project'
})


var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000);
app.use(bodyparser.urlencoded({extended: true}));

//localhost:3000
app.get('/', function(req, res) {
  // res.render('pages/index');  // dont show whole name of the file like "index.ejs" - NO , just use it pages/index.
  
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_project'
  })

  con.query("SELECT * FROM products",(err,result)=>{
    res.render('pages/index',{result:result});
  })



});