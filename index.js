const generatefullteam = require('./src/pagetemplate');

const Intern = require('./lib/Intern');

const Engineer = require('./lib/Engineer');

const Manager = require('./lib/Manager');

const inquirer = require('inquirer');

const fs = require ('fs');

const teamarray = [];

const addworker = () => {

    console.log(`Adding workers to team`);

    return inquirer.prompt ([ {

        type: 'list',

        name: 'field',

        message: "Please choose your worker's field",

        choices: ['Intern', 'Engineer']
    
    },

    {

        type: 'input',

        name: 'name',

        message: "Please provide the name of the worker",

        validate: input1 => {

            if (input1) {

                return true;

            } else {

                console.log("Please enter the worker's name!");

                return false;

            }

        }

    },

    {

        type: 'input',

        name: 'id',

        message: "Please provide the ID of the worker",

        validate: input2 => {

            if (isNaN(input2)) {

                console.log("Please enter the worker's ID!");

                return false;

            } else {

                return true;

            }

        }

    },

    {

        type: 'input',

        name: 'email',

        message: "Please provide the email of the worker",

        validate: email => {

            check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (check) {

                console.log("Please enter the worker's ID!");

                return true;

            } else {

                console.log("Please enter the worker's email!");

                return false;

            }

        }

    },

    {

        type: 'input',

        name: 'school',

        message: "Please provide the school of the worker",

        when: input => input.role === "Intern",

        validate: input3 => {

            if (input3) {

                return true;

            } else {

                console.log ("Please enter the worker's school!")

            }

        }
        
    },
    
    
    {

        type: 'input',

        name: 'github',

        message: "Please provide the github of the worker",

        when: input => input.role === "Engineer",

        validate: input4 => {

            if (input4) {

                return true;

            } else {

                console.log ("Please enter the worker's github!")

            }

        }
        
    },

    {

        type: 'confirm',

        name: 'moreworkers',

        message: 'Are there any more employees to add?',

        default: false
        
    },

    ])

    .then(workerinfo => {

        let {name, id, email, role, github, school, addworker} = workerinfo;

        let worker;

        if (role === "Engineer") {

            worker = new Engineer(name, id, email, github);

            console.log(worker);

        } else if (role === "Intern") {

            worker = new Intern(name, id, email, school);

        }

        teamarray.push(worker);

        if (moreworkers) {

            return addworker(teamarray);

        } else {

            return teamarray;
        }

    })
};

const addmanager = () => {
    return inquirer.prompt ([
        
        {

            type: 'input',
    
            name: 'name',
    
            message: "Please provide the name of the manager for this team",
    
            validate: inputm1 => {
    
                if (inputm1) {
    
                    return true;
    
                } else {
    
                    console.log("Please enter the manager's name for this team!");
    
                    return false;
    
                }
    
            }
    
        },

        {

            type: 'input',
    
            name: 'id',
    
            message: "Please provide the ID of the manager for this team",
    
            validate: inputm2 => {
    
                if (isNaN(inputm2)) {

                    console.log("Please enter the manager's ID for this team!");

                    return false;
    
                } else {
    
                    return true;
    
                }
    
            }
    
        },

        {

            type: 'input',
    
            name: 'email',
    
            message: "Please provide the email of the manager for this team",
    
            validate: email => {
                
                check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (check) {
    
                    return true;
    
                } else {
    
                    console.log("Please enter the manager's email for this team!");
    
                    return false;
    
                }
    
            }
    
        },

        {

            type: 'input',
    
            name: 'offnum',
    
            message: "Please provide the office number of the manager for this team",
    
            validate: inputm3 => {
    
                if (isNaN(inputm3)) {

                    console.log("Please enter the manager's office number for this team!");

                    return false;
    
                } else {
    
                    return true;
    
                }
    
            }
    
        },
        
    ])  

    .then(minput => {

        const {name, id , email, offnum} = minput;

        const manager = new Manager (name, id, email, offnum);

        teamarray.push(manager);

        console.log(manager);

    })

}

const writeFile = data => {
    
    fs.writeFile('./dist/index.html', data , err => {
        
        if (err) {

            console.log(err);

            return;

        } else {

            console.log("The profile has been successfuly created, please go to the index.html to view it!")
        }
    })
}

addmanager()

    .then(addworker)

    .then(teamarray => {

        return generatefullteam(teamarray);
    })

.then(phtml => {

    return writeFile(phtml);
})

.catch(err => {

    console.log(err);

});