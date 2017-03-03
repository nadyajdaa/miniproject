//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var multer = require ('multer');
//var upload = multer({des:__dirname + './app/routes'});
var logger = require('morgan');
var path = require ('path');
var favicon = require ('serve-favicon');
var config = require('config.json');
require('rootpath')();



var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/mydb";

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.cookieSession());

app.use(express.static(__dirname+ '/views'));
app.use(session({ secret: "secrett", resave: false, saveUninitialized: true }));
//app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));


mongoose.connect(DB_URI)

app.use('/login', require('./app/controllers/login.controller'));
app.use('/signup', require('./app/controllers/register.controller'));;
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
