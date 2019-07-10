var friendList = require('../data/friends');

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function(req, res) {

        var newFriend = req.body;

        console.log(newFriend);

        var userScore = newFriend.scores;
        var smallestDiff = 10000;
        var smallestDiffIndex = -1;

        for(var i = 0; i < friendList.length; i++) {
            var totalDiff = 0;
            var friendComparison = friendList[i].scores;
            for(var j = 0; j < friendComparison.length; j++) {
                totalDiff += (Math.abs(userScore[j] - friendComparison[j]))
            }
            console.log(totalDiff);
            if(totalDiff < smallestDiff) {
                smallestDiff = totalDiff;
                smallestDiffIndex = i;
            }
        }
        console.log(friendList[smallestDiffIndex]);
        friendList.push(newFriend);

        res.json(friendList[smallestDiffIndex]);

    });
};