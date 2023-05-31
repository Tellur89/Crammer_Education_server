const { Router } = require('express');
const { loginUser, signupUser } = require('../controllers/userController');

const router = Router();

router.route('/signup').post(signupUser);
router.route('/login').post(loginUser);

module.exports = router;
