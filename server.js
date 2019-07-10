//Andrew Joung
//JS file that creates and initalizes our express server 
//Configured so that it is compatible when deployed to heroku

var express = require('express');

var app = express();

//if process.env.PORT exists that will be the host
//if it doesn't exist then it will be 3000
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import the API and HMTL routes from htmlRoutes.js and apiRoutes.js files
var htmlRoutes = require('./app/routing/htmlRoutes')(app);
var apiRoutes = require('./app/routing/apiRoutes')(app);

//Have the server listen to specified port
app.listen(PORT, function(){
    console.log('listenting on ' + PORT);
});

