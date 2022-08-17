const Reservation = require('../models/Reservation');

const reservationService = require('../services/reservationService');
const userService = require('../services/userService');

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
        const user = await userService.getOneUser(reservation.owner);

        user.reservations.push(reservation._id);

        user.save();

        //status
        res.status(200).json({ reservation });
    } catch (error) {
        return errorHandler(error, req, res);

    }
};

const deleteReservation = async (req, res) => {
    const reservationId = req.params.reservationId;
    try {
        const reservation = await reservationService.deleteReservation(reservationId);
        const user = await userService.getOneUser(reservation.owner);

        user = user.reservations.map(x => x !== reservation._id);
        user.save();

        res.status(200).json({ reservation });

    } catch (error) {
        return errorHandler(error, req, res);
    }
};


const editReservation = async (req, res) => {
    const reservationId = req.params.reservationId;
    const reservationData = req.body

    try {
        const reservation = await reservationService.editReservation(reservationId, reservationData);

        res.status(200).json({ reservation })

    } catch (error) {
        return errorHandler(error, req, res);
    }
}

module.exports = {
    getAllReservation,
    getOneReservation,
    createReseration,
    deleteReservation,
    editReservation
}