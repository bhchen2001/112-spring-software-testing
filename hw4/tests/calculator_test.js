const assert = require('assert');
const { test } = require('node:test');

const Calculator = require('../src/calculator');

// TODO: write your test cases here to kill mutants

test('main: month1', () => {
    assert.throws(() => Calculator.main(0, 1, 1, 1, 1), Error("invalid month1"));
    assert.throws(() => Calculator.main(13, 1, 1, 1, 1), Error("invalid month1"));
});

test('main: month2', () => {
    assert.throws(() => Calculator.main(1, 1, 0, 1, 1), Error("invalid month2"));
    assert.throws(() => Calculator.main(12, 1, 13, 1, 1), Error("invalid month2"));
});

test('main: day1', () => {
    assert.throws(() => Calculator.main(1, 0, 1, 1, 1), Error("invalid day1"));
    assert.throws(() => Calculator.main(1, 32, 12, 1, 1), Error("invalid day1"));
});

test('main: day2', () => {
    assert.throws(() => Calculator.main(1, 1, 1, 0, 1), Error("invalid day2"));
    assert.throws(() => Calculator.main(1, 31, 1, 32, 1), Error("invalid day2"));
});

test('main: year', () => {
    assert.throws(() => Calculator.main(1, 1, 1, 1, 0), Error("invalid year"));
    assert.throws(() => Calculator.main(1, 1, 1, 31, 10001), Error("invalid year"));
});

test('main: month1 === month2 && day1 > day2', () => {
    assert.throws(() => Calculator.main(1, 2, 1, 1, 1), Error("day1 must be less than day2 if month1 is equal to month2"));
    assert.throws(() => Calculator.main(1, 2, 1, 1, 10000), Error("day1 must be less than day2 if month1 is equal to month2"));
});

test('main: month1 === month2 && day1 === day2', () => {
    assert.strictEqual(Calculator.main(1, 1, 1, 1, 1), 0);
});

test('main: month1 > month2', () => {
    assert.throws(() => Calculator.main(2, 2, 1, 1, 1), Error("month1 must be less than month2"));
});

test('calculate', () => {
    assert.strictEqual(Calculator.main(2, 1, 4, 1, 400), 60);
    assert.strictEqual(Calculator.main(2, 1, 4, 1, 500), 59);
    assert.strictEqual(Calculator.main(1, 1, 12, 31, 1), 364);
    assert.strictEqual(Calculator.main(1, 1, 12, 31, 8), 365);
});