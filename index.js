class RomanConverter {
  constructor() { }

  convert(arabNumber) {
    if (arabNumber < 4) return "I".repeat(arabNumber);
    else if (arabNumber == 4) return "IV";
    else if (arabNumber == 5) return "V";
    else if(arabNumber > 5 && arabNumber < 9) return "V" + "I".repeat(arabNumber - 5);
    else if (arabNumber == 9) return "IX";
    else if (arabNumber == 10) return "X"
    else if (arabNumber > 10 && arabNumber < 14) return "X" + "I".repeat(arabNumber - 10)
    else if (arabNumber == 14) return "XIV"
    else if (arabNumber == 15) return "XV";
    else if(arabNumber > 15 && arabNumber <19) return "XV" + "I".repeat(arabNumber - 15);
    else if (arabNumber == 19) return "XIX";
    return "XX";
  }
}

module.exports = RomanConverter;
