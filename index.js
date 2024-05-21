// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors')
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
// My questions include inputs for a user to generate information for these sections in their README: Title, Description, Table of Contents, Installation, Usage, Screenshots, License, Contributions, and Questions & Contact
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What are you titling your project?'
    }, 

    {
        type: 'input',
        name: 'description', 
        message: 'Please give a short and informative description of your project. This could be the reason for creating this project, what your motivation was, what problem you are trying to solve, etc.:'
    },

    {
        type: 'input',
        name: 'tableOfContents',
        message: 'List the sections for the Table of Contents, separated by commas (e.g., Installation, License, Credits, etc.):'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the step-by-step instructions to install your project?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project:'
    },

    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide the screenshot information in the format "alt text, URL":'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List any credits, sources, collaborators, or acknowledgements in this format "name, URL":'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:'
    }, 

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
// This function also console logs to let me know the file was created or if there was an error in the creation process
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err.red) : console.log('README.md created!'.green));
}

// TODO: Create a function to initialize app
// This initializes the prompting of the questions in the terminal and generates the markdown that will be included in the created Readme file after each response is collected. 
function init() {
    inquirer.prompt(questions)
      .then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
      });
  }
  

// Function call to initialize app
init();
