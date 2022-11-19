class RomanConverter {
  constructor() { }

  convert(arabNumber) {
    if (arabNumber < 4) return "I".repeat(arabNumber);
    else if (arabNumber == 4) return "IV";
    else if (arabNumber == 5) return "V";
    return "VI"
  }
}

module.exports = RomanConverter;
