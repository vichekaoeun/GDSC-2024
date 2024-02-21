const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema({
    bid: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;