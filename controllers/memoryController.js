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
        //we will have to modify how body handled
        const {userId, ...memory} = req.body;
        console.log(userId, memory)
        // isssue was creating a memory .create(memory), we want to request body 
        db.Memory.create(req.body)
        .then(dbMemory => {
            console.log(dbMemory);
            //Now memory is saved we need to update the user
            //Reach out to user DB and update memories prop
            db.User.updateOne({_id: userId},{$push:{memories: dbMemory._id}})
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => 
                {
                    res.json(err)
                });
        })
        .catch(err => res.status(400).json(err));
    },
    findOne: function() {
        db.Memory.aggregate([
            {
                $lookup:
                {
                    from: "User"
                }
            }
        ])
    }
};
