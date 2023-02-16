// REQUIRE NECESSARY PACKAGES
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

/* Requires generateMarkdown.js to function */
const generateMarkdown = require('./utils/generateMarkdown');
/* Requires generateLicense.js to function */
const generateLicense = require('./utils/generateLicense');
/* Requires questionPrompt.js to function */
const questions = require('./utils/questionPrompt').questions;
/* Creates async await functionality so nothing is written to the generated README.md until all else is completed in all of the utilities */
const writeFileAsync = util.promisify(fs.writeFile);

/* Creates function to initialize program and write generated README.md file */
async function init() {
    try {
        /* create a variable for answers to the questionPrompt inquirer script */
        const answers = await inquirer.prompt(questions);
        /* console log the answers to make sure everything is accepted correctly */
        console.log(answers);
        /* create a variable to return the customized template literal for use in the generated README.md file correctly */
        let readMeData = generateMarkdown(answers);
        /* wait for all utilities to run, then generates customized README.md file */
        await writeFileAsync(`${answers.title}-README.md`, readMeData);
    } catch (err) {
        throw err;
    }
};

/* Function call to initialize application */
init();

// NOTE TO SELF:
// only copy the index.js, package.json, utils folder & .gitignore to the GitHub repo