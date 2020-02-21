// const Memory = require("./Memory");
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
email: { 
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address" ]},
password: { 
    type: String,
    trim: true,
required: "Password is Required",
validate: [({ length }) => length >=6, "Password should be longer."] },
image: { 
    type: String,
 },
});
// Id
// Email
// Password
// image url


const User = mongoose.model("User", userSchema);

module.exports = User;



// nested memory schema???
// const userSchema = new Schema({
//     email: { 
//         type: String,
//         unique: true,
//         match: [/.+@.+\..+/, "Please enter a valid e-mail address" ]},
//     password: { 
//         type: String,
//         trim: true,
//     required: "Password is Required",
//     validate: [({ length }) => length >=6, "Password should be longer."] },
//     image: { 
//         type: String,
//      },
//      memory: [{
//          main_content: { type: String, required: true },
//          tag: { type: String, required: false, default: null },
//          date: { type: Date, default: Date.now}
//             }]
//     });









