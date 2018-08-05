//call google, load current version, get packages listed - "corechart".  Check documentation LOADING to see which packages you need to include
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    //checks that it is loaded
    console.log("packages have been loaded");

    //the data
    const data = google.visualization.arrayToDataTable([
        ["Student" , "ModuleOneMark" , "Attendance%" , "Tobe"],
        ["001" , 87 , 85 , "Designer"],
        ["002" , 66 , 69 , "Developer"],
        ["003" , 64 , 75 , "Designer"],
        ["004" , 70 , 60 , "Front End Developer"],
        ["005" , 68 , 80 , "Front End Developer"],
        ["006" , 81 , 80 , "Graphic Designer"],
        ["007" , 90 , 75 , "Web Developer"],
        ["008" , 77 , 60 , "Graphic Designer"],
        ["009" , 86 , 72 , "Web Developer"]
    ]);

    //the options
    const options = {
        title: "Correlation between Marks, Attendance",
        hAxis: {
            title: "Module One Mark"
        },
        vAxis: {
            title: "Attendance %"
        },
        colors: ["#0984e3" , "#74b9ff" , "#00cec9" , "#00b894" , "#6c5ce7"],
        animation: {
            startup: true,
            duration: 1000
        }
    };

    //draws the chart
    const chart = new google.visualization.BubbleChart(document.getElementById("chartContainer"));
    chart.draw(data, options);
}
