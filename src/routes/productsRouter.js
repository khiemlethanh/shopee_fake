const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController')

router.get('/:id/edit', productController.edit);
router.get('/details/:slug', productController.details);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.get('/', productController.products);

module.exports = router;