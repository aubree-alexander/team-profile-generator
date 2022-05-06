//test for school, getschool() method, and that getrole() returns intern
//aa - come back here

const Intern = require('../lib/Intern.js')

test ('Creates new Intern object', () => {
    const intern = new Intern () 
    expect (typeof(intern)).toBe('object')
}) 

test ('Populates intern school', () => {
    const School = 'UW Madison'
    const Intern = new Intern('Bill', 1, 'Bill@gmail.com', School)
    expect (Intern.School).toBe(School)
})