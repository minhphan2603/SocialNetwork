const mongoose = require('mongoose');
const {ProfileSchema} = require('./profile');


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    university: {type: String, required: true},
    profile: ProfileSchema
})

const User = mongoose.model('User',UserSchema);

module.exports = {User, UserSchema};