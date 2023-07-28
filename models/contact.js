let mongoose = require('mongoose');
let contactModel = mongoose.Schema(
    {
        "Name" : String,
        "Email" : String,
        "Text" : String
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model('Contact', contactModel);