// page.js - generate HTML

// returns HTML for ALL engineers
function engineerSection(engineers) {
    let section = ``;
    
    // if there are engineers, generate content, otherwise do nothing
    if(engineers.length > -1) {
        // loop through engineers array, generate card for each engineer
        engineers.forEach(engineer => {
          let card = `
            <div class="card m-2" style="width: 18rem;">
            <div class="card-header">
            ${engineer.name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${engineer.getRole()}</li>
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.github}</li>
            </ul>
            </div>`;
            
          // add to section variable to build section out
          section += card;
        })
    }
    // send back completed section to main function
    return section;
}

// returns HTML for all interns
function internSection(interns) {
    let section = ``;
    
    // if there are interns, generate content, otherwise do nothing
    if(interns.length > -1) {
        // loop through interns array, generate card for each intern
        interns.forEach(intern => {
          let card = `
            <div class="card m-2" style="width: 18rem;">
            <div class="card-header">
            ${intern.name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${intern.getRole()}</li>
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">GitHub: ${intern.school}</li>
            </ul>
            </div>`;

          // add to section variable to build section out
          section += card;
        })
    }
    // send back completed section to main function
    return section;
}
// returns HTML for manager
function managerSection(manager) {
    let card = `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-header">
    ${manager.name}
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Role: ${manager.getRole()}</li>
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">GitHub: ${manager.officeNumber}</li>
    </ul>
    </div>`;
    
                
    // send back completed section to main function
    return card;
}

// builds entire page, returns that for writing to file
function createPage(supervisor, interns, engineers) {
    return `
    <!doctype html>
    <!--THIS IS A SAMPLE PAGE WITHOUT CARDS USED DURING DEBUGGING-->
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    
      <title>Team Profile Generator</title>
      </head>
      <body>
        <div class="jumbotron bg-info text-light p-5 d-flex justify-content-center">
            <div class="row">
                <h1 class="col-md-12 display-4 d-flex justify-content-center">My team!</h1><br>
            </div>
        </div>

        <!-- CARDS GO INSIDE THIS CONTAINER DIV -->
        <div class="row w-75 mx-auto">
        ${managerSection(supervisor)}
        ${engineerSection(engineers)}
        ${internSection(interns)}   
        </div>
    
    </body>
    </html>
    `;
}

module.exports = createPage;