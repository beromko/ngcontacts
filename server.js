var express = require('express'),
	api = require("./api"),
	app = express(),
	methodOverride = require("method-override");
app
	/*.use(methodOverride(function(req, res){
	  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
	    // look in urlencoded POST bodies and delete it
	    var method = req.body._method
	    delete req.body._method
	    return method
	  }
	}))*/
	.use(express.static('./public'))
	.use('/api',api)
	.get('*', function(request,response){
		response.sendFile('public/index.html',{ root: __dirname })
	})
	.listen(3000);