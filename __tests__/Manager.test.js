//test for office number, and getrole() method


const Manager = require('../lib/Manager.js')

test ('Creates new Manager object', () => {
    const manager = new Manager () 
    expect (typeof(manager)).toBe('object')
}) 

test ('Generates office number', () => {
    const OfficeNumber = 3
    const Manager = new Manager('Paul', 1, 'Paul@gmail.com', OfficeNumber)
    expect (Manager.OfficeNumber).toBe(OfficeNumber)
})