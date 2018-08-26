const express = require("express");

var app = express();

const router = express.Router();

const home = require("./routes/index"); //making a custom module that will help us route our project
const about = require("./routes/about");

// app.get("/" , (req, res) => {
//     res.end("server is running");
// })

app.use("/" , home);
app.use("/about" , about) //when /about is called, use the about variable

app.set("port", (process.env.PORT || 3000));
app.listen(app.get("port"), function (){
    console.log("Server is running on port" + app.get("port"));
})
