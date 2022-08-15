const Burger = require('../models/Burger');

const foodService = require('../services/foodService');
const errorHandler = require('../utils/errorHandler');

const getAllBurgers = async (req, res) => {
    try {
        const burgers = await foodService.getAllBurgers();

        // status???

        res.status(200).json({ burgers })
    } catch (error) {
        res.status(301);
        return errorHandler(error, req, res);
    };
};

const getOneBurger = async (req, res) => {

    try {

        const burger = await foodService.getOneBurger(req.params.burgerId);
        res.status(201).json({ burger });
    } catch (error) {

        return errorHandler(error, req, res);
    };
};

const createBurger = async (req, res) => {

    const burgerData = req.body;

    try {
        const burger = await foodService.createBurger(burgerData);
        // status???
        res.status(200).json({ burger });
        
    } catch (error) {

        res.status(301);

        return errorHandler(error, req, res);
    };
};


// Pizza controller

const getAllPizzas = async (req, res) => {
    try {
        const pizzas = await foodService.getAllPizzas();

        // status???

        res.status(200).json({ pizzas });

    } catch (error) {
        res.status(301);
        return errorHandler(error, req, res);
    };
};

const getOnePizza = async (req, res) => {

    try {

        const pizza = await foodService.getOnePizza(req.params.pizzaId);
        res.status(201).json({ pizza });
    } catch (error) {

        return errorHandler(error, req, res);
    };
};

const createPizza = async (req, res) => {

    const pizzaData = req.body;

    try {
        const pizza = await foodService.createPizza(pizzaData);
        // status???
        res.status(200).json({ pizza });
        
    } catch (error) {

        res.status(301);

        return errorHandler(error, req, res);
    };
};


module.exports = {
    getAllBurgers,
    getOneBurger,
    createBurger,
    getAllPizzas,
    getOnePizza,
    createPizza
}