let Project = require('../models/Project');

let projectController = {

    getAllProjects:function(req, res){

        Project.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('visitor', {projects});
        })
    },

    getMyProject:function(req, res){

        Project.find({ username : req.body.username } , function(err, projects){

            if(err)
                res.send(err.message);
            else
               res.render('myproject', {projects});
                //console.log("plisten");
        })
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                res.redirect('/addwork'); //render projects
                console.log("...");

            }
        })
    }
}

module.exports = projectController;
