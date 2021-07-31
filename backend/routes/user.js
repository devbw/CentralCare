const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../middlewares/auth');


router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.delete('/delete', auth, userController.deleteAccount);

router.delete('/delete/:id', auth, userController.deleteAccountAdmin);

router.get('/:userId', auth, userController.getOneUser)

router.get('/admin/users', auth, userController.getAllUsers)

module.exports = router;
