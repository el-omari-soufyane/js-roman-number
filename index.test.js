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
  { number: 13, expected: "XIII" },
  { number: 14, expected: "XIV" },
  { number: 15, expected: "XV" },
  { number: 16, expected: "XVI" },
  { number: 17, expected: "XVII" },
  { number: 18, expected: "XVIII" },
  { number: 19, expected: "XIX" },
  { number: 20, expected: "XX" },
  { number: 21, expected: "XXI" },
  { number: 22, expected: "XXII" },
  { number: 23, expected: "XXIII" },
  { number: 24, expected: "XXIV" },
  { number: 25, expected: "XXV" },
  { number: 26, expected: "XXVI" },
  { number: 27, expected: "XXVII" },
  { number: 28, expected: "XXVIII" },
  { number: 29, expected: "XXIX" },
  { number: 30, expected: "XXX" },
  { number: 31, expected: "XXXI" },
  { number: 32, expected: "XXXII" },
  { number: 33, expected: "XXXIII" },
  { number: 34, expected: "XXXIV" },
  { number: 35, expected: "XXXV" },
  { number: 36, expected: "XXXVI" },
  { number: 37, expected: "XXXVII" },
  { number: 38, expected: "XXXVIII" },
  { number: 39, expected: "XXXIX" },
])(
  "Arab Number : $number => Roman Number : $expected",
  ({ number, expected }) => {
    const converter = new RomanConverter();
    expect(converter.convert(number)).toBe(expected);
  }
);
