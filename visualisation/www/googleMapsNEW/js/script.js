//when window is loaded call init map function
google.maps.event.addDomListener(window, "load" , initmap);

function initmap () {
    var mapOptions = {
        center: {
            lat: -41.286460,
            lng: 174.776236
        },
        zoom: 12
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
