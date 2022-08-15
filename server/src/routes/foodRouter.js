const router = require('express').Router();

const foodController = require('../controllers/foodController');

router.get('/burgers', foodController.getAllBurgers);
router.get('/pizzas' , foodController.getAllPizzas);

router.get('/burgers/:burgerId', foodController.getOneBurger);
router.get('/pizzas/:pizzaId', foodController.getOnePizza);

router.post('/burgers', foodController.createBurger);
router.post('/pizzas', foodController.createPizza);







module.exports = router;