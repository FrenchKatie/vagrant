google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['PhysicalQuantity', 'Value'],
          ['Temperature', 37],
          ['Pressure', 105]

        ]);

        var options = {
          width: 500, height: 500,
          redFrom: 30, redTo: 35,
          yellowFrom:35, yellowTo: 40,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chartContainer'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 30 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 10000);
        setInterval(function() {
          data.setValue(1, 1, 90 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);

      }


//End of page
