var express = require("express");
var bodyParser = require("body-parser");
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;



// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(data);
// app.use(routes);



app.listen(PORT, function() {
    
    console.log("Server listening on: http://localhost:" + PORT);
  });
  