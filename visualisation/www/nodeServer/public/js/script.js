console.log("Javascript is linked");

//getting data from AJAX call
$.ajax({
    url: "http://192.168.33.10:5000/allProducts",
    dataType: "json",
    type: "GET",
    success: function (products) {
        console.log(products);
    },
    error: function (error) {
        console.log("ERROR!");
        console.log(error);
    }
})
