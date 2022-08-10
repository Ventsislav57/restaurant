const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const { JWT_SECRET } = require('../config/constants');


const login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect email or password');
    }
    
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return createToken(user);
}

const register = async (firstName, email, phoneNumber, password) => {
    const exiting = await User.findOne({ email });

    if (exiting) {
        return error = {
            name: 'Custom error!',
            errors: 'Email already exiting!'
        }
    }

    const user = await User.create({ firstName, email, phoneNumber, password });

    return createToken(user);

};


function createToken(user) {

    const payload = {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        phoneNumber: user.phoneNumber
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        accessToken: token
    };
}


module.exports = {
    login,
    register
}