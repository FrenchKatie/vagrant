//must require each module in each file
const express = require("express");
const router = express.Router(); //expects routes, different urls (best used in a product/ scenario)

router.get("/" , function (req, res){
    res.end("this is coming from the home route");
});

router.get("/home" , function (req, res){
    res.end("this is coming from the home route");
});

module.exports = router;
