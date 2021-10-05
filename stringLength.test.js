const stringLength = require('./stringLength.js');

test('returns the correct length of simple words', () => {
    expect(stringLength('car')).toBe(3);
    expect(stringLength('banana')).toBe(6);
    expect(stringLength('subpoena')).toBe(8);
    expect(stringLength('archeology')).toBe(10);
});

test('throws exception on empty string', () => {
    expect(() => {stringLength('')}).toThrow(/MIN_LENGTH_ERROR/);
    expect(() => {stringLength(new String())}).toThrow(/MIN_LENGTH_ERROR/);
    expect(() => {stringLength("")}).toThrow(/MIN_LENGTH_ERROR/);
    expect(() => {stringLength(``)}).toThrow(/MIN_LENGTH_ERROR/);
});

test('counts special characters as well', () => {
    expect(() => {stringLength('zerumbet-platrier')}).toThrow(/MAX_LENGTH_ERROR/);
    expect(stringLength("!sdopn&osà")).toBe(10);
    expect(stringLength("éàldsq?")).toBe(7);
});

test('is not case sensitive', () => {
    expect(stringLength('femmE')).toBe(5);
    expect(() => {stringLength("yAtOUT. Il faut COMMandER.")}).toThrow(/MAX_LENGTH_ERROR/);
    expect(stringLength("camelCase")).toBe(9);
    expect(stringLength("cApiTaL")).toBe(7);
    expect(stringLength("ALLCAPS")).toBe(7);
});