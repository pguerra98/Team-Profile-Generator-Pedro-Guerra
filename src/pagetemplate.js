// Below will create the manager card

const createManager = function (manager) {
    
    return `

        <div class = "col-6 mt-6">

            <div class = "card h-80">

                <div class = "card-header">

                    <h2>${manager.name}</h2>

                        <h3>Manager &#9734;</h3>

                </div>

                <div> class = "card-body">
            
                    <p class = "id"> ID: ${manager.id}</p>

                    <p class = "email"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>

                    <p class = "offnum"> Office Number: ${manager.offnum}</p>

                </div>
        
            </div>

        </div>

    `;

}

// Below will create the intern card

const createIntern = function (intern) {

    return `

           <div class = "col-6 mt-6">

            <div class = "card h-80">

                <div class = "card-header">

                    <h2>${intern.name}</h2>

                        <h3>Intern &#9997;</h3>

                </div>

                <div> class = "card-body">
            
                    <p class = "id"> ID: ${intern.id}</p>

                    <p class = "email"> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>

                    <p class = "offnum"> Office Number: ${intern.offnum}</p>

                </div>
        
            </div>

        </div>
    `;
}

// Below will create the engineer card

const createEngineer = function (engineer) {

    return `

           <div class = "col-6 mt-6">

            <div class = "card h-80">

                <div class = "card-header">

                    <h2>${engineer.name}</h2>

                        <h3>Engineer &#9881;;</h3>

                </div>

                <div> class = "card-body">
            
                    <p class = "id"> ID: ${engineer.id}</p>

                    <p class = "email"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>

                    <p class = "offnum"> Office Number: ${engineer.offnum}</p>

                </div>
        
            </div>

        </div>
    `;
}

// Below will sort the information depending on if a manager, intern, or engineer is selected

generatepagetemplate = (data) => {
    
    pagearray = [];

    for (let i=0; i < data.length; i++) {

        const worker = data[i];

        const area = worker.Area();

        if (area === 'manager') {
            const managertab = createManager(worker);

            pagearray.push(managertab);
        }

        if (area === 'engineer') {
            const engineertab = createEngineer(worker);

            pagearray.push(engineertab);
        }

        if (area === 'intern') {
            const interntab = createIntern(worker);

            pagearray.push(interntab);
        }
    }

    const workercards = pagearray.join('')

    const generatefullteam = generatefullteam(workercards);

    return generatefullteam

}

// Below will generate the HTML file

const generatefullteam = function (workercards) {
    
    return `

    <!DOCTYPE html>

    <html lang="en">
    
    <head>
    
        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Team Profile Generator</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <link rel="stylesheet" href="style.css">
    
    </head>
    
    <body>
    
        <header>
    
            <section class = "rom" id = "rom">
    
                <section class = "rom-adv h1 w-1 text-center" id = "rom-text">
    
                    Team Profile Generator
    
                </section>
    
            </section>
    
        </header>
    
        <main>
    
            <section class = "maincont">
    
                <section class = "row justify-content-center" id="generated-cards">
    
                    ${workercards}
    
                </section>
    
            </section>
    
        </main>
    
    </body>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

`;

}

module.exports = generatefullteam;