//linking in node js modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
//linking in our json data file
const data = require("./data/products");


//creates server
var server = http.createServer(function(request, response){//create a server that is oging to run on our browser
    console.log(`${request.method} request for ${request.url}`);
    //the reason we are splitting these are we could have two submits that do different things but have the same name - Would use this in a CMS
    if(request.method === "GET"){

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

        //getting CSS path:
        } else if (request.url.match(/.css$/)){ //regular expression - find me a match if this url ends with .css
            var cssPath = path.join(__dirname , "public" , request.url);
            var fileStream = fs.createReadStream(cssPath, "UTF-8");
            response.writeHead(200, {"Content-Type":"text/css"});
            fileStream.pipe(response);


        //getting JS path:
        } else if (request.url.match(/.js$/)) { //regular expression - find me a match if this url ends with .js
            var jsPath = path.join(__dirname , "public" , request.url);
            var jsFileStream = fs.createReadStream(jsPath , "UTF-8");
            response.writeHead(200, {"Content-Type":"text/js"});
            jsFileStream.pipe(response);

        //getting JPEG path:
        } else if(request.url.match(/.jpg$/)){

            var imagePath = path.join(__dirname, 'public', request.url);
            var imageStream = fs.createReadStream(imagePath);
            response.writeHead(200, {'Content-Type':'image/jpeg'});
            imageStream.pipe(response);

        //getting PNG path:
        } else if(request.url.match(/.png/)){
            var imagePath = path.join(__dirname, 'public', request.url);
            var imageStream = fs.createReadStream(imagePath);
            response.writeHead(200, {'Content-Type':'image/png'});
            imageStream.pipe(response);

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

        //getting product page content
        } else if (request.url === "/product"){ //if request url is product
            page = "product";
            fs.readFile("./public/product.html" , "UTF-8" , function(error , contents){
                if(error){
                    console.log("ERROR! Something went wrong!");
                } else {
                    response.writeHead(200, {"Content-Type":"text.html"});
                    response.end(contents);
                }
            })

        //getting data:
        }else if(request.url === "/allProducts"){
            response.writeHead(200, {"Content-Type":"Text/json"})
            response.end(JSON.stringify(data));

        //get all the products that have instock = true
        } else if (request.url === "/inStock") {
            inStock(response);


        }else { //any other url
            page = "404 not found";
        }


    //END OF GET
    } else if (request.method === "POST") {
        if (request.url === "/formSubmit") {
            console.log(request);
            response.writeHead(200, {"Content-Type":"text/plain"});
            response.end("The form was submitted");
            var body = '';
            //when the request has data
            request.on("data", function (data){
                //put the chunk of data we got into body
                body += data;

            });
            //if you want to pass a function through the END then you must do request.on(end)
            request.on("end" , function(){
                var formData = qs.parse(body);
                console.log(formData);
            })
        }
    }


});

server.listen(5000); //run my server on port 5000
console.log("server is running on port 5000");



function inStock(response) {
    //go through the data
    //filter the data
    //spit out the correct data into an array
    var stock = data.filter(function(item){
        //going through the json file, returning all items == true and turn into array
        return item.inStock === true;

    });

    response.end(JSON.stringify(stock));
}
