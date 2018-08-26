//must require each module in each file
const express = require("express");
const router = express.Router(); //expects routes, different urls (best used in a product/ scenario)

router.get("/" , function (req, res){
    res.render("home/index" , {
        title: "Home Page"
    }); //what file do u want it to render
});

module.exports = router;
