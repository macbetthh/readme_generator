const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const generateMarkdown = require('./generateMarkdown');

// Apply theme to colors
colors.setTheme({
  success: 'green',
  info: 'cyan',
  warn: 'yellow',
  error: 'red'
});

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What are you titling your project?'.info
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a short and informative description of your project. This could be the reason for creating this project, what your motivation for development is, what problem you are trying to solve, etc.:'.info
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the step-by-step instructions to install your project?'.info
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions on how to use your project:'.info
  },
  {
    type: 'input',
    name: 'ssUrl',
    message: 'What is the URL for your screenshot of your project?'.info
  },
  {
    type: 'input',
    name: 'ssAlt',
    message: 'What is the Alt Text you would like to provide for your screenshot?'.info
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:'.info,
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:'.info
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'.info
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any credits, sources, collaborators, or acknowledgements in this format "name, URL", "name, URL":'.info
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username:'.info
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'.info
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(`./generated-readme/${fileName}`, data, (err) => err ? console.log(err.error) : console.log('README.md created!'.success));
}

async function init() {
  console.log('✨ Welcome to README Wizard!✨'.rainbow);
  console.log('Answer a few questions and your ReadMe will generate for you in the generated-readme folder!'.red.underline)
  const responses = await inquirer.prompt(questions);
  const markdown = generateMarkdown(responses);
  writeToFile('README.md', markdown);
}

init();
