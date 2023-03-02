//jshint esversion:6
   const express = require("express");
   const bodyParser = require("body-parser");
   const date = require(__dirname + "/date.js");

 
   const app = express();
   let items = ["Eat More", "Song More"];
   let workItems = ["Wajah tum ho", "Haanji"]; 

   // setting the ejs
  app.set('view engine', 'ejs');

// adding the body parser
       app.use(bodyParser.urlencoded({extended:true}));


// access the public folder

       app.use(express.static("public"));

// adding the get request Homepage router
       app.get("/", function(req, res){
 
       let day = date.getDay(); 

       res.render("list", {listTitle: day, newListItem: items});

});

// creating the post request
           
           app.post("/", function(req, res){
           console.log(req.body);
           let item = req.body.newItem;
           if (req.body.list==="Work List") {
             workItems.push(item);
             res.redirect("/work");
           }
           
           else{
            items.push(item);
             res.redirect("/");
           }
           
           
           });
           
// creating new route
app.get("/work", function(req, res){
  res.render("list", {listTitle:"Work List", newListItem: workItems});
});

// creating new route
app.get("/about", function(req, res){
  res.render("about");
});


// creating the post request

app.post("/work", function(req, res){
 let item = req.body.newItem;

  workItems.push(item);
    res.redirect("/work");
  });
  

//porting the app in localhost:3100 in browser

app.listen(3200, function(){
  console.log("Server started on port 3200.");
});
