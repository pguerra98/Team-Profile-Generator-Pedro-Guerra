const createManager = function (manager) {

    return `

    <div class = "col-6 mt-6">

        <div class = "card h-80">

            <div class = "card-header">

                <h2>${manager.name}</h2>

                <h3>Manager</h3>

            </div>

            <div class="card-body">

                <p>ID: ${manager.id}</p>

                <p>Email: <a href = "mailto:${manager.email}">${manager.email}</a></p>

                <p>Office Number: ${manager.offnum}</p>

            </div>

        </div>

    </div>

    `;

}

const createEngineer = function (engineer) {

    return `

    <div class = "col-6 mt-6">

        <div class = "card h-80">

            <div class ="card-header">

                <h2>${engineer.name}</h2>

                <h3>Engineer</h3>

            </div>

            <div class="card-body">

                <p>ID: ${engineer.id}</p>

                <p>Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></p>

                <p>Github: <a href = "https://github.com/${engineer.github}">${engineer.github}</a></p>

            </div>

        </div>

    </div>

    `
}

const createIntern = function (intern) {

    return `

    <div class="col-6 mt-6">

        <div class="card h-80">

            <div class="card-header">

                <h2>${intern.name}</h2>

                <h3>Intern</h4>

            </div>

            <div class="card-body">

                <p class="id">ID: ${intern.id}</p>

                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>

                <p class="school">School: ${intern.school}</p>

            </div>

    </div>

</div>

    `

};

createHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {

        const worker = data[i];

        const role = worker.getRole(); 

        if (role === 'Manager') {

            const managertab = createManager(worker);

            pageArray.push(managertab);
        }

        if (role === 'Engineer') {

            const engineertab = createEngineer(worker);

            pageArray.push(engineertab);
        }

        if (role === 'Intern') {

            const interntab = createIntern(worker);

            pageArray.push(interntab);
        }
        
    }

    const employeetables = pageArray.join('')

    const generateTeam = generateTeamPage(employeetables); 

    return generateTeam;

}

const generateTeamPage = function (employeetables) {

  return`

  <!DOCTYPE html>

  <html lang="en">

  <head>

      <meta charset="UTF-8">

      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title> Team Profile Generator </title>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

      <link rel="stylesheet" href="style.css">

  </head>

  <body>

      <header>

          <section class="rom-adv" id="rom">

              <h1>Team Members<h1>

          </section>

      </header>

      <main>

          <div class="maincont">

              <div class="row justify-content-center">

                  ${employeetables}

              </div>

          </div>

      </main>

  </body>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  
  </html>

`;

}

module.exports = createHTML; 