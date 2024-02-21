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
    time: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;