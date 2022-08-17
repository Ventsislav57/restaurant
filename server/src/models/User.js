const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const { SATL_ROUNDS } = require('../config/constants');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        minLength: [3, 'First name should be at least 3 characters long!']
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [7, 'Password should be at least 7 characters long!']
    },
    reservations: [{
        type: mongoose.Types.ObjectId,
        ref: 'Reservation'
    }]
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, SATL_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        });
});


const User = mongoose.model('User', userSchema);

module.exports = User;