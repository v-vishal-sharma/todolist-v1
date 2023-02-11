//not adding parantheses because we don't want to call the function ourselves when we load the module and leave it upto app.js to call the function whenever required.

//instead of writing module.exports, we can simply write exports and it will do the same thing
exports.getDate = function (){
    const today = new Date();

    const options = {
        weekday: "long",
        day : "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options); 

}

exports.getYear = function (){
    const today = new Date();

    return today.getFullYear();
}

