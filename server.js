var express = require('express'),
	api = require("./api"),
	app = express();
app
	.use(express.static('./public'))
	.use('/api',api)
	.get('*', function(request,response){
		response.sendFile('public/index.html',{ root: __dirname })
	})
	.listen(3000);