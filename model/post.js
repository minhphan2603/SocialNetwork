const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    
});

const Post = mongoose.model('posts', PostSchema);

module.exports = {Post, PostSchema};