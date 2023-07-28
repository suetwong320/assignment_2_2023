let mongoose = require('mongoose');
let projectsModel = mongoose.Schema(
    {
        "title" : String,
        "description" : String,
        "deadline" : Date
    },
    {
        collection: "project"
    }
);

module.exports = mongoose.model('Project', projectsModel);