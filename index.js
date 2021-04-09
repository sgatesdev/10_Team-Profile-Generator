// Team Profile Generator

// import inquirer and FS modules
var inquirer = require('inquirer');
const fs = require('fs');

// import module to generate team page
var teamPage = require('./lib/page.js');

// import classes
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// set a few global variables
var supervisor;
var engineers = [];
var interns = [];

// start app
init();

// create a Manager object using user input, then move on to add engineer, intern, or finish building
function init() {
    // Display welcome message
    console.log('\nThank you for choosing to use this Team Profile Generator! \nIf you have used it before, please back up your team_page.html file (found in ./dist). For all questions refer to the README.\n');

    // List of MANAGER questions
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
         supervisor = new Manager(manager.name,manager.id,manager.email,manager.office);

        // call function for landing page for three choices: engineer, intern, or finish
        addEmployee();
    })
    .catch(error => {
        console.log('There was an error!');
        console.log(error);
    });
}

// prompt user to choose 1) add an engineer 2) add employee or 3) finish building team
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
      // send the user where they want to go!
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

// create an Engineer object using user input
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
            let newEngineer = new Engineer(engineer.name,engineer.id,engineer.email,engineer.github);

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

// create an Intern object using user input
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

// write team profile page and store those files in ./dist
function finishTeam() {
    // finish process by writing file, displaying success or error msg
    fs.writeFile('./dist/team_page.html', teamPage(supervisor, interns, engineers), (err) =>
      err ? console.error(err) : console.log('Generated team page!')
    );
}