//call google, load current version, get packages listed - "corechart".  Check documentation LOADING to see which packages you need to include
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    //checks that it is loaded
    console.log("packages have been loaded");

    //the data
    const data = google.visualization.arrayToDataTable([
        ["Year" , "Birth" , "Death" , "Mariages"],
        ["2013" , 58719 , 29568 , 19237],
        ["2014" , 57243 , 31062 , 20125],
        ["2015" , 61038 , 31608 , 19947],
        ["2016" , 59430 , 31179 , 20235]
    ]);

    //the options
    const options = {
        title: "Births, Deaths and Mariages from New Zealand",
        hAxis: {
            title: "Number"
        },
        vAxis: {
            title: "Year"
        },
        colors: ["#81ecec" , "#55efc4" , "#00b894"],
        animation: {
            startup: true,
            duration: 1000
        }
    };

    //draws the chart
    const chart = new google.visualization.BarChart(document.getElementById("chartContainer"));
    chart.draw(data, options);
}
