var db = require("../models");
var Sequelize = require('sequelize');
var Op =Sequelize.Op

module.exports = function(app) {
    app.get("/jobs", function(req, res) {
        db.Jobs.findAll({}).then(function(results) {
            var jobsObj ={
                jobs: results
            }
        res.render("allJobs", jobsObj);
        });
    });

    app.get("/jobs/add", function(req, res){
        res.render("add")
    })
    app.post("/jobs/add", function(req, res) {

        var {title, technologies, budget, description, email} = req.body;
        var errors = [];

        if(!title){
            errors.push({text: "Please add a Title"})
        }
        if(!technologies){
            errors.push({text: "Please add a technologies"})
        }
        if(!description){
            errors.push({text: "Please add a description"})
        }
        if(!email){
            errors.push({text: "Please add an Email"})
        }
            if(errors.length > 0){
                res.render('add',{
                    errors,
                    title, 
                    technologies,
                    budget, 
                    description, 
                    email
                })
            }else{
                if(!budget){
                    budget='Unknown';
                }else{
                    budget =`$${budget}`;
                }
            }

            technologies = technologies.toLowerCase().replace(/, /g, ',');

        db.Jobs.create({
            title,
            technologies,
            budget,
            description,
            email
        }).then(function(jobs) {
            res.redirect('/jobs')})
        .catch(function(err){
            console.log(err)
        })
        });

        app.get('/jobs/search', function(req, res){
            var term = req.body
            db.Jobs.findAll({
                where:{
                    technologies: { 
                        [Op.like]: '%' + term + '%'
                    }
                }
            }).then(function(results){
                res.render('allJobs', results)
            })
        })


}
