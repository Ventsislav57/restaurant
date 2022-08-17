const router = require('express').Router();

const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.getAllReservation);
router.get('/:reservationId', reservationController.getOneReservation);

router.get('/delete/:reservationId', reservationController.deleteReservation);

router.post('/', reservationController.createReseration);
router.put('/edit/:reservationId' , reservationController.editReservation)


module.exports = router;