const express = require('express');
const router = express.Router();
const adminController = require('../../app/controllers/AdminController')

router.get('/addProducts', adminController.addProducts);
router.post('/addProducts', adminController.storeProducts);
router.get('/products', adminController.products);
router.get('/products/details', adminController.productsDetails);
router.get('/', adminController.index);


module.exports = router;