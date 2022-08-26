const fs = require('fs');

// generates HTML using template literal and team array from index.js
function generateHTML(team) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid custom-header">
            <div class="container text-center text-white">
                <h1 class="display-4">My Team</h1>
            </div>
        </header>
        <main>
            <section class="container mx-auto">
                <div class="card-deck">
                    ${team.map(employee => { 
                        return `<div class="card shadow">
                        <div class="card-header text-white custom-card-header">
                            <h2 class="card-title">${employee.name}</h2>
                            <h4 class="card-title">${employee.getRole()}</h4>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">
                                    ${ 
                                        employee.getRole() === 'Manager'
                                        ? `Office Number: ${employee.officeNum}`
                                        : employee.getRole() === 'Engineer'
                                        ? `GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`
                                        : `School: ${employee.school}`
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>`;
                    }).join('\n                    ')}
                </div>
            </section>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
    </html>`;

    let css = `
    .custom-header {
        background-color: #28343b;
    }
    .custom-card-header {
        background: #1c5a7a;
    }
    .custom-card {
        border: solid 2px #28343b;
    }
    a {
        color: #1c5a7a;
    }
    a:hover {
        color: #4891b8;
    }
    `;

    fs.writeFile('./build/index.html', html, (err) => {
        err ? console.log(err) : console.log('HTML successfully made');
    });
    fs.writeFile('./build/style.css', css, (err) => {
        err ? console.log(err) : console.log('CSS successfully made');
    });
}

module.exports = generateHTML;