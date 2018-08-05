// var quakeData = 0;
$.ajax({
    url:"https://api.geonet.org.nz/quake/stats",
    dataType: "json",
    type: "GET",
    success: function(geonetData) {
        console.log(geonetData);
        quakeData = geonetData.magnitudeCount.days7;
        drawChart(geonetData)
    },
    error: function (error) {
        console.log("ERROR");
        console.log(error);
    }
})

//quake occurance per day for the last 100 days
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(geonetData){

    // var data = google.visualization.arrayToDataTable([
    //     ["Day" , "Number of Quakes"],
    //     [1 , 15],
    //     [2 , 6],
    //     [3 , 1],
    //     [4, 100]
    // ]);
    for (var i = 0; i < 5; i++) {
        console.log(geonetData.magnitudeCount.days7[i]);
        var dayData = [];
        dayData.push(geonetData.magnitudeCount.days7[i]);
        console.log(dayData);
    }

    //draws the chart
    const chart = new google.visualization.LineChart(document.getElementById("chartContainer"));
    chart.draw(data)
}
