// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenses = ['None', 'MIT', 'Apache', 'BSD']
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const askQuestions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your applications title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description about your application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are your installation instructions?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are your test instructions?'
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license did you use for the project?',
            choices: licenses
        },
    ]
   


// TODO: Create a function to write README file
    function writeToFile(data) {
        const filename = "README.md";

        fs.writeFile(filename, data, function (error) {
            error ? console.log(error) : console.log("Your README.md has been created!")
        });
    }

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(askQuestions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

//     // Function call to initialize app
 init();
