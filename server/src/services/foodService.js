const Burger = require('../models/Burger');


const getAll = async () => {

    return await Burger.find();
}

const create = async (burgerData) => {
    return await Burger.create(burgerData);
}

const getOne = async (burgerId) => {
    return await Burger.findById(burgerId);
}

module.exports = {
    getAll,
    create,
    getOne
}