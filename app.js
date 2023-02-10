const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// declare this line below the above line ALWAYS!! To avoid errors.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

let items = [];

app.get("/", function(req,res){

    let today = new Date();

    let options = {
        weekday: "long",
        day : "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options); 

    // the object property name must match with the variable name inside ejs file and property value should have the variable name of value to be displayed there.
    res.render("list", {kindOfDay: day, newListItem: items});

})

app.post("/", function(req,res){
    let item = req.body.newItem;
    items.push(item);
    console.log(item);

    //we cannot directly send the data so we redirect the data to get request and send the data from there.
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server is up and running");
})