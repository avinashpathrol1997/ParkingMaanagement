var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var adminController = require('../controllers/adminController')
var adminValidator = require('../validator/adminValidator')

router.get('/', function (req, res, next) {
    return res.render('login.ejs');
});

router.post('/login', adminValidator.adminValidator,
    adminController.adminLogin
);

router.post('/logout', 
    adminController.adminLogout
);

router.get('/profile', function (req, res, next) {
    adminValidator.profile
    console.log("profile");
    const admin = req.session.adminDB;
    return res.render('admindata.ejs', {
        "name": admin.userName,
         "role": admin.role,
        "email": admin.userEmail,
        "password": admin.password
    });
});

module.exports = router;