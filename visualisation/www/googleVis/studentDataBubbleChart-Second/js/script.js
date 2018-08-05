//call google, load current version, get packages listed - "corechart".  Check documentation LOADING to see which packages you need to include
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    //checks that it is loaded
    console.log("packages have been loaded");

    //the data
    const data = google.visualization.arrayToDataTable([
        //1. ID - Name on Bubble
        //2. AGE - on hAxis
        //3. HEIGHT - on vAxis
        //4. ANIMAL - grouped by colour of Bubble
        //5. FRIENDS - the more friends the bigger, the less friends the smaller
        ["Student" , "Age" , "Height" , "Favourite Animal" , "Friends"],
        ["S1" , 21 , 5.5 , "Monkey" , 300],
        ["S2" , 21 , 5.10 , "Meercat" , 250],
        ["S3" , 21 , 5.8 , "Dog" , 600],
        ["S4" , 18 , 6 , "Fox" , 198],
        ["S5" , 24 , 5.6 , "Dog" , 329],
        ["S6" , 24 , 5.9 , "Cat" , 280],
        ["S7" , 18 , 6.5 , "Pidgeon" , 128],
        ["S8" , 18 , 5.10 , "Rabbit" , 297],
        ["S9" , 30 , 5.7 , "Horse" , 193]
    ]);

    //the options
    const options = {
        title: "Correlation between Students Age, Height, Favourite Animal and Amount of Friends",
        hAxis: {
            title: "Student Age"
        },
        vAxis: {
            title: "Student Height"
        }
    };

    //draws the chart
    const chart = new google.visualization.BubbleChart(document.getElementById("chartContainer"));
    chart.draw(data, options);
}
