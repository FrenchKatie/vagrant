//call google, load current version, get packages listed - "corechart".  Check documentation LOADING to see which packages you need to include
google.charts.load('current', {packages: ['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    //checks that it is loaded
    console.log("packages have been loaded");

    //the data
    const data = google.visualization.arrayToDataTable([
         ['Name', 'Value'],
         ['Person 1', 72],
         ['Person 2', 86],
         ['Person 3', 70]
       ]);

    //the options
    const options = {
          width: 400,
          height: 900,
          redFrom: 75,
          redTo: 100,
          yellowFrom:50,
          yellowTo: 75,
          minorTicks: 5
        };

    //draws the chart
    const chart = new google.visualization.Gauge(document.getElementById("chartContainer"));
    chart.draw(data, options);

    setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(40 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 20 + Math.round(5 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
    }, 26000);
}
