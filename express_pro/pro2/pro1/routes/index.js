var express = require('express');
var router = express.Router();

router.get('/products',function(req,res){
	var st = '<ul>';
	var dataFile = req.app.get('dataFile');
	for(i=0;i<dataFile.length;i++)
	{
		
		st += '<li>'+dataFile[i].title+'</li>';
		
	}
	st += '</ul>';
	res.send(st);
	res.send('Hello world')
	
});

router.get('/products/:productid',function(req,res){
	var dataFile = req.app.get('dataFile');
	var productid = req.params.productid;
	var product = dataFile[1];
	
	//res.send(product);
	res.send('Hello world' + req.session.lastPage)
	
});

router.get('/',function(req,res){
	req.session.lastPage = 'Mohan kumar';
	res.send(`
	<h1>Abc Programming</h1>
	<p>This is all about the flicker</p>
	<p>
	<img src="/public/images/a1.jpg" width=200 height=200>
	</p>
	`);
	res.send('Hello world')
	
});

module.exports = router;