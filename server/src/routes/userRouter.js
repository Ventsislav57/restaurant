const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.post('/login', userController.login);
router.post('/register' , userController.register);
router.get('/logout', userController.logout)

router.put('/:userId', userController.updeitUser);

router.delete('/:userId', userController.deleteUser);

module.exports = router;