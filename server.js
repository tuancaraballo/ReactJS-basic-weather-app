var express = require('express');

var app = express();
const PORT = process.env.PORT ||  3000;

app.use(function(request, response, next) {  //--> openWeatherMap always operates on http and not https, so for this app, I'm going
											// to redirect all https traffic to http
	if(request.headers['x-forwarded-proto'] === 'http'){ //-> if traffic is over http
		next();
	}else{
		response.redirect('http://' + request.hostname + request.url);
	}
});

// folder to expose to web server
app.use(express.static('public'));


app.listen(PORT, function() {
    console.log('Server listening to port '+ PORT);
});