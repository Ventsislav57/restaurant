const mongoose = require('mongoose');

const BurgerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Burger should have title!'],
        minLength: [2, 'Burger title should be at least 3 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Burger should have price!'],
        min: [3, 'Burger price should be at least 3 usd!']
    },
    image: {
        type: String,
        required: [true, 'Burger should have image!'],
        validate: [/^https?/, 'Image should be a link!']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Burger description should be at least 10 characters long!']
    }
});


const Burger = mongoose.model('Burger', BurgerSchema);


module.exports = Burger;