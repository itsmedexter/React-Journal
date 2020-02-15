const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    Id: { type: String,
        required: true },
    title: { type: String,
        required: true },
    main_content: { type: String,
        required: true },
    tag: { type: String,
        required: true },
    user_id: { type: Number },
    memoryCreated: { 
        type: Date,
        default: Date.now 
        }
});

// Id, title, main content, tag, user Id (forien id key)

const Memory = mongoose.model ("Memory", memorySchema);

module.exports = Memory;