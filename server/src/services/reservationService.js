const Reservation = require('../models/Reservation');


const getAllReservation = async () => {
    return await Reservation.find();
};

const getOneReservation = async (reservationId) => {
    return await Reservation.findById(reservationId);
};

const createReseration = async (reservationData) => {
    return await Reservation.create(reservationData);
}


module.exports = {
    getAllReservation,
    getOneReservation,
    createReseration
}