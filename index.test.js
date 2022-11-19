const assert = require("assert").strict;
const { expect, test } = require("@jest/globals");
const RomanConverter = require("./index");

test.each([
  { number: 1, expected: "I" },
  { number: 2, expected: "II" },
  { number: 3, expected: "III" },
  { number: 4, expected: "IV" },
  { number: 5, expected: "V" },
  { number: 6, expected: "VI" },
  { number: 7, expected: "VII" },
  { number: 8, expected: "VIII" },
  { number: 9, expected: "IX" },
  { number: 10, expected: "X" },
  { number: 11, expected: "XI" },
  { number: 12, expected: "XII" },


  
])(
  "Arab Number : $number => Roman Number : $expected",
  ({ number, expected }) => {
    const converter = new RomanConverter();
    expect(converter.convert(number)).toBe(expected);
  }
);
