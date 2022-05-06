const Engineer = require('../lib/Engineer.js')


test ('Creates new Engineer object', () => {
    const engineer = new Engineer () 
    expect (typeof(engineer)).toBe('object')
}) 


test ('Creates GitHub profile link', () => {
    const testGitHub = 'aubree-alexander'
    const engineer = new Engineer('Bob', 1, 'Bob@gmail.com', testGitHub)
    expect (engineer.getGitHub()).toBe(testGitHub)
})


test ('Generates the engineer role', () => {
    const testRole = 'Engineer'
    const engineer = new Engineer('Paul', 1, 'Paul@gmail.com', testRole)
    expect (engineer.getRole()).toBe(testRole)
})


test ("Can set GitHub account via constructor", () => {
    const testGitHub = "aubree-alexander";
    const engineer = new Engineer("John", 1, "test@test.com", testGitHub);
    expect(engineer.GitHub).toBe(testGitHub);
  });





