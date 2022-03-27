class AdminController {

    //[GET] /admin
    index(req, res, next) {
        res.render('admin/admin',{layout:'adminMain'})
    };
    products(req, res, next) {
        res.render('admin/productdetails',{layout:'adminMain'})
    };
}

module.exports = new AdminController;