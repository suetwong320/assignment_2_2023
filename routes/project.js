let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let project = require('../models/project');

router.get('/', (req, res, next) => {
    project.find((err, projectList) => {
        if(err){
            return console.error(err);
        }else{
            res.render('project/list', {title: 'project Info', ProjectList: projectList})
        }
    });
});

// to open add project page
router.get('/add', (req, res, next) => {
    res.render('project/add', {title: 'Add project'})
});

//insert to DB
router.post('/add', (req, res, next) => {
    let newProject = project({
        "title": req.body.ptitle,
        "description": req.body.pdescription,
        "deadline": req.body.deadline
    });

    project.create(newProject, (err, project) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/project')
        }
    })
});

//Retrieve data from mnongodb and open it in view (form)
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    project.findById(id, (err, projectToEdit) => {
        if(err){
            console.log(err);
        } else {
            //write a code to display data in view
            res.render('project/edit', {title: 'Edit project', project: projectToEdit});
        }
    })
});

//write  a code to store udpated data into mongodB
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedProject = project({
        "_id": id,
        "title": req.body.ptitle,
        "description": req.body.pdescription,
        "deadline": req.body.deadline
    });

    project.updateOne({_id: id}, updatedProject, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/project');
        }
    });
})

module.exports = router;