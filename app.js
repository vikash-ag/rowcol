// include the expree module in my app
var express = require('express');
var app = express();

//process environment port for default default port number
var port = process.env.PORT || 8080;

// to use all the static files
//app.use(express.static(__dirname + '/public'));

//app.set('views' , __dirname + '/views');
//app.set('view engine' , 'ejs');

// set routes
app.get('/' , function(req , res){
	res.sendFile(__dirname + '/index.html');
});


app.listen(port , function(){
	console.log('Your app started running @8080 by default...');
})