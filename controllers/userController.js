const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.User.find(req.query)
        .sort({ date: -1 })
        .then(dbUser => res.json (dbUser))
        .catch(err => res.status (400).json(err));
    },
    findById: function(req, res) {
        db.User.findById(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status (400).json(err));
    },
    create: function(req,res) {
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(400).json(err));
    }
};