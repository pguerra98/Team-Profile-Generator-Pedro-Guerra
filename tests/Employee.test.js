const Worker = require ('../lib/Employee');

test('creates worker name', () => {

    const worker = new Worker('Pedro', 94, 'palencarg98@gmail.com');

    expect(worker.name).toEqual(expect.any(String));

    expect(worker.id).toEqual(expect.any(Number));

    expect(worker.email).toEqual(expect.any(String));

});


test('get worker role', () => {

    const worker = new Worker('Pedro', 94, 'palencarg98@gmail.com');

    expect(employee.getrole()).toEqual("Employee");

});

test('get worker name', () => {

    const worker = new Worker('Pedro', 94, 'palencarg98@gmail.com');

    expect(employee.getname()).toEqual(expect.any(String));

});


test('get worker id', () => {

    const worker = new Worker('Pedro', 94, 'palencarg98@gmail.com');

    expect(employee.getid()).toEqual(expect.any(Number));

});

test('get worker email', () => {

    const worker = new Worker('Pedro', 94, 'palencarg98@gmail.com');

    expect(employee.getemail()).toEqual(expect.any(String));

});

