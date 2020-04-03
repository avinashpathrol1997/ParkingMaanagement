var adminService = require('../services/adminServices');

exports.adminRegister = async function (req, res, next) {
    try {
        const data = await adminService.registerAdmin(req.body.adminEmail,req.body.password,req.body.adminName);
        console.log(data);
        
        res.json({
            message: data
        });
    } catch (err) {}
}

