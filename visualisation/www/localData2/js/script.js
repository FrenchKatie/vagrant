//-------
//PURE JS:
//-------
// console.log("loaded");
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.status == 403){
//         console.log("FORBIDDEN, can't access this information");
//         return;
//     } else if (this.satusd == 404) {
//         console.log("ERROR, file not found");
//         return;
//     }
//
//     if (this.status == 200 && this.readyState == 4) {
//         console.log(this.responseText);
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }
// xhttp.open("GET" , "data/data.json" , true);
// xhttp.send();

//-------
//JQUERY:
//-------

//getting the data from JSON file
//stored in variable "dataFromJSON" as an array of objects


function getJSON () {
    $.ajax({
        type: "GET",
        url: "data/data.json",
        dataType: "json",
        success: function (dataFromJSON) {
            // console.log(dataFromJSON);
            drawChart(dataFromJSON);
        },
        error: function (error) {
            console.log(error);
            console.log("Something is wrong with the connection");
        }
    })
}




google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(getJSON);

function drawChart(dataFromJSON){
    //checking if working
    console.log(dataFromJSON);

    //the data
    const data = new google.visualization.DataTable();
    data.addColumn("string" , "Gender");
    data.addColumn("number" , "Favourite Color");


    for (var i = 0; i < dataFromJSON.length; i++) {
        // data.addRow([dataFromJSON[i].gender, dataFromJSON[i].favourite_colour])
    }

    const chart = new google.visualization.BarChart(document.getElementById("chartContainer"));
    chart.draw(data);
}
