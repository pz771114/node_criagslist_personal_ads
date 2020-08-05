var express = require('express');
var router = express.Router();
var db = require('../db/mysql');
var {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
} = require('../controller/blog');

/* GET home page. */
router.get('/list', function(req, res, next) {
  var author = req.query.author || '';
  var keyword = req.query.keyword || '';
  var listData = getList(author, keyword);
  listData.then(data=>{
  	res.json(data)
  })

});

router.get('/detail', function(req, res, next){
	var id = req.query.id || '';
	var detailData = getDetail(id);
	detailData.then(data=>{
		res.json(data[0])
	})
})

router.post('/new', function(req, res, next){
	var result = newBlog(req.body);

	result.then(data=>{
		res.json(data)
	})
})
module.exports = router;
