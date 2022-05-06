
const Manager = require('../lib/Manager.js')

test ('Creates new Manager object', () => {
    const manager = new Manager () 
    expect (typeof(manager)).toBe('object')
}) 

test ('Generates office number', () => {
    const testOfficeNumber = 'officeNumber'
    const manager = new Manager('Paul', 1, 'Paul@gmail.com', testOfficeNumber)
    expect (manager.officeNumber).toBe(testOfficeNumber)
})

test ("getRole() should return \"Manager\"", () => {
    const testRole = 'Manager'
    const manager = new Manager('Paul', 1, 'Paul@gmail.com', testRole)
    expect (manager.getRole()).toBe(testRole)
})

test("Can get email via getEmail()", () => {
    const testEmail = "test@test.com";
    const manager = new Manager("Paul", 1, testEmail);
    expect(manager.getEmail()).toBe(testEmail);
  });
