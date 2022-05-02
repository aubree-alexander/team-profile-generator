const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
{
    //questions could go here, but how to accomodate for different questions needed for different types of individuals?
}

];


// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then(function(response) {
        
        return fs.writeFileSync('index.html', generateProfiles(response), function(err) {
            if (err) {
                throw err;
            };
        });
    })
}


function generateProfiles(data) {
    return 
    //put html setup in a template literal here
  }

// Function call to initialize app
init();

