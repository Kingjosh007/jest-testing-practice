const capitalize = require('./capitalize.js');

test('works with lowercase only', () => {
    expect(capitalize('car')).toBe('Car');
    expect(capitalize('banana')).toBe('Banana');
    expect(capitalize('subpoena')).toBe('Subpoena');
    expect(capitalize('archeology')).toBe('Archeology');
});

test('works with mixed cases', () => {
    expect(capitalize('NGOs all around THE woRlD')).toBe('NGOs all around THE woRlD');
    expect(capitalize('testWithCamelCase')).toBe('TestWithCamelCase');
});

test('works with only one char', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
    expect(capitalize('p')).toBe('P');
});

test('works with empty strings', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize(new String())).toBe('');
    expect(capitalize("")).toBe('');
    expect(capitalize(``)).toBe('');
});