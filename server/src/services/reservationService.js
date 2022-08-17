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
};

const editReservation = async (reservationId, reservationData) => {
    return await Reservation.findOneAndUpdate(reservationId, reservationData , {runValidators: true})
}


module.exports = {
    getAllReservation,
    getOneReservation,
    createReseration,
    deleteReservation,
    editReservation
}