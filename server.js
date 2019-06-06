const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/socialnetwork",{ useNewUrlParser: true })
    .then(() => console.log('connected database successfully!'));

// ref

// POST

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    commentID: {

        ref: a
    }
});

const Post = mongoose.model('posts', PostSchema);

// Comment

const CommentSchema = new mongoose.Schema({
    PostID: {type: mongoose.Schema.Types.ObjectId,
            ref: "posts"},
    user: {type: String, required: true},
    content: {type: String, required: true},
});

const Comment = mongoose.model('comments', CommentSchema);

const createPost = async (title,author,content) => {
    const slug = title.replace(new RegExp(" ", 'g'),'').toLowerCase() + new Date().getTime();
    newPost = new Post({
        title, slug, author, content
    });
    return (await newPost.save());
}

const createComment = async (PostID,user,content) => {
    const newComment = new Comment({
        PostID,user, content
    })
    return await newComment.save();;
}

const getPost = async () => {
    const posts = await Post.find();
    // posts.forEach(async post => {
    //     commentInPost = await Comment.find({PostID: post._doc._id});
    //     postcomment = {...post._doc, comment: commentInPost}
    //     console.log(postcomment);
    // })
    console.log(posts);
    return posts;    
}

const getComments = async () => {
    const comments = await Comment.find().populate("PostID");
    console.log(comments);
    return comments;    
}

// createPost('code ta la luon','Minh','learning nodejs');

// createComment('5cf907b40fd93e2248029e50','Nhat','good nha');

getPost();

// getComments();

// createComment('5cf90ec4eae7ad1cb03825d9','Nhat','haha');