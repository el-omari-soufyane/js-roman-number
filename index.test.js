const assert = require("assert").strict;
const { expect, test } = require("@jest/globals");
const RomanConverter = require("./index");

test.each([{ number: 1, expected: "I" }])(
  "Arab Number : $number => Roman Number : $expected",
  ({ number, expected }) => {
    const converter = new RomanConverter();
    expect(converter.convert(number)).toBe(expected);
  }
);
