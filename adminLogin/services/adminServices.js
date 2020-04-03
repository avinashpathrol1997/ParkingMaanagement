var Admin = require('../models/admin');

exports.loginAdmin = async function (adminEmail, password) {
    var resultStr
    await Admin.findOne({
        adminEmail: adminEmail
    }, function (err, data) {
        if (data) {

            if (data.password == password) {
                resultStr = "login successful"

            } else {
                resultStr = "login failed"
            }
        } else {
            console.log('wrong email');
            resultStr = "wrong email id"
        }
    });

    return resultStr
}
