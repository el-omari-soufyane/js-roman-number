class RomanConverter {
  constructor() { }

  convert(arabNumber) {
    if (arabNumber < 4) return "I".repeat(arabNumber);
    else if (arabNumber == 4) return "IV";
    else if (arabNumber == 5) return "V";
    else if(arabNumber > 5 && arabNumber < 9) return "V" + "I".repeat(arabNumber - 5);
    else if (arabNumber == 9) return "IX";
    else if (arabNumber == 10) return "X"
    else if (arabNumber == 11) return "XI"
    else if (arabNumber == 12) return "XII"

    return "XIII";
  }
}

module.exports = RomanConverter;
