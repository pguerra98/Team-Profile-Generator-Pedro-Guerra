const Engineer = require('../lib/Engineer');

test('get worker role', () => {

    const engineer = new Engineer('Pedro', 94, 'palencarg98@gmail.com', "pguerra98");

    expect(engineer.getRole()).toEqual("Engineer");

});

test('get engineer object', () => {

    const engineer = new Engineer('Pedro', 94, 'palencarg98@gmail.com', "pguerra98");

    expect(engineer.github).toEqual(expect.any(String));

});

test('get engineer github', () => {

    const engineer = new Engineer('Pedro', 94, 'palencarg98@gmail.com', "pguerra98");

    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));

});
