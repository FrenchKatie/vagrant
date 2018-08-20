const http = require("http");
var server = http.createServer(function(request, response){//create a server that is oging to run on our browser
    //will send a request to it - put in the variable request
    //we want something to come back - repsonse. our response is what our files
    response.writeHead(200 , {"Content-Type" : "text/plain"}); //code 200 which stands for ok, header information
    response.end("This is running from the server, changed"); //what do we want to happen at the end of the response.
});
//
server.listen(5000); //run my server on port 5000
console.log("server is running on port 5000")
