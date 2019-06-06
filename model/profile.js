const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    relationship: {type: String, required: true, unique: true},
    job: {type: String, required: true},
})

const Profile = mongoose.model('Profile',ProfileSchema);

module.exports = {Profile, ProfileSchema};