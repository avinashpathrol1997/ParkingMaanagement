var Admin = require('../models/admin');
var adminValidator = require('../validator/adminValidator')

exports.registerAdmin = async function (adminEmail, password, adminName) {
    var resultStr
    await Admin.findOne({
        adminEmail: adminEmail
    }, async function (err, data) {
        if (data) {
            console.log('email already exists');
            resultStr = "email already exists"
        } else {
            resultStr = 'Created Admin'
            const newAdmin = new Admin({
                adminEmail: adminEmail,
                adminName: adminName,
                password: password,
                role: 'admin'
            })
             newAdmin.save()
                .then(result => {

                    console.log('Created Admin');
                    resultStr = 'Created Admin'
                })
                .catch(err => {
                    console.log(err);
                    resultStr = 'admin not created...error'
                });
        }
    });
    return resultStr
}
