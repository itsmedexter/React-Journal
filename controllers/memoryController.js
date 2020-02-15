const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Memory.find(req.query)
        .sort({ date: -1 })
        .then(dbMemory => res.json (dbMemory))
        .catch(err => res.status (400).json(err));
        },
    findById: function(req, res) {
        db.Memory.findById(req.params.id)
        .then(dbMemory => res.json(dbMemory))
        .catch(err => res.status(400).json(err));
    },
    create: function(req, res) {
        db.Memory.create(req.body)
        .then(dbMemory => res.json(dbMemory))
        .catch(err => res.status(400).json(err));
    }
};
