var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        var newFriendScore = newFriend.scores;
        console.log("New friend: "+JSON.stringify(newFriend));
  
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for(var i=0;i<friendsData.length;i++){
        console.log("Hello");
        var diff = 0;

        for(var j=0;j<newFriendScore.length;j++)
        {
            console.log("J: "+j);
            diff = diff+(Math.abs(parseInt(friendsData[i].scores[j])-parseInt(newFriend.scores[j])));
        }
        scoresArray.push(diff);
        console.log("Difference: "+scoresArray);
    }

    for(var i=0;i<scoresArray.length;i++){
        if(scoresArray[i]<=scoresArray[bestMatch]){
            bestMatch = i;
        }
    }

    var bff = friendsData[bestMatch];
    res.json(bff);

    friendsData.push(newFriend);
})
}