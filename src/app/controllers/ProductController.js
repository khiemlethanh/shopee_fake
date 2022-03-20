const Product = require('../models/Product')
const { mongooseToObject } = require('../../utils/mongoose')

class ProductsController {

    //[GET] /news
    index(req, res) {
        res.render('products/products')
    };

    details(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('products/details', {
                    product: mongooseToObject(product)
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('products/create')
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/${req.body.videoId}/sddefault.jpg`
        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }
}

module.exports = new ProductsController;