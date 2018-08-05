var heartbeat = 0;

$.ajax({
    url:"https://dweet.io:443/get/latest/dweet/for/Minnesota_EdenPrairie_02",
    dataType: "json",
    type: "GET",
    success: function(dweetData) {
        // console.log(dweetData);
        heartbeat = dweetData.with["0"].content.heartbeat;
        // console.log(heartbeat);
        drawChart(dweetData);
    },
    error: function (error) {
        console.log("ERROR");
        console.log(error);
    }
})

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(dweetData){

    console.log(heartbeat);
    console.log("working");

    var drawData = google.visualization.arrayToDataTable([
        ["Heartbeat" , dweetData]
    ]);

    //draws the chart
    const chart = new google.visualization.LineChart(document.getElementById("chartContainer"));
    chart.draw(dweetData)
}
