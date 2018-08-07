google.maps.event.addDomListener(window , "load" , initmap);
var map;
var infoBox;
var latLng;
var allMarkers = [];

function initmap () {

    var mapOptions = {
        center:{
            lat: -41.279214,
            lng: 172.780340
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
                $("#places").append("<div class='place' id='dataId" + markers[i].id + "'><h3 class='placeName'>" + markers[i].placeName + "</h3><p class='placeDescription'>" + myLorem + "</p></div>");
                var image = "images/star.png";
                marker = new google.maps.Marker({
                    position:{
                        lat: markers[i].lat,
                        lng: markers[i].lng
                    },
                    markerId: markers[i].id,
                    title: markers[i].placeName,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: image
                })
                markerClickEvent(marker);
                allMarkers.push(marker);
            } //end of for loop

            // moveMap(marker);


        },
        error: function (error) {
            console.log("ERROR! Something went wrong! Can't get the markers.");
        }
    })
}

function markerClickEvent(marker){
    //if there is already an info box open - close it before opening the new one
    if(infoBox){
        infoBox.close();
    }
    //defining the info window as infobox
    infoBox = new google.maps.InfoWindow();
    //when a marker is clicked this will happen
    google.maps.event.addListener(marker, "click" , function(){
        //setting the content that will be in the information window
        infoBox.setContent("<div><strong>" + marker.title + "</strong></div>");
        //Where do we want it to apear in the window? The map.
        //Where do we want it to apear in the map? On the marker
        allMarkers.push(marker);
        infoBox.open(map, marker);
        // moveMap(marker)
    });
}


$(document).on('click' , '.place' , function(){
    var id = $(this).data("id");
    for (var i = 0; i < allMarkers.length; i++) {
        if (allMarkers[i].id == id) {

        }
    }
})

// function moveMap(marker){

    // if( == marker.placeName){
    //     console.log("worked");
    //     console.log(marker);
    // }
    // console.log("clicked");
    // console.log($(this).title);
//     latLng = new google.maps.LatLng(-41.279214, 178.780340);
//     map.panTo(latLng);
//     map.setZoom(10);
// }
