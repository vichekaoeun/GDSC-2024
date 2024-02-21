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
    content: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;