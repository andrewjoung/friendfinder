var path = require('path');

//export the necessary HTML routes that link to our home.html and survey.html files
module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};