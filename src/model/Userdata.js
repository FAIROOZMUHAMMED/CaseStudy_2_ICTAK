const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String,
    email : {type :String, unique:true },
    password : String,
});

var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;