const Reservation = require('../models/Reservation');

const reservationService = require('../services/reservationService');
const errorHandler = require('../utils/errorHandler');


const getAllReservation = async (req, res) => {

    try {
        const reservations = await reservationService.getAllReservation();

        // ?? status ??
        res.status(200).json({ reservations });
    } catch (error) {
        res.status(301);
        return errorHandler(error, req, res);
    };
};

const getOneReservation = async (req, res) => {

    try {
        const reservation = await reservationService.getOneReservation(req.params.reservationId);
        // ?? status??
        res.status(200).json({ reservation });
    } catch (error) {
        return errorHandler(error, req, res);
    };
};

const createReseration = async (req, res) => {

    const reservationData = req.body;
    try {
        const reservation = await reservationService.createReseration(reservationData);

        //status
        res.status(200).json({ reservation });
    } catch (error) {
        return errorHandler(error, req, res);

    }
}

module.exports = {
    getAllReservation,
    getOneReservation,
    createReseration
}