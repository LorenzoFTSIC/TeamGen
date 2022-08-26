const Manager = require('./assets/js/classes/manager');
const Engineer = require('./assets/js/classes/engineer');
const Intern = require('./assets/js/classes/intern');
const questions = require('./assets/js/questions');
const generateHTML = require('./assets/js/htmlGen');
const inquirer = require('inquirer');

let team = [];

const { managerQuestions, engineerQuestions, internQuestions } = questions;

function init() {
    function createManager() {
        inquirer
            .prompt(managerQuestions)
            .then(res => {
                const manager = new Manager(
                    res.name, 
                    res.id, 
                    res.email, 
                    res.officeNum
                );
                team.push(manager);
                createTeam();
            });
    }
  
    function createTeam() {
        inquirer
            .prompt([
                {
                    name: 'continue',
                    type: 'confirm',
                    message: 'Would you like to add a new team member?',
                },
                {
                    name: 'type',
                    type: 'list',
                    message: 'Which kind of team member would you like to add?',
                    choices: ['Engineer', 'Intern'],
                    when(answers) {
                        return answers.continue;
                    }
                }
            ])
            .then(choice => {
                if (choice.type) {
                    if (choice.type === 'Engineer') {
                        addEngineer();
                    } else  {
                        addIntern();
                    }
                } else {
                    buildTeam();
                }
            });
    }
  
    function addEngineer() {
        inquirer
            .prompt(engineerQuestions)
            .then(res => {
                // creates a new Engineer using its class and the responses from prompt
                const engineer = new Engineer(
                    res.name,
                    res.id,
                    res.email,
                    res.github
                );
                team.push(engineer);
                createTeam();
            });
    }
    
    function addIntern() {
        inquirer
            .prompt(internQuestions)
            .then(res => {
                // creates a new Intern using its class and the responses from prompt
                const intern = new Intern(
                    res.name,
                    res.id,
                    res.email,
                    res.school
                );
                team.push(intern);
                createTeam();
            });
    }
  
    function buildTeam() {
        generateHTML(team);
    }
    
    createManager();
}

init();