process.stdout.write("\n\nHello and welcome to the quiz:\n\n");
var questions = [
    "How many sides does a square have?",
    "What is the capital of New Zealand?",
    "What is 2 x 2?"
];
var answers = [
    "4",
    "Wellington",
    "4"
];
var usersAnswers = [];

//a function that will ask the user a question
function askQuestion (i) {
    process.stdout.write(`\n\n${questions[i]}\n\n`);
}

process.stdin.on("data" , function(answer){
    var questionNumber = usersAnswers.length;
    var inputAnswer = answer.toString().trim(); //convertingto string and trims off whitespace at the front/end
    if (inputAnswer === answers[questionNumber]) { //if correct
        process.stdout.write(`${inputAnswer} is correct! :)`); //writes out that it is a pass
        usersAnswers.push(inputAnswer); //pushes to array of user inputs
        if (usersAnswers.length < answers.length){ //ask the next question if the usersAnswers is less than length of answers
            askQuestion(usersAnswers.length);
        }else{
            process.exit(); //if there are no questions left exit the quiz
        }
    } else { //if user is wrong
        process.stdout.write(`${inputAnswer} is incorrect! Please try again :)`);
    }
})

askQuestion(0); //asks first question

process.on("exit" , function(){ //before exit write this:
    process.stdout.write(`Congratulations you have completed the quiz!!`)
});
