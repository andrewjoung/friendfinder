var express = require('express');
var app = express();

//if process.env.PORT exists that will be the host
//if it doesn't exist then it will be 3000
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.send("Some page");
});

app.listen(PORT, function(){
    console.log('listenting on ' + PORT);
});

