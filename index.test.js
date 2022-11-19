const assert = require("assert").strict;
const { expect, test } = require("@jest/globals");
const RomanConverter = require("./index");

test.each([
  { number: 1, expected: "I" },
  { number: 2, expected: "II" },
])(
  "Arab Number : $number => Roman Number : $expected",
  ({ number, expected }) => {
    const converter = new RomanConverter();
    expect(converter.convert(number)).toBe(expected);
  }
);
