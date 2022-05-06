
const Intern = require('../lib/Intern.js')

test ('Creates new Intern object', () => {
    const intern = new Intern () 
    expect (typeof(intern)).toBe('object')
}) 


test ("Can set up school via constructor", () => {
    const testSchool = "UW Madison";
    const intern = new Intern("John", 1, "test@test.com", testSchool);
    expect(intern.school).toBe(testSchool);
  });


test ('creates school', () => {
    const testSchool = 'UW Madison'
    const intern = new Intern('Bob', 1, 'Bob@gmail.com', testSchool)
    expect (intern.getSchool()).toBe(testSchool)
})


test ("getRole() should return \"Intern\"", () => {
    const testRole = 'Intern'
    const intern = new Intern('Paul', 1, 'Paul@gmail.com', testRole)
    expect (intern.getRole()).toBe(testRole)
})
