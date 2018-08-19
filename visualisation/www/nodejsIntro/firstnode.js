// var name = "Katie";
// console.log("First node project running");
// console.log(`Hello ${name}`);
// console.log("Hello " + name);
//New terms we can use in node js that normal js does not like
// console.log(__dirname); //directory name
// console.log(__filename); //file name
//Standard input and output
process.stdout.write("What is your name\n"); // \n is the same as an HTML br
process.stdin.on("data" , function(answer){ //call back function
    //what type of event we want
    //what happens on the event
    //what happes when the event is finished
    process.stdout.write(`\n\nHello ${answer}\n\n`);
    process.exit();
})
