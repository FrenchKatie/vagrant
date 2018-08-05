// var javascriptData = [
//     {
//         name: "person1"
//     },
//     {
//         name: "person2"
//     }
// ];
//
// console.log(javascriptData);
//
// var jsonData = [
//     {
//         "name": "person1"
//     },
//     {
//         "name": "person2"
//     }
// ];
//
// console.log(jsonData);
//
// //to convert data to json and store in variable. You can pass a variable or an object into the stringify() method
// javascriptData = JSON.stringify(javascriptData);
//
// var newUser = {
//     name: "person name",
//     username: "username",
//     password: "password",
//     email: "email"
// }
//
// newUser = JSON.stringify(newUser);
// //now send to the database
//
// //To reverse and turn it back from JSON into its original format:
// //JSON.parse(bla);







//-------------------
//Pure Javascript Way
//-------------------

// //AJAX - Pulling data without having to reload the page
// var xhttp = new XMLHttpRequest();
//
// xhttp.onreadystatechange = function(){ //onreadystatechange - making a request to somewhere else
//
//     //the two things that could happen - Number codes that could come back
//
//     //ready:
//     //0 - request not initalised
//     //1 - sever connection established
//     //2 - request recieved
//     //3 - processing the request
//     //4  - request has finished and the data/response is ready
//
//     //status:
//     //200 - OK, nothings wrong
//     //403 - forbidden/need to log in
//     //404 - not found
//
//     if(this.status == 403){
//         console.log("FORBIDDEN, can't access this information");
//         return;
//     } else if(this.status == 404){
//         console.log("ERROR, file not found");
//         return;
//     }
//
//     if(this.status == 200 && this.readyState == 4){
//         console.log(this.responseText);
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }
//
// //opening a connection with the open method
// //Inside the open method it needs to know:
// // - what type of method?
// // - An obsolute path/URL of where the data is coming from
// // - boolean value, true or false? Do you want it to be synchronous?
// //      synchronous - reads line by line
// //      asynchronous - faster, if there is a funtion it will read the function as well as outside of the function.  There is no waiting for it to read line by line
// xhttp.open("GET" , "data/data.json" , true);
// xhttp.send();





//-----------
//jQuery way:
//-----------
$.ajax({
    type: "GET",
    url: "data/data.json",
    dataType: "json",
    success: function (dataFromJSON) {//what ever comes back is stored in the variable dataFromJSON
        console.log(dataFromJSON);
    },
    error: function (error) {
        console.log(error);
        console.log("something went wrong with the connection");
    }
});
//does the JSON.parse() for you so there is no need to convert back to JS. 
