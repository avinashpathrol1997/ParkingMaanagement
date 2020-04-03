var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;

adminSchema = new Schema( {
	
	userEmail: String,
	UserName: String,
	password: String
},
{
  versionKey: false
}),
Admin = mongoose.model('adminDB', adminSchema);

module.exports = Admin;