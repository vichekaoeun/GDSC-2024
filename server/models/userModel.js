const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    description: {
        type: String,
        trim: true,
        maxlength: 1000
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User