const express = require('express');
const path = require("path");
const Twitter = require("twitter");
const config = require("./config");

const app = express();

var client = new Twitter({
  consumer_key: 'config.TConsumerKey',
  consumer_secret: 'config.TConsumerKeySecret',
  access_token_key: 'config.TAccessToken',
  access_token_secret: 'config.TAccessTokenSecret'
});

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next(); //move on, go to the next thing
});
//get public folder
app.use(express.static("./public"));
//get bootstrap
app.use("/bootstrap" , express.static(path.join(__dirname , "node_modules/bootstrap/dist")));
//get jquery
app.use("/jquery" , express.static(path.join(__dirname , "node_modules/jquery/dist/jquery.min.js")));

app.get("/" , function (req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/search=:term" , function(req, res){
    var term = req.params.term;
    var params = {
        q: term,
        count: 1
    };
    client.get("search/tweets" , params , function (err, tweet, twitterRes){
        if (!error) {
            res.json(tweet);
        }
    });
})

app.set("port" , (process.env.PORT || 5000));
app.listen(app.get("port") , function (){
    console.log("Server is running on port" + app.get("port"));
});
