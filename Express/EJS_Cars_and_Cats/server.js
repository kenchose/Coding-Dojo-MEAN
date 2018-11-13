// EJS Cars and Cats
// Repeat the previous assignment, but this time use EJS and include a views directory. 
// By telling Express where to find your views directory and that you are using EJS, you will be able to write the following routes in your server:
// Have '/cars' show your pictures of cars.
// Have '/cats' show your pictures of cats.
// Have 'cars/new' show a form to create a new car. The form does not have to do anything yet.
// Keep your index.html file in the static directory. It should render even when your server does not explicitly handle the '/' route

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/Views");
app.set("view engine", "ejs");

app.get("/cars", function(request, response){
    response.render("cars");
})
app.get("/cats", function(request, response){
    response.render("cats");
})
app.get("/form", function(request, response){
    response.render("form");
})

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})