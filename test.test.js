//Author: Polina Gannotskaya
//Test file

sum = require('../js/functions.js');

//Test 1
test('adds -1 + 2 to equal 1', () => {
    expect(addition(-1, 2)).toBe(1);
});

//Faliure test
test('adds 2 + 9 to equal 10', () => {
    expect(addition(3, 3)).toBe(11);
});