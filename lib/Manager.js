const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        //inherit name, id and email
        super(name, ID, email)
        this.officeNumber = officeNumber;
    }
    //this function inherits most of the methods
    getOfficeNumber() { return this.officeNumber }
    getRole() { return 'Manager' }
}

module.exports = Manager