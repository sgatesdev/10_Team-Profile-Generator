// Import inquirer, generateMarkdown and FS modules
var inquirer = require('inquirer');

// import my classes
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

//var markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

/************* LOOK DOWN **************/

// program flow: manager function, engineer-intern-done function, engineer function, intern function, done function 
// use OOP to construct new engineer, etc. from user input before passing to FILE FUNCTION

var supervisor;
var engineers = [];
var interns = [];

init();

// Gather user input, then call writeToFile to generate README
function init() {
    // Define list of questions to ask user
    let questions = [
        {
            type: 'input',
            message: `Please enter the team manager's name: `,
            name: 'name'
        },
        {
            type: 'input',
            message: `Please enter the manager's employee ID: `,
            name: 'id'
        },
        {
            type: 'input',
            message: `Please enter the manager's email address: `,
            name: 'email'
        },
        {
            type: 'input',
            message: `Please enter the supervisor's office number: `,
            name: 'office'
        }
    ];

    inquirer
    .prompt(questions)
    .then(manager => {
        // create new Manager object, make that "supervisor" value
         supervisor = new Manager(manager.name,manager.id,manager.email,manager.officeNumber);

        // call function for landing page for three choices: engineer, intern, or finish
        addEmployee();
    })
    .catch(error => {
        console.log('There was an error!');
        console.log(error);
    });
}

function addEmployee() {
    // set questions
    let question = [
        {
            type: 'list',
            message: 'Do you want to add an engineer, add an intern, or finish building the team?',
            name: 'user_choice',
            choices: ['Add engineer','Add intern','Finish']
        }
    ];

    inquirer
    .prompt(question)
    .then(answers => {
      console.log(answers);
      switch(answers.user_choice) {
          case 'Add engineer':
              addEngineer();
              break;
          case 'Add intern':
              addIntern();
              break;
          case 'Finish':
              finishTeam();
              break;
      }
    })
    .catch(error => {
      console.log('There was an error!');
      console.log(error);
    });
}

function addEngineer() {
        // Define list of questions to ask user
        let questions = [
            {
                type: 'input',
                message: `Please enter the engineer's name: `,
                name: 'name'
            },
            {
                type: 'input',
                message: `Please enter the engineer's employee ID: `,
                name: 'id'
            },
            {
                type: 'input',
                message: `Please enter the engineer's email address: `,
                name: 'email'
            },
            {
                type: 'input',
                message: `Please enter the engineer's GitHub profile: `,
                name: 'github'
            }
        ];
    
        inquirer
        .prompt(questions)
        .then(engineer => {
            // build engineer object
            let newEngineer = new Engineer(engineer.name,engineer.id,engineer.email,engineer.gitHub);

            // insert engineer object into employees array
            engineers.push(newEngineer);
    
            // call function for landing page for three choices: engineer, intern, or finish
            addEmployee();
        })
        .catch(error => {
            console.log('There was an error!');
            console.log(error);
        });
}

function addIntern() {
    // Define list of questions to ask user
    let questions = [
        {
            type: 'input',
            message: `Please enter the intern's name: `,
            name: 'name'
        },
        {
            type: 'input',
            message: `Please enter the intern's employee ID: `,
            name: 'id'
        },
        {
            type: 'input',
            message: `Please enter the intern's email address: `,
            name: 'email'
        },
        {
            type: 'input',
            message: `Please enter the intern's school: `,
            name: 'school'
        }
    ];

    inquirer
    .prompt(questions)
    .then(intern => {
        // build supervisor object, add to global array
        let newIntern = new Intern(intern.name,intern.id,intern.email,intern.school);

        // put new intern object into employee array
        interns.push(newIntern);

        // call function for landing page for three choices: engineer, intern, or finish
        addEmployee();
    })
    .catch(error => {
        console.log('There was an error!');
        console.log(error);
    });
}

function finishTeam() {
    // write code to write file

    // for now, just console.log
    console.log(supervisor);
    console.log(engineers);
    console.log(interns);
}