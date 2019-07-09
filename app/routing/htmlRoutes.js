module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.send("Default page");
    });

    app.get('/survey', function(req, res) {
        res.send("Survey page");
    });
    
};