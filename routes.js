var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var Item = require('./models/item.model');

router.post('/scraper', function(req,res){
	var url = req.body.url;
	if (url && url.toLowerCase().indexOf('pinterest.com') > -1) {
		console.log("This is a valid Pinterest URL");
		request(url,function(error, resp, body){
			var pin = {};
			var $ = cheerio.load(body);

			var $img = $("meta[property = 'og:image']").attr('content');

			var $desc = $("meta[property = 'description']").attr('content');

			pin = {
				img : $img,
				description: $desc,
				url: url
			};

			console.log('Scraped', pin);
		});
	}
	else {
		console.log("This is not a valid Pinterest URL");
	}
});

module.exports = router;
