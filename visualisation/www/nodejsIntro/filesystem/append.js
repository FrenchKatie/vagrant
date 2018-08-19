const fs = require("fs");

var content = "This is the content that we want added to the file\n";

fs.appendFile("./files/append.txt" , content , function(err){
    if(err){
        console.log("error");
        console.log(err);
    } else {
        console.log("content has been added");
    }
})
