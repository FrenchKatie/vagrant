console.log("JS has been loaded");

$.ajax({
    url: "http://192.168.33.10:5000/allProducts",
    dataType: "json",
    type: "GET",
    success: function(products){
        console.log(products);
    },
    error: function (error) {
        console.log("ERROR!");
        console.log(errorrs);
    }
})
