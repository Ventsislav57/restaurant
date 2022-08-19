const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const { JWT_SECRET } = require('../config/constants');

const blacklist = [];

const login = async (email, password) => {
    const user = await User.findOne({ email }).populate('reservations');

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return createToken(user);
}

const register = async ({firstName, email, phoneNumber, password, rePassword}) => {
    const exiting = await User.findOne({ email });

    if(password !== rePassword) {
        throw {
            message: 'Passwords dont match!'
        }
    }

    if (exiting) {
        throw new Error('Email alredy exiting!');
    }

    const user = await User.create({ firstName, email, phoneNumber, password });

    return createToken(user);

};

const logout = (accessToken) => {
    blacklist.push(accessToken);
};

const getOneUser = (userId) => {
    
    const user = User.findById(userId).populate('reservations');

    if (!user) {
        throw new Error('Email or password dont match!');
    }

    return user
}


function createToken(user) {

    const payload = {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        reservations: user.reservations
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        reservations: user.reservations,
        accessToken: token
    };
};

function validateToken(accessToken) {
    if (blacklist.includes(accessToken)) {
        
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(accessToken, JWT_SECRET);
}


module.exports = {
    login,
    register,
    logout,
    validateToken,
    getOneUser
}