var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var futureCastInfo=$("button").click()

$("#Question1").val().trim();
$("#Question2").val().trim();
$("#Question3").val().trim();
$("#Question4").val().trim();
$("#Question5").val().trim();
$("#Question6").val().trim();
$("#Question7").val().trim();
$("#Question8").val().trim();
$("#Question9").val().trim();
$("#Question10").val().trim();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));



app.listen(PORT, function() {
    
    console.log("Server listening on: http://localhost:" + PORT);
  });
  