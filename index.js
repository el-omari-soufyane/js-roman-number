class RomanConverter {
  constructor() {}

  convert(arabNumber) {
    if (arabNumber < 4) return "I".repeat(arabNumber);
    return "IV";
  }
}

module.exports = RomanConverter;
