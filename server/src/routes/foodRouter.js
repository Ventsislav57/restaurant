const router = require('express').Router();

const foodController = require('../controllers/foodController');

router.get('/burgers', foodController.getAllBurgers);
router.get('/burgers/:burgerId', foodController.getOne);


router.post('/burgers', foodController.create);






module.exports = router;