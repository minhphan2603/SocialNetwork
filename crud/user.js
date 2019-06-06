const {User} = require('../model/user')

const mongoose = require('mongoose');
const {Profile} = require('../model/profile')

mongoose.connect("mongodb://localhost:27017/socialnetwork",{ useNewUrlParser: true })
    .then(() => console.log('connected database successfully!'));

const createUser = (username,password,university) => {
    User.findOne({username})
        .then(user => {
            if (user) return Promise.reject({error: 'User existed'});
            const newUser = new User({
                username,password,university
            })
            return newUser.save()
        })
        .then(console.log)
        .catch(console.log)
}

// createUser('Minh','123','BK');

const updateProfile = (userID, relationship, job) => {
    User.findById(userID)
        .then(user => {
            if (!user) return Promise.reject('user do not exist');
            const updatedProfile = new Profile({relationship,job})
            user.profile = updatedProfile;
            return user.save()
        })
        .then(console.log)
        .catch(console.log)
}

updateProfile('5cf91c8eb8da071dc49aa7bf','married','ITdeveloper');