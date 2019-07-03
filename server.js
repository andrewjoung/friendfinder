var express = require('express');
var app = express();

var PORT = 3000;

app.get('/', function(request, response) {
    response.send("Hello world");
});

app.listen(PORT, function(){
    console.log('listenting on ' + PORT);
});