var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var adminController = require('../controllers/adminController')
var adminValidator = require('../validator/adminValidator')

router.get('/', function (req, res, next) {
    return res.render('index.ejs');
});

router.post('/register', adminValidator.adminValidator,
    adminController.adminRegister 
 );

module.exports = router;