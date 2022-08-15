const Pizza = require('../models/Pizza');
const Burger = require('../models/Burger');



const getAllBurgers = async () => {
    return await Burger.find();
}

const createBurger = async (burgerData) => {
    return await Burger.create(burgerData);
}

const getOneBurger = async (burgerId) => {
    return await Burger.findById(burgerId);
}

// Pizza service

const getAllPizzas = async () => {
    return await Pizza.find();
}

const getOnePizza = async (pizzaId) => {
    return await Pizza.findById(pizzaId);
}

const createPizza = async (pizzaData) => {
    return await Pizza.create(pizzaData);
}

module.exports = {
    getAllBurgers,
    getOneBurger,
    createBurger,
    getAllPizzas,
    getOnePizza,
    createPizza
}