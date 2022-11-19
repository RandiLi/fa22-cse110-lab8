// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(123)456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('(098)765-4321 is a phone number', () => {
    expect(functions.isPhoneNumber('(098)765-4321')).toBe(true);
});

test('(1234)56-7890 is not a phone number', () => {
    expect(functions.isPhoneNumber('(1234)56-7890')).toBe(false);
});

test('1234567890 is not a phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('rhli@ucsd.edu is an email', () => {
    expect(functions.isEmail('rhli@ucsd.edu')).toBe(true);
});

test('test@gmail.com is an email', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true);
});

test('fail@unit.test is not an email', () => {
    expect(functions.isEmail('fail@unit.test')).toBe(false);
});

test('google.com is not an email', () => {
    expect(functions.isEmail('google.com')).toBe(false);
});

test('a123 is a strong password', () => {
    expect(functions.isStrongPassword('A123')).toBe(true);
});

test('A456 is a strong password', () => {
    expect(functions.isStrongPassword('A456')).toBe(true);
});

test('1234 is not a strong password', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});

test('A is not a strong password', () => {
    expect(functions.isStrongPassword('A')).toBe(false);
});

test('11/20/2022 is a date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test('20/11/2022 is a date', () => {
    expect(functions.isDate('20/11/2022')).toBe(true);
});

test('2022/11/20 is not a date', () => {
    expect(functions.isDate('2022/11/20')).toBe(false);
});

test('11-20-2022 is not a date', () => {
    expect(functions.isDate('11-20-2022')).toBe(false);
});

test('#FFFFFF is a hex color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('FFFFFF is a hex color', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('255,0,255 is not a hex color', () => {
    expect(functions.isHexColor('255,0,255')).toBe(false);
});

test('#FFFFFFF is not a hex color', () => {
    expect(functions.isHexColor('#FFFFFFF')).toBe(false);
});