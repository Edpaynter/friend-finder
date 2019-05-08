var friendsData = require("../data/friends");

module.exports = app => {

    app.get("/api/friends", (req, res) => {
        res.json(friendsData)
    });

    app.post("/api/friends", (req, res) => {
       
        if (friendsData) {
           
            userMatch =  0
            differenceAmount = 25

            currentUser = req.body
            for(var i = 0; i < currentUser.scores.length; i++) {
                currentUser.scores[i] = parseInt(currentUser.scores[i]);
              }

            for(i=0;i < friendsData.length; i++){
                var difference

                for(j=0; j < friendsData[i].scores.length; j++){
                    checkScores = Math.abs(currentUser.scores[j] - friendsData[i].scores[j]);
                    difference += checkScores
                }

                if(difference < differenceAmount) {
                    userMatch = i;
                    differenceAmount = difference;
                  }


            }
            friendsData.push(currentUser);
            res.json(friendsData[userMatch]);


        }
        else {
            console.log("No Dice")
            res.json(false);
        }
    });

};

