// var myUrl = "https://slack.com/api/users.list?token=xoxp-296524535633-314540737175-411022088583-6a734ddc3b0ddc8c061cd996877e809f&pretty=1";

//gets all members in workspace
$.ajax({
    url: "https://slack.com/api/users.list?token=xoxp-296524535633-314540737175-411022088583-6a734ddc3b0ddc8c061cd996877e809f&pretty=1",
    dataType: "json",
    type: "GET",
    success: function(data) {
        // console.log(data);

        var members = data.members;
        for (var i = 0; i < members.length; i++) {
            var profile = members[i].profile;
            var name = profile.real_name;
            var email = profile.email;
            var image = profile.image_72;
            $("#main").append("<img src='" + image + "'>" + "<br>" + name + "<br>" + email + "<br><br>")
        }
    },
    error: function (error) {
        console.log("ERROR");
        console.log(error);
    }
})

$("#submit").click(function () {
    var userInput = document.getElementById("theInput").value;
    $.ajax({
        url: "https://slack.com/api/search.all?token=xoxp-296524535633-314540737175-411022088583-6a734ddc3b0ddc8c061cd996877e809f&query=" + userInput + "&pretty=1",
        dataType: "json",
        type: "GET",
        success: function(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $("#box2").append(data[i]);
                if () {

                } else if () {
                    
                }
            }
        },
        error: function (error) {
            console.log("ERROR");
            console.log(error);
        }
    })
})
