const Burger = require('../models/Burger');


const getAll = async () => {

    return await Burger.find();
}

const create = async (burgerData) => {
    return await Burger.create(burgerData);
}

module.exports = {
    getAll,
    create
}