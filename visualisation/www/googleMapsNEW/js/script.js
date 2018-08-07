//when window is loaded call init map function
google.maps.event.addDomListener(window, "load" , initmap);

var map;
var infoBox;

function initmap () {

    var mapOptions = {
        center: {
            lat: -41.286460,
            lng: 174.776236
        },
        zoom: 12
    }
    //attatches map to the #map div and calls map options
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    addallMarkers();
}


function addallMarkers() {
    $.ajax({
        url: "data/markers.json",
        data: "GET",
        dataType: "json",
        success: function(markers){
            console.log(markers);
            for (var i = 0; i < markers.length; i++) {

                $("#places").append("<div class='place'><h3>" + markers[i].placeName + "</h3><h5 class='placeType type" + markers[i].type + "'>" + markers[i].type + "</h5><p class='placeDescription'>" + markers[i].placeDescription + "</p></div>")

                var marker = new google.maps.Marker({
                    position: {
                        lat: markers[i].lat,
                        lng: markers[i].lng
                    },
                    map:map,
                    markerId: markers[i].id,
                    title: markers[i].placeName

                }) //end of marker
                markerClickEvent(marker)
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
