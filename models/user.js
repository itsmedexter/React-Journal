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



