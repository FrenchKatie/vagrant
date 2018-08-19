process.stdout.write("\n\nHello and welcome to the quiz:\n\nYou will find out if your answers were correct at the end!\n\nLet's begin:\n\n");

var questions = [
    "How many sides does a square have?",
    "What is 7 x 3?",
    "What is 2 x 2?"
];
var answers = [
    "4",
    "21",
    "4"
];

var usersAnswers = [];

function askQuestion (i) {
    process.stdout.write(`\n\n${questions[i]}\n\n`);
}

process.stdin.on("data" , function (answer){
    var questionNumber = usersAnswers.length;
    var inputAnswer = answer.toString().trim();
    if (usersAnswers.length < answers.length){
        usersAnswers.push();
    } else {
        process.exit();
    }
})

askQuestion(0);

process.on("exit" , function(){ //before exit write this:
    process.stdout.write(`Congratulations you have completed the quiz!!`)
});
