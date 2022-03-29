const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController')

router.get('/:id/edit', productController.edit);
router.get('/details', productController.details);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.get('/', productController.index);


module.exports = router;