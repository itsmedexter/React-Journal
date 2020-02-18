const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    title: { type: String, required: false, default: null },
    main_content: { type: String, required: true },
    tag: { type: String, required: false, default: null },
    user_id: { type: Number },
    date: { type: Date, default: Date.now }
});

// Id, title, main content, tag, user Id (forien id key), association mongo????

const Memory = mongoose.model ("Memory", memorySchema);

module.exports = Memory;