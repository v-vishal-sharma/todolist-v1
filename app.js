const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", function(req,res){

    let a = 1;
    if(a===1){
        res.send("a");
    }else{
        res.send("b");
    }

})

app.listen(3000, function(){
    console.log("Server is up and running");
})