const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
// declare this line below the above line ALWAYS!! To avoid errors.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
// All the static files are loaded via this.
app.use(express.static("public"));

//creating arrays will const will not give error until you are not assigning it values. Pushing values inside array is acceptable but assigning values is not.
const items = [];
const workItems = [];

app.get("/", function(req,res){

    const day = date.getDate();

    // the object property name must match with the variable name inside ejs file and property value should have the variable name of value to be displayed there.
    res.render("list", {listTitle: day, newListItem: items});

})

app.post("/", function(req,res){
    const item = req.body.newItem;


    //list is the value given to name attribute of button and work is the value given to the value attribute
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    //we cannot directly send the data so we redirect the data to get request and send the data from there.
    res.redirect("/");
})

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItem: workItems});
})

app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server is up and running");
})