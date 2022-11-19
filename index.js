class RomanConverter {
  constructor() { }

  convert(arabNumber) {
    if (arabNumber < 4) return "I".repeat(arabNumber);
    else if (arabNumber == 4) return "IV";
    else if (arabNumber == 5) return "V";
    else if (arabNumber == 6) return "VI";
    else if (arabNumber == 7) return "VII";
    else if (arabNumber == 8) return "VIII";
    return "IX";
  }
}

module.exports = RomanConverter;
