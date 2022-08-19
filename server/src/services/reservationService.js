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

const editReservation = (reservationId, reservationData) => Reservation.findByIdAndUpdate(reservationId, reservationData , {runValidators: true});



module.exports = {
    getAllReservation,
    getOneReservation,
    createReseration,
    deleteReservation,
    editReservation
}