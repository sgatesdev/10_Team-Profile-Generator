// manager class

const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;