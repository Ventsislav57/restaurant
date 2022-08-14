const userRouter = require('./userRouter');
const foodRouter = require('./foodRouter');

module.exports = (app) =>  {
    app.use('/api/users', userRouter);
    app.use('/api/food', foodRouter);
};