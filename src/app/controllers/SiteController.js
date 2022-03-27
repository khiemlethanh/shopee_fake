const Product = require('../models/Product')
const User = require('../models/User')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {

    //[GET] /
    index(req, res, next) {
        res.render('home');
    };

    login(req, res, next) {
        res.render('login');
    };

    validateLogin(req, res, next) {
        User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        .then(data => {
            if(data)
                res.json('DANG NHAP THANH CONG');
            else 
                res.json('DANG NHAP THAT BAI');
        })
        .catch(err => {
            res.status(500).json('COS LOI BEN SERVER');
        })
    };

    register(req, res, next) {
        res.render('register');
    };

    validateRegister(req, res, next) {
        User.findOne({ 
            email: req.body.email 
        })
        .then(data => {
            if(data) {
                res.json('TAO KHOAN DA TON TAI')
            }
            else {
                return User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                })
            }
        })
        .then(data => {
            res.json('TAO TAI KHOAN THANH CONG');
        })
        .catch(err => {
            res.status(400).json('TAO TAI KHOAN THAT BAI');
        })
    };
}

module.exports = new SiteController;