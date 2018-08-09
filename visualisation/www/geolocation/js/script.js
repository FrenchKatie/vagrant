var directionDisplay;
var directionService = new google.maps.DirectionsService();
var map;
function initialize(){
    directionDisplay = new google.maps.DirectionsRenderer();
    var america = google.maps.LatLng(37.090240, -95.712891);
    var myOptions = {
        zoom: 6,
        mapTypeId: "roadmap",
        center: america
    }
    map = new google.maps.Map(document.getElementById("mapCanvas") , myOptions);
    directionDisplay.setMap(map);
    calcRoute();
}

function calcRoute(){
    var waypts = [];
    stop = new google.maps.LatLng(37.865101 , -119.538329);
    waypts.push({
        location:stop,
        stopover:true
    });
    start = new google.maps.LatLng(34.052234, -118.243685);
    end = new google.maps.LatLng(41.878114 , -87.629798);
    var request = {
        origin: start,
        destination: end,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    }
    directionService.route(request , function(response, status){
        if(status == google.maps.DirectionsStatus.OK){
            directionDisplay.setDirections(response);
            var route = response.routes[0];
        }
    })
}



$("#submitbtn").click(function() {
    event.preventDefault();
    var userStart = $("#startInput")["0"].value;
    var userWaypoint = $("#waypointInput")["0"].value;
    var userEnd = $("#endInput")["0"].value;
});
