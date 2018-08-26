const express = require("express");
const router = express.Router();

router.get("/" , function(req, res){
    res.render("about/index" , {
        title: "About Page",
        layout: "secondary"
    });
});

router.get("/us", function(req, res){
    res.render("about/us" , {
        title: "About Us Page",
        layout: "secondary"
    });
});

router.get("/product", function(req, res){
    res.render("about/product" , {
        title: "About Product Page",
        layout: "secondary"
    });
});

module.exports = router;
