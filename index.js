// TODO: Include packages needed for this application
const fs = require ("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown.js");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Input your project name",
    },
    {
        type: "input",
        name: "description",
        message: "What type of project are you making today.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "none",]
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",

    },
    {
        type: "input",
        name: "name",
        message: "Please provide your first and last name",

    },
    {
        type: "input",
        name: "email",
        message: "enter your email address",        
    },
    {
        type: "input",
        name: "contributers",
        message: "List contributers. (GitHub usernames)",

    },
    {
        type: "input",
        name: "test",
        message: "provide walkthrough of tests if applicable",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    //inquirer.prompt(questions).then(responses => console.log(responses))
    inquirer.prompt(questions).then((responses) =>{
         console.log("Creating Personal README.md File...");
         writeToFile("./dist/README.md", generateMarkdown({...responses }))
    });
 }

// Function call to initialize app
init();
