var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;

adminSchema = new Schema( {
	
	adminEmail: String,
	adminName: String,
	password: String,
	role: String
},
{
  versionKey: false
}),
Admin = mongoose.model('adminDB', adminSchema);

module.exports = Admin;