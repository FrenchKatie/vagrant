const studentData = [
    {
        food: "cake",
        count: 6
    },
    {
        food: "pie",
        count: 5
    }
];

//call google, load current version, get packages listed - "corechart".  Check documentation LOADING to see which packages you need to include
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    //checking if working
    console.log("packages have been loaded");

    //the data
    const data = new google.visualization.DataTable();
    data.addColumn("string" , "Food");
    data.addColumn("number" , "Count");

    for (var i = 0; i < studentData.length; i++) {
        //adds an array
        data.addRow([studentData[i].food, studentData[i].count])
    }

    const options = {
        title: "Cake vs Pie"
    }

    const chart = new google.visualization.PieChart(document.getElementById("chartContainer"));
    chart.draw(data, options);
}
