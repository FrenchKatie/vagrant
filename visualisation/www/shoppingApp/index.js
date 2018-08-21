//linking in node js modules
const http = require("http"); //to set up the server
const fs = require("fs"); //for file system - pages etc
const path = require("path"); //for joining paths

var page;
//create server
var server = http.createServer(function(request, response){
    console.log(`${request.method} request for ${request.url}`);

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
        });
    } else if (request.url.match(/.css$/)){ //regular expression - find me a match if this url ends with .css
        var cssPath = path.join(__dirname , "public" , request.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(response);

    }
});

server.listen(5000); //run my server on port 5000
console.log("server is running on port 5000")
