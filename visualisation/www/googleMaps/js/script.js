google.maps.event.addDomListener(window , "load" , initmap);
var map;

function initmap () {

    var mapOptions = {
        center:{
            lat: -41.279214,
            lng: 174.780340
        },
        zoom: 6
        //THIS IS ALL MAP STYLING - TURNED OFF
        // ,
        // disableDefaultUI: true,
        // fullscreenControl: true,
        // fullscreenControlOptions:{
        //     position: google.maps.ControlPosition.LEFT_TOP
        // },
        // zoomControl: true,
        // zoomControlOptions: {
        //    position: google.maps.ControlPosition.LEFT_TOP
        // },
        // mapTypeControl: true,
        // mapTypeControlOptions: {
        //    position: google.maps.ControlPosition.LEFT_TOP
        // },
        // streetViewControl: true,
        // streetViewControlOptions: {
        //    position: google.maps.ControlPosition.LEFT_TOP
        // },
        // styles: [
        //     {
        //         featureType: "water",
        //         stylers: [
        //             {
        //                 color: "#F3F3F3"
        //             }
        //         ]
        //     },
        //     {
        //         featureType: "road",
        //         stylers: [
        //             {
        //                 color: "#528224"
        //             }
        //         ]
        //     },
        //     {
        //         featureType: "landscape",
        //         stylers: [
        //             {
        //                 color: "#77BA22"
        //             }
        //         ]
        //     },
        //     {
        //         featureType: "administrative",
        //         elementType: "labels.text.fill",
        //         stylers: [
        //             {
        //                 color: "#1682AB"
        //             }
        //         ]
        //     },
        //     {
        //         featureType: "poi",
        //         stylers: [
        //             {
        //                 color: "#A3CB38"
        //             }
        //         ]
        //     },
        //     {
        //         featureType: "transit",
        //         stylers: [
        //             {
        //                 color: "#1682AB"
        //             }
        //         ]
        //     },
        //
        //
        // ]
    }

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    addAllMarkers();
}

function addAllMarkers () {
    $.ajax({
        url: "data/markers.json",
        type: "GET",
        dataType: "json",
        success: function (markers) {
            var myLorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            console.log(markers);
            for (var i = 0; i < markers.length; i++) {
                $("#places").append("<div class='place'><h3 class='placeName'>" + markers[i].placeName + "</h3><p class='placeDescription'>" + myLorem + "</p></div>");
                var image = "images/star.png"
                var marker = new google.maps.Marker({
                    position:{
                        lat: markers[i].lat,
                        lng: markers[i].lng
                    },
                    title: markers[i].placeName,
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    icon: image
                })


            }
        },
        error: function (error) {
            console.log("ERROR! Something went wrong! Can't get the markers.");
        }
    })
}
