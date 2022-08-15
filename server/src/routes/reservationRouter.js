const router = require('express').Router();

const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.getAllReservation);
router.get('/:reservationId', reservationController.getOneReservation);

router.post('/', reservationController.createReseration);


module.exports = router;