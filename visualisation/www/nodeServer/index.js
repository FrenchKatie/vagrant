//linking in node js modules
const http = require("http");
const fs = require("fs");
const path = require("path");

//creates server
var server = http.createServer(function(request, response){//create a server that is oging to run on our browser
    console.log(`${request.method} request for ${request.url}`);
    var page;

    //getting home page content:
    if(request.url === "/" || request.url === "/home" ||request.url === "/index"){ //if request url is home
        page = "home";
        fs.readFile("./public/index.html" , "UTF-8" , function(error, contents){
            if(error){
                console.log("ERROR! Something went wrong!");
            } else{
                response.writeHead(200 , {"Content-Type":"text/html"});
                response.end(contents);
            }
        })

    //getting CSS path:
    } else if (request.url.match(/.css$/)){ //regular expression - find me a match if this url ends with .css
        var cssPath = path.join(__dirname , "public" , request.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(response);


    //getting JS path:
    } else if (request.url.match(/.js$/)) {
        var jsPath = path.join(__dirname , "public" , request.url);
        var jsFileStream = fs.createReadStream(jsPath , "UTF-8");
        response.writeHead(200, {"Content-Type":"text/js"});
        jsFileStream.pipe(response);


    //getting contact page content:
    } else if (request.url === "/contact") { //if request url is contact
        page = "contact";
        fs.readFile("./public/contact.html" , "UTF-8" , function(error , contents){
            if(error){
                console.log("ERROR! Something went wrong!");
            } else {
                response.writeHead(200 , {"Content-Type":"text.html"});
                response.end(contents);
            }
        })

    //getting about page content:
    } else if (request.url === "/about") { //if request url is about
        page = "about";
        fs.readFile("./public/about.html" , "UTF-8" , function(error , contents){
            if(error){
                console.log("ERROR! Something went wrong");
            } else {
                response.writeHead(200 , {"Content-Type":"text.html"});
                response.end(contents);
            }
        })

    //getting profile page content
    } else if (request.url === "/profile"){ //if reqrest url is profile
        page = "profile";
        fs.readFile("./public/profile.html" , "UTF-8" , function(error , contents){
            if(error){
                console.log("ERROR! Something went wrong!");
            } else {
                response.writeHead(200, {"Content-Type":"text.html"});
                response.end(contents);
            }
        })

    }else { //any other url
        page = "404 not found";
    }
});
server.listen(5000); //run my server on port 5000
console.log("server is running on port 5000");
