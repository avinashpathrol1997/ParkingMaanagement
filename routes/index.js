var express = require('express');
var router = express.Router();
var adminValidator = require('../validator/adminValidator')
var adminRegisterRoute =  require('./adminRegisterRoute')

router.use('/', adminRegisterRoute);

module.exports = router;