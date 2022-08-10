const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./config/db');
const { port, dbConnection } = require('./config/config');
const authMiddlewares = require('./middlewares/authMiddlewares');

const app = express();

const start = () => {

    try {
        db(dbConnection);

        app.use(express.json());
        app.use(cors());
        app.use(authMiddlewares());

        require('./routes/router')(app);

        console.log('      ---> DB Connected!!! <---');
        app.listen(port, () => console.log(`---> App listening on port ${port}... <---`));
    } catch (error) {
        console.log('---> DB in not connected!!! <---', error.message);
    };
};
start()