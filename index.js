const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = []
const IDArray = []



    function buildTeam() {

        const questions = [
            {
                type: 'input',
                name: 'teamManagerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email address?"
            }, 
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?"
            }
            
            ];
        
        inquirer.prompt(questions)
        
        .then(answers => {
            const manager = new Manager(answers.teamManagerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager)
            IDArray.push(answers.managerID)

        createTeam()
        })
    }


    function createTeam() {
        inquirer.prompt( [{ 
            type: 'list',
            name: 'memberChoice',
            message: 'Would you like to add an engineer or intern, or finish building the team?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }]).then(userChoice => {
            switch (userChoice.memberChoice){
                case "Add an engineer":
                    addEngineer()
                    break
                case "Add an intern":
                    addIntern()
                    break
                default: buildTeam()
            }
        })

    }


    function addEngineer() {

        const questions = [
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the team Engineer's employee ID?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the team Engineer's email address?"
            }, 
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is the team Engineer's GitHub username?"
            }
            
            ];
        
        inquirer.prompt(questions)
        
        .then(answers => {
            const manager = new Manager(answers.teamManagerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager)
            IDArray.push(answers.managerID)

        createTeam()
        })
    }

    function addIntern() {

        const questions = [
            {
                type: 'input',
                name: 'teamManagerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email address?"
            }, 
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?"
            }
            
            ];
        
        inquirer.prompt(questions)
        
        .then(answers => {
            const manager = new Manager(answers.teamManagerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager)
            IDArray.push(answers.managerID)

        createTeam()
        })
    }

    //maybe can just use bootstrap
    function generateProfiles(data) {
        return 
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        
        </body>
        </html>
        `
    }

    buildTeam();


    // .then(function(response) {
            
    //     return fs.writeFileSync('index.html', generateProfiles(response), function(err) {
    //         if (err) {
    //             throw err;
    //         };
    //     });
    // })






