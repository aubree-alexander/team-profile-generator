class Employee { 
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
    getName() { return this.name }
    getID() { return this.ID }
    getEmail() { return this.email }
    getRole() { return 'Employee' }
    //allows us to hone in on what type of employee we're creating
};

module.exports = Employee