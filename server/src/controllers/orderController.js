const User = require('../models/User');

const userService = require('../services/userService');
const errorHandler = require('../utils/errorHandler');

const createOrder = async (req, res) => {

    const { userId } = req.params;
    const orderData = req.body;

    try {
        const user = await userService.getOneUser(userId);

        user.orders.push(orderData);
        user.save();

        res.json({ user });
    } catch (error) {
        return errorHandler(error, req, res);
    }
}

module.exports = {
    createOrder
}