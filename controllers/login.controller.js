var user = require('../models/users.model');

module.exports.index = (req, res) => {
	res.render('../views/login',{
		error :''
	});
};

module.exports.postLogin = (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	user.findOne({email :email}, function (err, user) {
		if(!user){
			res.render('../views/login',{
				error :'tài khoản không tồn tại'
			});
			return;
		}
		if(req.body.password !== user.password){
			res.render('../views/login',{
				error : 'sai mật khẩu'
			});
			return;
		}
		res.cookie('userID', user._id);
		res.redirect('/products');
	});
}