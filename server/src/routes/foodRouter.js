const router = require('express').Router();

const foodController = require('../controllers/foodController');

router.get('/burgers', foodController.getAllBurgers);

router.post('/burgers', foodController.create);






module.exports = router;