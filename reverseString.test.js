const reverseString = require('./reverseString.js');

test('works in normal cases', () => {
    expect(reverseString('car')).toBe('rac');
    expect(reverseString('banana')).toBe('ananab');
    expect(reverseString('subpoena')).toBe('aneopbus');
    expect(reverseString('archeology')).toBe('ygoloehcra');
});

test('works with empty string', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString(new String())).toBe('');
    expect(reverseString("")).toBe('');
    expect(reverseString(``)).toBe('');
});