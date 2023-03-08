const Employee = require ("./Employee");

class Intern extends Employee {

    constructor (name, id, email, github) {

        super (name, id, email);

        this.school = school;

    }

    getschool() {

        return this.school;

    }

    getrole () {

        return "Intern";

    }

}

module.exports = Intern;