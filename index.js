// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// added function from generateMarkdown to make them available here.
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
