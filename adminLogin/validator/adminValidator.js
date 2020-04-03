var Joi = require('joi');
var adminServices = require('../services/adminServices');

const SCHEMA = Joi.object().keys({ 
    adminEmail: Joi.string().email().required(),
    password: Joi.string().alphanum().min(3).max(10).required(),
}); 


/**
 * Validate location name on creation or updation request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
exports.adminValidator = async function (req, res, next) {
  return Joi.validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}


exports.profile = async function (req, res, next) {
    return adminServices.getprofileByName(req.body.userName)
      .then(() => next())
      .catch(err => next(err));
  }
