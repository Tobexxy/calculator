// npm install express
//npm install body-parser for parsing properties and information about the web app
// creating a local host server by naming some variables first
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000



// for getting info from html posted
app.use(bodyParser.urlencoded({extended: true}));


//request and response can also be named shortly as "req & res"
//"res.sendFile" is used to send a request to what ever file path that has the documentation you want to display. USED FOR DIRECTING A FILE 
//"__dir" is used as a locator instead as a filepath to display the file directory. CHECK PATH.JS
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
  var results =  num1 * num2;
    res.send("your answer is " + results);
})


//To set up a new route the add the "/ - which specifies the port" followed by the route name you want to give it
app.get("/about", function(req, res){
    res.send("This is a web application calculator. Stay tuned to find out more about this project!!!")
});

// Install "nodemon" that way you can keep making changes to your server without restarting it every time

app.listen(port, function(){
    console.log(`server started on port ${port}`)
});