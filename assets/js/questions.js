function checkNum(test) {
    return test.match(/[0-9]/) ? true : 'Must be a numeric value.';
}

function checkEmail(test) {
    return test.match('@') ? true : 'Must enter a valid email.';
}

let managerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'As the manager of the team, what is your name?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter your ID.',
        validate: checkNum
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?',
        validate: checkEmail
    },
    {
        name: 'officeNum',
        type: 'input',
        message: 'What is your office number?',
        validate: checkNum
    },
]

let engineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of this Engineer?'
    },
    {
        name: 'id',
        type: 'input',
        message: `What is their ID?`,
        validate: checkNum
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?',
        validate: checkEmail
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is their GitHub username?'
    },
]

let internQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of this Intern?'
    },
    {
        name: 'id',
        type: 'input',
        message: `What is their ID?`,
        validate: checkNum
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?',
        validate: checkEmail
    },
    {
        name: 'school',
        type: 'input',
        message: 'What is the name of their school?'
    },
]

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions
};