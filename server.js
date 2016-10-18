let http = require ('http');
const arturserver = http.createServer(function(req, res) {
	switch(req.url){
		case '/firstpage' :
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Yerevan");
			break;
		case '/secondpage':
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Armenia");
			break;
		case '/thirdpage' :
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Republic Square");
			break;
		case '/fourthpage' :
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Tatev Monastery");
			break;
		case '/fifthpage' :
			res.writeHead('200', {'Content-Type' : 'text/plain'});
			res.end("Jermuk");
			break;
			default: res.end('404');
	}
})
arturserver.listen(9999);
