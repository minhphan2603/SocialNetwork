const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/socialnetwork",{ useNewUrlParser: true })
    .then(() => console.log('connected database successfully!'));

const {Post} = require('../model/post');
const {User} = require('../model/user');

const createPost = (userID,title,content) => {
    User.findById(userID)
        .then(user => {
            if (!user) return Promise.reject({error: 'User do not exist'});
            const newPost = new Post({
                title,content
            })
            return newPost.save()
        })
        .then(console.log)
        .catch(console.log)
}

createPost('5cf91c8eb8da071dc49aa7bf','learning nodejs','vui qua vui');
