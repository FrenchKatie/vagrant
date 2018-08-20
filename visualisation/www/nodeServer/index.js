const http = require("http");
var server = http.createServer(function(request, response){//create a server that is oging to run on our browser
    var page;
    if(request.url === "/"){ //if request url is home
        page = "home";
    } else if (request.url === "/contact") { //if request url is contact
        page = "contact";
    } else if (request.url === "/about") { //if request url is about
        page = "about";
    } else { //any other url
        page = "404 not found";
    }
    //will send a request to it - put in the variable request
    //we want something to come back - repsonse. our response is what our files
    response.writeHead(200 , {"Content-Type" : "text/html"}); //code 200 which stands for ok, header information
    //what do we want to happen at the end of the response.
    response.end(`
        <html>
            <head>
                <title>Node Server</title>
            </head>
            <body>
                <h1>${page}</h1>
                <p>${request.url}</p>
                <p>${request.method}</p>
            </body>
        </html>
    `);
});
server.listen(5000); //run my server on port 5000
console.log("server is running on port 5000");
