const Product = require('../models/Product')

class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home');
        // Product.find({}, function(err, products) {
        //     if (!err) {
        //         res.json(products);
        //     }
        //     else
        //         res.status(400).json({error: 'ERROR!!'});
        // })
    };

    form(req, res) {
        res.render('post_form')
    }
}

module.exports = new SiteController;