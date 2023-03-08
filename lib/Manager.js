const Employee = require('./Employee');

class Manager extends Employee {

    constructor (name, id, email, offnum) {

        super (name, id, email);

        this.offnum = offnum;

    }

    getoffnum() {

        return this.offnum;

    }

    getrole () {

        return "Manager";

    }

}

module.exports = Manager;