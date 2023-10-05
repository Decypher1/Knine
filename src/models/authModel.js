const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});
//since I am using the passport local mongoose there will be no need for password model
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);