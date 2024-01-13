//1: ran npm init

//This adds the express.js application and creates an app calling express. Port is 3000

var express = require("express");
var app = express();
var port = 3000;

//app.get will listen to requests from the browser and returns 'Hello World'
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log("Server listening on port " + port);
});
//2: Ran npm install express --save
