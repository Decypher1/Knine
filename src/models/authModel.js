const mongoose = require('mongoose');

const userAuthSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },

    name: {
        type: String
    },
    
    username: {
        type: String,
        required: true
    },

    password: {
        type: String
    }
})

module.exports = mongoose.model('User', userAuthSchema);