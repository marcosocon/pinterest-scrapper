var express = require('express');
var router = express.Router();
var Item = require('./models/item.model');

router.get('/test', function(req,res){
	res.send('hello from /api/test!');
});

module.exports = router;
