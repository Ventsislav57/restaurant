const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is require!'],
    },
    firstName: {
        type: String,
        required: [true, 'First name is require!'],
        minLength: [3, 'First name should be at least 3 characters long!']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Phonenumber is require!'],
    },
    guest: {
        type: String,
        required: [true, 'Quest is require!'],
        min:[1, 'Quest should be at least 1!']
    },
    date: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});


const Reservation = mongoose.model('Reservation', ReservationSchema);


module.exports = Reservation;