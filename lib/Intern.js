
const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, ID, email, school) {
        //inherit name, id, and email
        super(name, ID, email)
        this.school = school;
    }
    //this function inherits most of the methods
    getSchool() { return this.school }
    getRole() { return 'Intern' }
}


module.exports = Intern
