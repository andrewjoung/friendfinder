var express = require('express');
var app = express();

//if process.env.PORT exists that will be the host
//if it doesn't exist then it will be 3000
var PORT = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send("Hello world");
});

app.listen(PORT, function(){
    console.log('listenting on ' + PORT);
});