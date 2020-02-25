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
    findById: async function(req, res) {
        try {
        const dbUser = await db.User.findById(req.params.id)
            if(dbUser.memories.length === 0) {
                res.json(dbUser);
            }
            const memories = [];
            const memoryIds = dbUser.memories.concat();
            while(memoryIds.length) {
                const memoryId = memoryIds.pop();
            const memoryresults = await db.Memory.findById( memoryId);
            memories.push(memoryresults);
            }
            const {_id, email, password} = dbUser
            res.json({_id, email, password, memories});
        }
        catch(err) {
            res.sendStatus(400).json(err);
        }
    
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