const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./generateMarkdown.js');
const { title } = require('process');
const { Console } = require('console');
console.log("Mack's README's Generator")
console.log("Answer the questions below to create your own personal README")


const questions = [{
    type: "input",
    message: "Title of your project",
    name: "Title",
    validate: your_Input => {
        if (your_Input) {
            return true;
        }
        else
        {
            console.log("Enter a title to continue");
            return false;
        }
    }
}, 
{
    type: "input",
    message: "Brief description of your project",
    name: "Brief Descriptions",
    validate: your_Description => {
        if (your_Description) {
            return true;
        }
        else
        {
            console.log("Enter a project description");
            return false;
        }
    }
},
{
    type: "input",
    message: "Technologies Used",
    name: "Technologies Used",
    validate: your_Technology => {
        if (your_Technology) {
            return true;
        }
        else
        {
            console.log("Enter the technologies used on the project.");
            return false;
        }
    }
},
{
    type: "input",
    message: "How to Install",
    name: "To Install",
    validate: your_Install => {
        if (your_Install) {
            return true;
        }
        else
        {
            console.log("Enter the technologies used on the project.");
            return false;
        }
    }
},
{
    type: "input",
    message: "github info",
    name: "Github",
    validate: your_github => {
        if (your_github) {
            return true;
        }
        else
        {
            console.log("Enter your Github information.");
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        Console.log("You're Done!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
