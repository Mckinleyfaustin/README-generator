const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./generateMarkdown.js');
const { title } = require('process');
const { Console } = require('console');
console.log("Mack's README's Generator")
console.log("Answer the questions below to create your own personal README")


const questions = [
{
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
    name: 'BriefDescription',
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
    name: "TechnologiesUsed",
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
    name: "ToInstall",
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
    message: "License",
    name: "License",
    validate: your_License => {
        if (your_License) {
            return true;
        }
        else
        {
            console.log("Enter your Licenses.");
            return false;
        }
    }
},
{
    type: "input",
    message: "Contributing",
    name: 'Contributing',
    validate: your_Contributing => {
        if (your_Contributing) {
            return true;
        }
        else
        {
            console.log("Enter everyone's contribution");
            return false;
        }
    }
},
{
    type: "input",
    message: "Tests",
    name: 'Tests',
    validate: your_Tests => {
        if (your_Tests) {
            return true;
        }
        else
        {
            console.log("Enter a test instructions");
            return false;
        }
    }
},
{
    type: "input",
    message: "Questions",
    name: 'Questions',
    validate: your_Questions => {
        if (your_Questions) {
            return true;
        }
        else
        {
            console.log("Enter your questions");
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
        console.log("You're Done!");
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
.then(function (userInput) {
        console.log('The userInput is', userInput);
        writeToFile("README2.md", generateMarkdown(userInput));
});
