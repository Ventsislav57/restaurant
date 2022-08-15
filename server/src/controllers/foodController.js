const Burger = require('../models/Burger');

const foodService = require('../services/foodService');
const errorHandler = require('../utils/errorHandler');

const getAllBurgers = async (req, res) => {
    try {
        const burgers = await foodService.getAll();

        // status???

        res.status(200).json({ burgers })
    } catch (error) {
        res.status(301);
        return errorHandler(error, req, res);
    }
}

const create = async (req, res) => {

    const burgerData = req.body;

    try {
        const burger = await foodService.create(burgerData);
        // status???
        res.status(200).json({ burger });

    } catch (error) {

        res.status(301);

        return errorHandler(error, req, res);
    }
}

const getOne = async (req, res) => {

    try {

        const burger = await foodService.getOne(req.params.burgerId);
        res.status(201).json({ burger });
    } catch (error) {

        return errorHandler(error, req, res);
    }
}


module.exports = {
    getAllBurgers,
    create,
    getOne
}