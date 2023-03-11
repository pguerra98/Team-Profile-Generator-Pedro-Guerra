const Intern = require('../lib/Intern');

test('get worker role', () => {

    const intern = new Intern('Pedro', 94, 'palencarg98@gmail.com', "Kennesaw State University");

    expect(intern.getRole()).toEqual("Intern");

});

test('get intern object', () => {

    const intern = new Intern('Pedro', 94, 'palencarg98@gmail.com', "Kennesaw State University");

    expect(intern.school).toEqual(expect.any(String));

});

test('get intern school', () => {

    const intern = new Intern('Pedro', 94, 'palencarg98@gmail.com', "Kennesaw State University");

    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));

});
