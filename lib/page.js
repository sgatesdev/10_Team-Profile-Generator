// page.js - generate HTML

// returns HTML for ALL engineers
function engineerSection(engineers) {
    let section = ``;
    
    // if there are engineers, generate content, otherwise do nothing
    if(engineers.length > -1) {
        // loop through engineers array, generate card for each engineer
        engineers.forEach(engineer => {
            let card = `
            <div class="one column" style="margin: 10px 10px 10px 5px; width: 200px;">
            <h5>${engineer.name}</h5>
            <table>
                <tr>
                    <td>Role: </td>
                    <td>${engineer.getRole()}</td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>${engineer.id}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>${engineer.email}</td>
              </tr>
              <tr>
                  <td>GitHub</td>
                  <td>${engineer.github}</td>
              </tr>
            </table>      
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
            <div class="one column" style="margin: 10px 10px 10px 5px; width: 200px;">
            <h5>${intern.name}</h5>
            <table>
                <tr>
                    <td>Role: </td>
                    <td>${intern.getRole()}</td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>${intern.id}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>${intern.email}</td>
              </tr>
              <tr>
                  <td>School</td>
                  <td>${intern.school}</td>
              </tr>
            </table>      
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
    <div class="one column" style="margin: 10px 10px 10px 5px; width: 200px;">
    <h5>${manager.name}</h5>
    <table>
        <tr>
            <td>Role: </td>
            <td>${manager.getRole()}</td>
        </tr>
        <tr>
            <td>ID</td>
            <td>${manager.id}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${manager.email}</td>
        </tr>
        <tr>
            <td>Officer Number</td>
            <td>${manager.officeNumber}</td>
        </tr>
    </table>      
    </div>`;
                
    // send back completed section to main function
    return card;
}

// builds entire page, returns that for writing to file
function createPage(supervisor, interns, engineers) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>

        <!-- Basic Page Needs
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <meta charset="utf-8">
        <title>Team Profile Generator</title>
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- Mobile Specific Metas
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/skeleton.css">

        <!-- Favicon
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <link rel="icon" type="image/png" href="images/favicon.png">

        </head>
        <body>

        <!-- Primary Page Layout
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="container">
            <div class="row">
            <div class="ten columns" style="margin-top: 5%;">
                <h4>My team!</h4> 
            </div>
            </div>
            ${managerSection(supervisor)}
            ${engineerSection(engineers)}
            ${internSection(interns)}
            <div class="row">
        
        <!--END HEAD-->

            </div>
        </div>
        <!-- End Document
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        </body>
        <div class="container">
            <div class="row">
                <div class="twelve columns"><code>Built using Skeleton CSS <span id="updated"></span></code></div>
            </div>
        </footer>
        <script src="./js/finance.js"></script>
        </html>
    `;
}

module.exports = createPage;