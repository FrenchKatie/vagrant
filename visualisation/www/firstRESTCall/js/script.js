
var key;

$.ajax({
    url: "config.json",
    dataType: "json",
    type: "GET",
    success: function (data) {
        key = data[0].API_KEY;
        getData(1 , 100);
    },
    error: function (error) {
        console.log("ERROR");
        console.log(error);
    }
})

function getData (minAge, maxAge , country) {
    $.ajax({
        url:"https://my.api.mockaroo.com/peopledata.json?min_age=" + minAge + "&max_age=" + maxAge + "&country=" + country + "&key=" + key, //adding three parameters = "min_age", "maxAge" and "key"
        dataType: "json",
        type: "GET",
        success: function(mockarooData) {
            console.log(mockarooData);
        },
        error: function (error) {
            console.log("ERROR");
            console.log(error);
        }
    })
}

$("#ageForm").submit(function(){
    event.preventDefault();
    var minAge = $("input[name='minAge']").val();
    var maxAge = $("input[name='maxAge']").val();
    // var gender = $("#gender option:selected").val();

    var country = [];

    $('input:checkbox[name=country]').each(function(){
        // if($(this).is(':checked'))alert($(this).val());
        if($(this).is(":checked")){
            country.push($(this).val());
        }
    });
    // console.log(countries);



    getData(minAge , maxAge , country);
})
