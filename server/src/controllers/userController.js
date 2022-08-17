const User = require('../models/User');

const errorHandler = require('../utils/errorHandler');
const userService = require('../services/userService');


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.login(email, password);
        //  ????status????

        res.status(200).json({ user });

    } catch (error) {
        res.status(301);
        return errorHandler(error, req, res);
    }

};

const register = async (req, res, next) => {
    const { firstName, email, phoneNumber, password } = req.body;

    try {
        const user = await userService.register(firstName, email, phoneNumber, password);
        //   ????status????

        res.status(200).json({ user });

    } catch (error) {
        res.status(301)
        return errorHandler(error, req, res);
    };

};

const logout = (req, res) => {

    userService.logout(req.user.accessToken);
    res.status(204).end();
}

const getOneUser = async (req, res) => {

    const userId = req.params.userId;

    try {
        const user = await userService.getOneUser(userId);
        res.status(200).json({ user });
    } catch (error) {
        return errorHandler(error, req, res);
    }
}

const getAllUsers = async (req, res) => {
    
    try {
        const users = await User.find();

        res.status(200).json({ users: users });

    } catch (error) {
        return errorHandler(error, req, res);
    };
};

const updeitUser = async (req, res) => {
    const { userId } = req.params;
    const userData = req.body;

    try {
        const updeitUser = await User.findByIdAndUpdate(userId, userData, { runValidators: true, new: true });
        res.status(200).json({ updeitUser: updeitUser });

    } catch (error) {
        return errorHandler(error, req, res);
    }
};

const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({ user });
    } catch (error) {
        errorHandler(error, req, res);
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    register,
    login,
    logout,
    updeitUser,
    deleteUser
}