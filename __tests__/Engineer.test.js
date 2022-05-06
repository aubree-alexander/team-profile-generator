const Engineer = require('../lib/Engineer.js')


test ('Creates new Engineer object', () => {
    const engineer = new Engineer () 
    expect (typeof(engineer)).toBe('object')
}) 

test ('Creates GitHub profile link', () => {
    const GitHub = 'Aubree'
    const Engineer = new Engineer('Bob', 1, 'Bob@gmail.com', GitHub)
    expect (Engineer.GitHub).toBe(GitHub)
})