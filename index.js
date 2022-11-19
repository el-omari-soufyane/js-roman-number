class RomanConverter {
  constructor() {}

  convert(arabNumber) {
    if (arabNumber == 1) return "I";
    else if (arabNumber == 2) return "II";
    return "III";
  }
}

module.exports = RomanConverter;
