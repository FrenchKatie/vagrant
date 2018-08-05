// Load the Visualization API and the controls package.
// Packages for all the other charts you need will be loaded
// automatically by the system.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard);

function drawDashboard() {

    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));

    // Create our data table.
    const data = google.visualization.arrayToDataTable([
        ["Species" , "Surfing" , "Diving/Snorkelling" , "Fishing" , "Swimming" , "Wading" , "Feeding Sharks" , "Watersports"],
        ["Blacktip" , 0 , 1 , 0 , 0 , 0, 0 , 0],
        ["Bull" , 0 , 2 , 2 , 1 , 2 , 1 , 0],
        ["Galapagos" , 0 , 1 , 0 , 0 , 0 , 0 , 0],
        ["Grey Reef" , 0 , 1 , 0 , 0 , 0 , 1 , 0],
        ["White" , 2 , 1 , 0 , 2 , 0 , 1 , 1],
        ["Lemon" , 0 , 0 , 1 , 0 , 0 , 0 , 0],
        ["Nurse" , 0 , 0 , 1 , 0 , 0 , 1 , 0],
        ["Wobblegong" , 1 , 0 , 0 , 2 , 0 , 0 , 0],
        ["Salmon" , 0 , 0 , 0 , 1 , 0 , 0 , 0],
        ["Tiger" , 1 , 2 , 1 , 1 , 0 , 0 , 1],
        ["Unidentified Species" , 4 , 0 , 1 , 1 , 0 , 0 , 2],
        ["Not a Shark" , 0 , 1 , 1 , 0 , 0 , 1 , 0]
    ]);

    // Create a range slider, passing some options
    // var donutRangeSlider = new google.visualization.ControlWrapper({
    //   'controlType': 'NumberRangeFilter',
    //   'containerId': 'filter_div',
    //   // 'options': {
    //   //   'filterColumnLabel': 'Donuts eaten'
    //   // }
    // });

    // Create a pie chart, passing some options
    var pieChart = new google.visualization.ChartWrapper({
      'chartType': 'ColumnChart',
      'containerId': 'chart_div',
      'options': {
        'width': 1000,
        'height': 1000,
        'legend': 'right'
      }
    });
    // Establish dependencies, declaring that 'filter' drives 'pieChart',
    // so that the pie chart will only display entries that are let through
    // given the chosen slider range.
    // dashboard.bind(pieChart);
    // Draw the dashboard.
    dashboard.draw(data);
}




// function drawChart(){
    //checks that it is loaded
    // console.log("packages have been loaded");

    //the data
    // const activityData = google.visualization.arrayToDataTable([
    //     ["Species" , "Surfing" , "Diving/Snorkelling" , "Fishing" , "Swimming" , "Wading" , "Feeding Sharks" , "Watersports"],
    //     ["Blacktip" , 0 , 1 , 0 , 0 , 0, 0 , 0],
    //     ["Bull" , 0 , 2 , 2 , 1 , 2 , 1 , 0],
    //     ["Galapagos" , 0 , 1 , 0 , 0 , 0 , 0 , 0],
    //     ["Grey Reef" , 0 , 1 , 0 , 0 , 0 , 1 , 0],
    //     ["White" , 2 , 1 , 0 , 2 , 0 , 1 , 1],
    //     ["Lemon" , 0 , 0 , 1 , 0 , 0 , 0 , 0],
    //     ["Nurse" , 0 , 0 , 1 , 0 , 0 , 1 , 0],
    //     ["Wobblegong" , 1 , 0 , 0 , 2 , 0 , 0 , 0],
    //     ["Salmon" , 0 , 0 , 0 , 1 , 0 , 0 , 0],
    //     ["Tiger" , 1 , 2 , 1 , 1 , 0 , 0 , 1],
    //     ["Unidentified Species" , 4 , 0 , 1 , 1 , 0 , 0 , 2],
    //     ["Not a Shark" , 0 , 1 , 1 , 0 , 0 , 1 , 0],
    //
    // ]);

    // //the options
    // const options = {
    //     title: "Correlation between species of shark and the activity",
    //     hAxis: {
    //         title: "Species"
    //     },
    //     vAxis: {
    //         title: "Activity"
    //     },
    //     isStacked: true
    // };

    //draws the chart
    // const activityChart = new google.visualization.ColumnChart(document.getElementById("chartContainer"));
    // activityChart.draw(activityData, options);
// }
