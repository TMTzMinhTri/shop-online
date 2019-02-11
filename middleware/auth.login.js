var user = require('../models/users.model');

module.exports.authLogin = function (req, res, next) {
	// console.log(req.cookies)
	if(!req.cookies.userID){
		res.redirect('/account/login');
		return;
	}
	user.findOne({ id :req.cookies.userID }, function (err, user) {
		if(!user){
			res.redirect('/account/login');
			return;
		}
	});
	next();
};