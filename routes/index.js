var express = require('express');
var router = express.Router();

//Members page
router.get('/',  ensureAuthentication ,function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function ensureAuthentication(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash('info', 'You must be logged in to access members area');
	res.redirect('/users/login');
}

module.exports = router;
