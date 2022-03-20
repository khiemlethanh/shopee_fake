const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController')

router.get('/login', SiteController.login);
router.post('/login', SiteController.validateLogin);
router.get('/register', SiteController.register);
router.post('/register', SiteController.validateRegister);
router.get('/', SiteController.index);


module.exports = router;