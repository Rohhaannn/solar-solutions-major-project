var express = require('express');
var ejs = require('ejs'); //which is gonna allow me pass data to HTML whenever I want
var bodyparser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');


mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_laravel"
})


var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000);   //port number
app.use(bodyparser.urlencoded({extended: true}));
app.use(session({secret:"secret"}));


//localhost:3000
app.get('/', function(req, res) {
  // res.render('pages/index');  // dont show whole name of the file like "index.ejs" - NO , just use it pages/index.
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_project"
  })

  con.query("SELECT * FROM products",(err,result)=>{
    res.render('pages/index',{result:result});
  })



});