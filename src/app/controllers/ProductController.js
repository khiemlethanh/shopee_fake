const Product = require('../models/Product')
const { mongooseToObject } = require('../../utils/mongoose')

class ProductsController {

    //[GET] /news
    index(req, res) {
        res.render('products/products',{layout:'main'})
    };

    details(req, res) {
        res.render('products/details',{layout:'main'})
    };
    
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
}

module.exports = new ProductsController;