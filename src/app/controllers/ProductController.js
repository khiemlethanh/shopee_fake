const Product = require('../models/Product')
const { mongooseToObject } = require('../../utils/mongoose')

class ProductsController {
    
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render(
                'admin/editProducts',
                {
                    product: mongooseToObject(product),
                    layout: 'adminMain',
                },
                )
            )
            .catch(next);
    }

    // [PUT] /products/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/products'))
            .catch(next);
    }

    // [DELETE] /products/:id
    delete(req, res, next) {
        Product.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    products(req, res, next) {
        Product.find({})
            .then(products => {
                products = products.map(product => product.toObject())
                res.render('products/products',{products,layout:'main'});
            })
            .catch(error =>{})
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
}

module.exports = new ProductsController;