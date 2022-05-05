const Employee = require('./Employee.js')


class Engineer extends Employee {
    constructor(name, ID, email, GitHub) {
        //inherit name, id and email
        super(name, ID, email)
        this.GitHub = GitHub;
    }
    //this function inherits most of the methods
    getGitHub() { return this.GitHub }
    getRole() { return 'Engineer' }
}

module.exports = Engineer