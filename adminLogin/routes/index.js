var express = require('express');
var router = express.Router();
var adminLoginRoute =  require('./adminLoginRoute')
var adminValidator = require('../validator/adminValidator')

router.use('/', adminLoginRoute);

module.exports = router;