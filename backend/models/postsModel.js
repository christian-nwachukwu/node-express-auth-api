const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;