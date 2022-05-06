

function generateHTML(data) {
    const generateManager = manager => {
        return `
        <div class="card employee-card bg-info m-3">
            <div class="card-header">
                <h2 class="card-title text-light">${manager.getName()}</h2>
                <h3 class="card-title text-light font-weight-light"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

   
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card bg-info m-3">
            <div class="card-header">
                <h2 class="card-title text-light">${engineer.getName()}</h2>
                <h3 class="card-title text-light font-weight-light"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
        `
    }

    const generateIntern = intern => {
        return `
        <div class="card employee-card bg-info m-3">
            <div class="card-header">
                <h2 class="card-title text-light">${intern.getName()}</h2>
                <h3 class="card-title text-light font-weight-light"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }

    
    const teamArray = [];
    teamArray.push(data
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
     teamArray.push(data
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
     teamArray.push(data
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return teamArray.join("");
}

module.exports = data => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 mb-3 d-flex justify-content-center bg-info text-light">
                    <h1>My Team</h1>
                </div>
            </div>
        
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${generateHTML(data)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}
