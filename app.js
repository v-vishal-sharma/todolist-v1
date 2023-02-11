const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// declare this line below the above line ALWAYS!! To avoid errors.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
// All the static files are loaded via this.
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", function(req,res){

    let today = new Date();
    let year = today.getFullYear();

    let options = {
        weekday: "long",
        day : "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options); 

    // the object property name must match with the variable name inside ejs file and property value should have the variable name of value to be displayed there.
    res.render("list", {listTitle: day, newListItem: items});

})

app.post("/", function(req,res){
    let item = req.body.newItem;

    console.log(req.body);

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