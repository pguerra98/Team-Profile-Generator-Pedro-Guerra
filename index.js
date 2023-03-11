const createHTML = require('./src/pagetemplate');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern'); 

const fs = require('fs'); 

const inquirer = require('inquirer');

const allArray = []; 

const accEmployee = () => {

    console.log('Enter employees below');

    return inquirer.prompt ([

        {

            type: 'list',

            name: 'role',

            message: "Please select the role of the employee",

            choices: ['Engineer', 'Intern']

        },

        {
            type: 'input',

            name: 'name',

            message: "Please provide the worker's name", 

            validate: q4input => {

                if (q4input) {

                    return true;

                } else {

                    console.log ("Please provide the worker's name!");

                    return false; 

                }

            }

        },

        {

            type: 'input',
            
            name: 'id',

            message: "Please provide the employee's ID",

            validate: q5input => {

                if  (isNaN(q5input)) {

                    console.log ("Please provide the employee's ID!")

                    return false; 

                } else {

                    return true;

                }

            }

        },

        {

            type: 'input',

            name: 'email',

            message: "Please provide the employee's email",

            validate: email => {

                check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (check) {

                    return true;

                } else {

                    console.log ('Please enter the employees email')

                    return false; 

                }

            }

        },

        {

            type: 'input',

            name: 'github',

            message: "Please provide the engineer's github login username",

            when: (input) => input.role === "Engineer",

            validate: q6input => {

                if (q6input) {

                    return true;

                } else {

                    console.log ("Please provide the engineer's github login username!")

                }

            }

        },

        {
            type: 'input',

            name: 'school',

            message: "Please provide the intern's school",

            when: (input) => input.role === "Intern",

            validate: q7input => {

                if (q7input) {

                    return true;

                } else {

                    console.log ("Please provide the intern's school!")

                }

            }

        },

        {
            type: 'confirm',

            name: 'addworkers',

            message: 'Would you like to add more team members?',

            default: false
        }
    ])
    .then(workerdata => { 

        let { name, id, email, role, github, school, addworkers } = workerdata; 

        let employee; 

        if (role === "Engineer") {

            employee = new Engineer (name, id, email, github);
            
            console.log(employee);

        } else if (role === "Intern") {

            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        allArray.push(employee); 

        if (addworkers) {

            return accEmployee(allArray); 

        } else {

            return allArray;

        }

    })

};

const accManager = () => {

    return inquirer.prompt ([

        {
            type: 'input',

            name: 'name',

            message: 'Please provide the team manager name', 

            validate: q1input => {

                if (q1input) {

                    return true;

                } else {

                    console.log ("Please enter the manager's name!");

                    return false; 
                }
            }
        },

        {
            type: 'input',

            name: 'id',

            message: "Please provide the team manager ID",

            validate: q2input => {

                if  (isNaN(q2input)) {

                    console.log ("Please enter the ID of the team manager!")

                    return false; 

                } else {

                    return true;

                }

            }

        },

        {

            type: 'input',

            name: 'email',

            message: "Please provide the team manager email",

            validate: email => {

                check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (check) {

                    return true;

                } else {

                    console.log ('Please provide the email of the manager')

                    return false; 

                }

            }

        },

        {

            type: 'input',

            name: 'offnum',

            message: "Please enter the office number for the team manager",

            validate: q3input => {

                if  (isNaN(q3input)) {

                    console.log ('Please enter the manager office number')

                    return false; 

                } else {

                    return true;

                }

            }

        }

    ])

    .then(managerinfo => {

        const  { name, id, email, offnum } = managerinfo; 

        const mana = new Manager (name, id, email, offnum);

        allArray.push(mana); 

        console.log(mana); 

    })

};

const writeFile = data => {

    fs.writeFile('./dist/index.html', data, err => {

            if (err) {

            console.log(err);

            return;
 
        } else {

            console.log("Success! In order to view the team members' profiles that were just created, navigate to the index.html file in the dist folder")

        }

    })

}; 

accManager()

  .then(accEmployee)
  
  .then(allArray => {

    return createHTML(allArray);

  })

  .then(areahtml => {

    return writeFile(areahtml);

  })

  .catch(err => {

 console.log(err);

  });