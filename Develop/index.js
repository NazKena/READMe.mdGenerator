// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "Username",
    message: "What is your Github username?",
},
{
    type: "input",
    name: "Description",
    message: "Give a brief description about your project",

    type: "input",
    name: "Title",
    message: "What is the title of your project?",

    type: "input",
    name: "Installation",
    message: "Describe your installation instructions",

    type: "input",
    name: "License",
    message: "What is the license of your project?",
    choices: ["MIT", "ISC","APACHE 2.0","NO LICENSE", "GNU"],

    type: "input",
    name: "Table of Contents",
    message: "Give a brief description about your project",

    type: "input",
    name: "Contributers",
    message: "Who were the contributers in this project?",

    type: "input",
    name: "Usage",
    message: "What is the use of this project?",

    type: "input",
    name: "Email Address",
    message: "What is your email address?",

    type: "input",
    name: "Description",
    message: "Give a brief description about your project",

    type: "input",
    name: "test",
    message: "Was a test used in your project?"
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
