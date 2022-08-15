const userRouter = require('./userRouter');
const foodRouter = require('./foodRouter');
const reservationRouter = require('./reservationRouter');


module.exports = (app) =>  {
    app.use('/api/users', userRouter);
    app.use('/api/food', foodRouter);
    app.use('/api/reservation', reservationRouter);

};