var adminService = require('../services/adminServices');

exports.adminLogin = async function (req, res, next) {
    try {
        const data = await adminService.loginAdmin(req.body.adminEmail,req.body.password);
        console.log(data);

        res.json({
            message: data
        });
    } catch (err) {}
}


exports.adminLogout = (req, res, next) => {
    console.log("admin logout")
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return  res.json({ message: "logout Successful" });
            }
        });
    }
}
