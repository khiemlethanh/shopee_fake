class UserController {

    //[GET] /admin
    index(req, res, next) {
        res.render('users/user')
    };
}

module.exports = new UserController;