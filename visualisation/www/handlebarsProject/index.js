const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
var app = express();

const router = express.Router();

const home = require("./routes/index"); //making a custom module that will help us route our project
const about = require("./routes/about");

app.engine("handlebars" , exphbs({
    defaultLayout: "main"//look inside of our views folder, layout folder, and find the file called MAIN
}));

app.set("view engine" , "handlebars");

app.use(express.static(path.join(__dirname, "public")))

app.use("/" , home);
app.use("/about" , about) //when /about is called, use the about variable

app.set("port", (process.env.PORT || 3000));
app.listen(app.get("port"), function (){
    console.log("Server is running on port" + app.get("port"));
})
