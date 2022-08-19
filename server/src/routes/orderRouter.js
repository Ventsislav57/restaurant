const router = require('express').Router();


const orderController = require('../controllers/orderController');

router.post('/:userId' , orderController.createOrder);


module.exports = router;
