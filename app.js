//1: ran npm init

//This adds the express.js application and creates an app calling express. Port is 3000
var express = require("express");
var app = express();
var port = 3000;

//9: We need to convert userinput to JSON data. We now need to add Middleware to parse
//this data. Use 'npm install body-parser --save' to do so
//The code below adds the parser and decodes to JSON
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//5: MongoDB install run. Port default for Mongoose is 27017. The Follow Code
//Connected to the database.
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/howtoaddtodatabase101");
//6: We need to create a schema that tells the database for the format of what we are saving.
var nameSchema = new mongoose.Schema({
	firstName: String,
	lastNameName: String,
});
//7: We create a model for the data.
var User = mongoose.model("User", nameSchema);
//8: We need to create an endpoint for the server to listen to and send to database.
// We will add a post (CRUD) endpoint to perform the Create operation
//app.get will listen to requests from the browser and returns 'Hello World'
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
	var myData = new User(req.body);
	myData
		.save()
		.then((item) => {
			res.send("item saved to database");
		})
		.catch((err) => {
			res.status(400).send("unable to save to database");
		});
});

app.listen(port, () => {
	console.log("Server listening on port " + port);
});
//2: Ran npm install express --save
//3: node app.js returns a hello world text on localhost:3000. Next will touch index.html file to add
//a user input box
