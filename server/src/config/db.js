const mongoose = require('mongoose');

const option = {useNewUrlParser: true};

module.exports = (dbConnection) => mongoose.connect(dbConnection, option);