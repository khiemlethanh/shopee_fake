const { renderSync } = require('node-sass');
const Product = require('../models/Product')

class AdminController {

    //[GET] /admin
    index(req, res, next) {
        res.render('admin/admin',{layout:'adminMain'})
    };
    products(req, res, next) {
        Product.find({})
            .then(products => {
                products = products.map(product => product.toObject())
                res.render('admin/products',{products,layout:'adminMain'});
            })
            .catch(error =>{
                res.status(400).send({message: error.message});
            })
    };

    storeProducts(req, res, next){
        const formData = req.body;
        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/admin/products'))
            .catch(error => {
                res.status(400).send({message: error.message});
            })
    }
    productsDetails(req, res, next) {
        res.render('admin/productdetails', {layout:'adminMain'})
    };
    addProducts(req, res, next) {
        res.render('admin/addProducts', {layout:'adminMain'})
    };
}

module.exports = new AdminController;