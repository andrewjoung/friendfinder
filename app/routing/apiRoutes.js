//import the list of friends from the friends.js file
var friendList = require('../data/friends');

module.exports = function(app) {
    
    //displays the list of friends in JSON form when user is at the correct api path
    app.get('/api/friends', function(req, res) {
        res.json(friendList);
    });

    //our post method that will post the users information to the api
    //and also checks and returns the most compatible friend in the friendList array
    app.post('/api/friends', function(req, res) {

        var newFriend = req.body; //all the user input in the form of an object

        console.log(newFriend);

        var userScore = newFriend.scores; //the scores from the user
        var smallestDiff = 10000; //initalize the smallest difference we check against
        var smallestDiffIndex = -1; //initalize the index 

        //loop through the friends list
        for(var i = 0; i < friendList.length; i++) {
            var totalDiff = 0;
            var friendComparison = friendList[i].scores; //the scores we are going to compare too
            //loop through the array of scores
            for(var j = 0; j < friendComparison.length; j++) {
                totalDiff += (Math.abs(userScore[j] - friendComparison[j]))
            }
            console.log(totalDiff);
            //if the totalDiff is less than the current smallest diff
            if(totalDiff < smallestDiff) {
                smallestDiff = totalDiff; //set the smallest difference to be the total difference
                smallestDiffIndex = i; //save the index at which the new smallest difference occured 
            }
        }
        console.log(friendList[smallestDiffIndex]);
        friendList.push(newFriend);
        //we send the most compatible friend with the smallest difference in score to the client side
        res.json(friendList[smallestDiffIndex]); 

    });
};