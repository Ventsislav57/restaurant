const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Pizza should have title!'],
        minLength: [2, 'Pizza title should be at least 3 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Pizza should have price!'],
        min: [3, 'Pizza price should be at least 3 usd!']
    },
    image: {
        type: String,
        required: [true, 'Pizza should have image!'],
        validate: [/^https?/, 'Image should be a link!']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Pizza description should be at least 10 characters long!']
    }
});


const Pizza = mongoose.model('Pizza', PizzaSchema);


module.exports = Pizza;