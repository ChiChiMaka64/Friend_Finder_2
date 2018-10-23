var express = require("express");
var bodyParser = require("body-parser");
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");
require("./app/data/friends");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.get("/all")

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post('/api/friends', function (req, res) {
  // grabs the user's input from the survey
  let user = req.body;

  // takes the user's scores from each question
  let userScore = user.scores;

  // variables used to hold match's name and image
  let matchName = '';
  let matchPic = '';

  // setting initial value high for the comparison
  let friendDif = 1000000;

  // for loop that goes through all friends on friends.js
  for (let i = 0; i < friends.length; i++) {

      // sets initial difference to 0
      let difference = 0;

      // for loop that compares the difference between the user and friends list scores
      for (let j = 0; j < userScore.length; j++) {
          difference += Math.abs(friends[i].scores[j] - userScore[j])
      }

      // whichever friend has the lowest difference will become the match
      if (difference < friendDif) {

          friendDif = difference;
          matchName = friends[i].name;
          matchPic = friends[i].photo;
      }
  }

  // pushes user's input to the friendslist
  friends.push(user);

  // returns the appropriate data for the modal on the survey 
  res.json({ status: 'OK', matchName: matchName, matchPic: matchPic });
  
})

app.listen(PORT, function() {
    
    console.log("Server listening on: http://localhost:" + PORT);
  });
  