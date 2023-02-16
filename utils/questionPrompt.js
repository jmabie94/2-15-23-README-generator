// CREATES INQUIRER PROMPT TO GATHER NECESSARY ANSWERS/DATA
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your project:",
    },
    {
        type: "input",
        name: "about",
        message: "Enter a detailed explanation of what your project does, and how:",
    },
    {
        type: "input",
        name: "installation",
        message: "How should the user install and use your application?",
    },
    {
        type: "input",
        name: "clone",
        message: "What is the link to clone the repo?",
    },
    {
        type: "input",
        name: "test",
        message: "If you used any testing protocols for your project, enter here:",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "tech",
        message: "If you used any third-party references in development, enter here:",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL of the deployed application?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the URL of the GitHub repository?",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project!",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ],
    },
    {
        type: "input",
        name: "hype",
        message: "Are you ready to see your customized README?",
    },
];

module.exports = {
    questions: questions,
};