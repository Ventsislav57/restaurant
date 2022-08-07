const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const { SATL_ROUNDS } = require('../config/constants');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, 'First name should be at least 3 characters long!']
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [7, 'Password should be at least 7 characters long!']
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SATL_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        });
});


const User = mongoose.model('User', userSchema);

module.exports = User;