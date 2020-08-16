var express = require('express');
var router = express.Router();
var {
	loginCheck
} = require('../controller/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res,next){
	const {username, password} = req.body;
	const result = loginCheck(username, password);
	console.log('login result:', result);
	return result.then(data=>{
		if(data.username)
		{
			res.json(true);
		}
		res.json(false);
	});
});

module.exports = router;
