class RomanConverter {
  constructor() { }
  
  /**
   * @param {number} arabNumber
   */
  addUnites(arabNumber) {
    return "I".repeat(arabNumber);
  }

  convert(arabNumber) {
    if (arabNumber < 4) return this.addUnites(arabNumber);
    else if (arabNumber == 4) return "IV";
    else if (arabNumber == 5) return "V";
    else if (arabNumber > 5 && arabNumber < 9) return "V" + this.addUnites(arabNumber - 5);
    else if (arabNumber == 9) return "IX";
    else if (arabNumber == 10) return "X"
    else if (arabNumber > 10 && arabNumber < 14) return "X" + this.addUnites(arabNumber - 10)
    else if (arabNumber == 14) return "XIV"
    else if (arabNumber == 15) return "XV";
    else if (arabNumber > 15 && arabNumber < 19) return "XV" + this.addUnites(arabNumber - 15);
    else if (arabNumber == 19) return "XIX";
    else if (arabNumber == 20) return "XX";
    else if (arabNumber > 20 && arabNumber < 24) return "XX" + this.addUnites(arabNumber - 20);
    else if (arabNumber == 24) return "XXIV";
    else if (arabNumber > 24 && arabNumber < 29) return "XXV" + this.addUnites(arabNumber - 25);
    else if (arabNumber == 29) return "XXIX";
    return "XXX";
  }
}

module.exports = RomanConverter;
