const Reservation = require('../models/Reservation');


const getAllReservation = async () => {
    return await Reservation.find();
};

const getOneReservation = async (reservationId) => {
    return await Reservation.findById(reservationId);
};

const createReseration = async (reservationData) => {
    return await Reservation.create(reservationData);
};

const deleteReservation = async (reservationId) => {
    return await Reservation.findByIdAndRemove(reservationId);
}


module.exports = {
    getAllReservation,
    getOneReservation,
    createReseration,
    deleteReservation
}