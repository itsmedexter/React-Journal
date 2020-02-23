const db = require("../models");

module.exports = {
    login: function(req, res) {
        // handle user login
        db.User.find(req.body)
        .catch(err => res.status (400).json(err));
    },

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
    create: function(req, res) {
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(400).json(err));
    }
    // would it need a req, res? or just a join?
    // findOne: function(req, res) {
    //     db.User.aggregate([
    //         {
    //             $lookup: 
    //             {
    //                from: "Memory",
    //                localField: req.body,
    //                foreignField: "main_content",
    //                as: "memory"
    //             }
    //         }
    //     ])
    //     .then(dbMemory => res.json(dbMemory))
    //     .catch(err => res.status(400).json(err));
    // }
};