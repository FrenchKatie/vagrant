//call google, load current version, get packages listed - "corechart".  Check documentation LOADING to see which packages you need to include
google.charts.load('current', {packages: ['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    //checks that it is loaded
    console.log("packages have been loaded");

    //the data

    var dataTable = new google.visualization.DataTable();
    //draws the chart
    const chart = new google.visualization.Timeline(document.getElementById("chartContainer"));
    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });

    dataTable.addRows([
      [ '1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2', 'John Adams',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '3', 'Thomas Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

    //the options
    const options = {
        title: "Births, Deaths and Mariages from New Zealand",
        subtitle: "From 2013 to 2016",
        hAxis: {
            title: "Number"
        },
        vAxis: {
            title: "Year"
        }
    };
    chart.draw(dataTable, options);
}
