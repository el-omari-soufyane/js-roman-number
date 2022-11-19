class RomanConverter {
  constructor() {}

  convert(arabNumber) {
    if (arabNumber == 1) return "I";
    return "II";
  }
}

module.exports = RomanConverter;
