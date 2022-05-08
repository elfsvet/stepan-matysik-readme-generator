// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// added function from generateMarkdown to make them available here.
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // title question
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // description question
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    //! here should be the table of content but i don't think we need to ask for that. It should be pretty the save almost all the time.
    // installation question
    {
        type: 'input',
        name: 'installation',
        message: 'Please give the installation instructions:',
    },
    // usage question
    {
        type: 'input',
        name: 'usage',
        message: 'What is it project for?',
    },
    // license question
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please check the license:',
        choices: ['BSD', 'MIT', 'EPL'],
    },
    // contributing question
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide the contribution guidelines:',
    },
    // tests question
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide us with the information on how to test your project:',
    },
    // github link question
    {
        type: 'input',
        name: 'github',
        message: 'How can user reach you if they have any question? Please provide your username at GitHub:',
    },
    // email question
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email:',
    },
];

// Ask user questions and return their answers. Using ES6: arrow function
const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
// takes 2 arguments the name we want our file to be and, data we get after question answered
const writeToFile = (fileName, data) => {
    // return created file if everything if correct. if not will return an error.
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                // stop function from execution if error.
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
// crated a function  with arrow function to ask user questions and use their respond for creating a readme.md file in the main directory. It also get a function we required from another js file in utils folder.
const init = () => {
    promptUser().then(response => {
        writeToFile("README.md", generateMarkdown(response));
    });
};

// Function call to initialize app
init();