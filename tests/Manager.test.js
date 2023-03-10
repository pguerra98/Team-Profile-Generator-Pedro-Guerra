const Manager = require('../lib/Manager');

test('get manager object', () => {

    const manager = new Manager('Pedro', 94, 'palencarg98@gmail.com', 0)

    expect(manager.offnum).toEqual(expect.any(Number));

});

test('get worker role', () => {

    const manager = new Manager('Pedro', 94, 'palencarg98@gmail.com');

    expect(manager.getrole()).toEqual("Manager");

});