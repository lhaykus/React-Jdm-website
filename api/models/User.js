const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        minlength: 5
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    avatar: {type: String},

    phoneNumber: {
        type: Number, 
        required: true,
        unique: true
    },
    country: {
        type: String, 
        required: true,
    },
},
{ timestamps: true },
);


const User = mongoose.model('User', userSchema);

module.exports = User;