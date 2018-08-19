//when window is loaded call init map function
google.maps.event.addDomListener(window, "load" , initmap);

//map variables
var map;
var infoBox;
var marker;
var allMarkers = [];
//route variables
var directionDisplay;
var directionService = new google.maps.DirectionsService();
var home = {
    lat: -41.279222,
    lng: 174.780389
}
//place variables
var service;


function initmap () {
    directionDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: home,
        mapTypeId: "roadmap",
        zoom: 11
    }
    //attatches map to the #map div and calls map options
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    addallMarkers();
    //sets the route on the map
    directionDisplay.setMap(map);
    // calcRoute();
}


function addallMarkers() {
    $.ajax({
        url: "data/markers.json",
        data: "GET",
        dataType: "json",
        success: function(markers){
            // console.log(markers);
            for (var i = 0; i < markers.length; i++) {

                $("#places").append("<div data-id='"+markers[i].id+"' class='place'><h3>" + markers[i].placeName + "</h3><h5 class='placeType type" + markers[i].type + "'>" + markers[i].type + "</h5><p class='placeDescription'>" + markers[i].placeDescription + "</p></div>")
                // console.dir(markers[i]);
                marker = new google.maps.Marker({
                    position: {
                        lat: markers[i].lat,
                        lng: markers[i].lng
                    },
                    map:map,
                    markerId: markers[i].id,
                    title: markers[i].placeName
                }) //end of marker

                markerClickEvent(marker);
                allMarkers.push(marker);
            } //end of for loop
        },
        error: function(error){
            console.log("ERROR! Something went wrong!");
        }
    })
}

function markerClickEvent(marker){
    //closes the previously opened infoBox - will only work if info box is a global variable
    if(infoBox){
        infoBox.close();
    }
    infoBox = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, "click" , function(){
        infoBox.setContent("<div><strong>" + marker.title + "</strong></div>");
        infoBox.open(map, marker)
    });

}
//function to pan to marker when place is clicked
$(document).on('click', '.place', function(){
    //id of place clicked by user
    var id = this.dataset.id;
    //loop through all markers to find the marker with a matching id
    for (var i = 0; i < allMarkers.length; i++) {
        if (allMarkers[i].markerId == id) {
            //move map to the correct marker and zoom in
            map.panTo(allMarkers[i].position);
            map.setZoom(14);
            calcRoute (allMarkers[i]);
            findPlaceInfo(allMarkers[i].title);
        }// end of if statement
    } //end of for loop
});


function calcRoute (data){
    //gets starting position from the variable home which holds the lat and long of the railway station
    start = new google.maps.LatLng(home);
    //gets end position from the allmarkers[i].position.
    //If you were to log "allmarkers[i].position" it would not spit out the LatLng at you though it is able to work like this:
    end = data.position;

    //requests the route - start, end and type of travel - drive/walk?
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    }

    //draws the route
    directionService.route(request , function(response, status){
        if(status == google.maps.DirectionsStatus.OK){
            directionDisplay.setDirections(response);
            var route = response.routes[0];
        }
    })
}

function findPlaceInfo(placeName){
    console.log(placeName);
    var request = {
        query: placeName + " Wellington New Zealand", //what we're searching for? Esseentially searching through google
        fields: ["id" , "name" , "photos" , "formatted_address" , "rating" , "opening_hours"]
    };
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request , getPlaces);
}

function getPlaces(results , status){
    console.log(status);
    if (status == "OK") {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            var photos = results[i].photos;
            console.log(photos[0].getUrl({
                "maxWidth": 300,
                "maxHeight": 300
            }));
        } //end of for loop
    } else{
        console.log("something went wrong with getting the places");
    } //end of else
}
