class RomanConverter {
  constructor() {}

  convert(arabNumber) {
    if (arabNumber < 4) return "I".repeat(arabNumber);
    else if (arabNumber == 4) return "IV";
    return "V";
  }
}

module.exports = RomanConverter;
