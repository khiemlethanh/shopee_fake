const express = require('express');
const router = express.Router();
const adminController = require('../../app/controllers/AdminController')

router.get('/products/details', adminController.products);
router.get('/', adminController.index);


module.exports = router;