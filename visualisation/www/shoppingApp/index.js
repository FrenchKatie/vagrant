//linking in node js modules
const http = require("http"); //to set up the server
const fs = require("fs"); //for file system - pages etc
const path = require("path"); //for joining paths
const qs = require("querystring");
//linking in our json data file
const data = require("./data/products");

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


    //linking CSS path:
    } else if (request.url.match(/.css$/)){ //regular expression - find me a match if this url ends with .css
        var cssPath = path.join(__dirname , "public" , request.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(response);


    //linking JS path:
    } else if (request.url.match(/.js$/)){
        var jsPath = path.join(__dirname , "public" , request.url);
        var jsFileStream = fs.createReadStream(jsPath , "UTF-8");
        response.writeHead(200 , {"Content-Type":"text/js"});
        jsFileStream.pipe(response);


    //getting data
    } else if (request.url === "/allProducts"){
        response.writeHead(200, {"Content-Type":"text/json"});
        response.end(JSON.stringify(data));


    //geting all products that have instock = true
    } else if (request.url === "/inStock") {
        inStock(response);
    } else {
        page = "404 NOT FOUND";
    }



}); //END OF SERVER

server.listen(5000); //run my server on port 5000
console.log("server is running on port 5000")


function inStock(response){
    var stock = data.filter(function(item){
        return item.inStock === true;
    });
    response.end(JSON.stringify(stock));
}
