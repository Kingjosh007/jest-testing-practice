const stringLength = require('./stringLength.js');

test('returns the correct length of simple words', () => {
    expect(stringLength('car')).toBe(3);
    expect(stringLength('banana')).toBe(6);
    expect(stringLength('subpoena')).toBe(8);
    expect(stringLength('archeology')).toBe(10);
    expect(stringLength('pneumonoultramicroscopicsilicovolcanoconiosis')).toBe(45);
});

test('works with empty string', () => {
    expect(stringLength('')).toBe(0);
    expect(stringLength(new String())).toBe(0);
    expect(stringLength("")).toBe(0);
    expect(stringLength(``)).toBe(0);
});

test('counts special characters as well', () => {
    expect(stringLength('zerumbet-platrier')).toBe(17);
    expect(stringLength("   !sdopn&osà")).toBe(13);
    expect(stringLength("--è_opajaoqoe&oéàldsq?")).toBe(22);
});

test('is not case sensitive', () => {
    expect(stringLength('femme battante')).toBe(14);
    expect(stringLength("yAtOUT. Il faut COMMandER.")).toBe(26);
    expect(stringLength("WORKS WITH ALL CAPS")).toBe(19);
});