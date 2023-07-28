let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../models/contact');


router.get('/', (req, res, next) => {
    res.render('contact/contact', { title: 'Contact' })
});

router.post('/contact', (req, res, next) => {
    let newContact = Contact({
        "Name": req.body.cName,
        "Email": req.body.cEmail,
        "Text": req.body.cMessage
    })

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/home');
        }
    })
});

module.exports = router;