// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// MongoDB configuration (Change this URL to your own DB)
var connectionUrl = process.env.MONGODB_URI || "mongodb://localhost/funusersx";
mongoose.connect(connectionUrl);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});