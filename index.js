/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// added function from generateMarkdown to make them available here.
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-name',
        message: 'What is the title of your project?',
        // validate: nameInput => {
        //     if (nameInput) {
        //         return true;
        //     } else {
        //         console.log("Please enter your name!");
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    // { //!here should be table of  content but i don't think we need to ask for that. It should be pretty the save almost all the time.
    //     type: 'checkboxx',
    //     name: 'table-of-contents',
    //     message: 'What Table of Contents you would like to add?',
    //     choises: []
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is it project for?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please check the lisence:',
        choices: ['BSD', 'MIT', 'EPL'],
        // we also need to add badge at the top of the readme with license
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list all the people who worked on the project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide us with the information on how to test your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'How can user reach you if they have any question? Please provide your username at GitHub:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email:',
        //should take this email and print out: To reach me with additional questions use - email.
    },
];
const promptUser = () => {
    // console.log("PromptUser")
    return inquirer.prompt([questions]);
    //! stoped here
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
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
function init() { 
    // console.log('Run function');
    promptUser().then(response=>{
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();


// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });