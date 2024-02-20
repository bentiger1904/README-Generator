const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/utils/generateMarkdown");
const util = require('util');

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What's you GitHub username?",
  },

  {
    type: "input",
    name: "email",
    message: "What's your email?",
  },
  {
    name: "title",
    type: "input",
    message: "Title - What is the title of the project?",
    default: "Title",
  },
  {
    name: "description",
    type: "input",
    message:
      "Description - Enter a short description explaining what, why and how of the project including challenges faced?",
    default: "Description",
  },
  {
    name: "installation",
    type: "input",
    message:
      "Installation - What are the steps required for installation of project?",
    default: "Installation",
  },
  {
    name: "usage",
    type: "input",
    message: "Usage - Examples of how this can be used?",
    default: "Description",
  },
  {
    name: "credits",
    type: "input",
    message: "Credits - Details of collaborators or 3rd party assets used?",
    default: "Credits",
  },
  {
    name: "license",
    type: "input",
    message: "License - Which license have you chosen?",
    default: "unselected",
  },
  {
    name: "features",
    type: "input",
    message: "Features - List the project features?",
    default: "Features",
  },
  {
    name: "howTo",
    type: "input",
    message:
      "How can others contribute - Optional guidlines for how you'd like others to contribute?",
    default: "How to contribute",
  },
  {
    name: "tests",
    type: "input",
    message:
      "Tests - Optional examples on how to run tests for the application?",
    default: "Tests",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Sorry there was an error : ' + error);
    }
  })
}

const generateReadMe = util.promisify(writeToFile);

async function init() {
  try {
    const inputAnswers = await inquirer.prompt(questions);
    console.log('The information is being passed into your new README.md file: ', inputAnswers);
    const newMarkdown = generateMarkdown(inputAnswers);
    console.log(newMarkdown);
    await generateReadMe('./assets/utils/sampleREADME.md', newMarkdown);
    
  } catch (error) {
    console.log('Sorry there was an error.' + error);
  }
};

// function call to initialize program
init();
