var friendList = require('../data/friends');

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res) {
        res.send("api page");
    });

    // app.post('/api/friends', function(req, res) {

    // });
};