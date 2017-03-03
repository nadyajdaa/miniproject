 // require dependincies
var express = require('express');
var router = express.Router();
var projectController = require('./controllers/projectController');

var router = express.Router();

 router.get('/', function(req, res){
   res.render('home');
   console.log("home");
 });
 router.get('/myproject', projectController.getMyProject , function (req , res){
   console.log("listenn");
 });

 router.get('/visitor', projectController.getAllProjects,  function(req, res){
   console.log("A visit");
 });

 router.get('/register', function(req, res){
   res.render('register');
   console.log("The Registration");
 });

 router.post('/register', function(req , res){
   res.render('login');
 })


router.get('/login', function(req, res){
  res.render('login');
  console.log("The Login");
});

router.get('/profile', function(req, res){
  res.render('profile');
  console.log("The profile");
});


router.get('/addwork', function(req, res){
  res.render('addwork.ejs');
  console.log("Adding");

});
router.post('/project', projectController.createProject );



// export router

module.exports = router;
