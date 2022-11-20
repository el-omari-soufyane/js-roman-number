class RomanConverter {
  constructor() { }

  /**
   * @param {number} arabNumber
   */
  addUnites(arabNumber, unit = "", preNumber = false) {
    const repeated = "I".repeat(arabNumber);
    return preNumber ? repeated + unit : unit + repeated;
  }

  convert(arabNumber) {
    if (arabNumber < 4) return this.addUnites(arabNumber);
    else if (arabNumber == 4) return "IV";
    else if (arabNumber == 5) return "V";
    else if (arabNumber > 5 && arabNumber < 9) return this.addUnites(arabNumber - 5, "V");
    else if (arabNumber == 9) return "IX";
    else if (arabNumber == 10) return "X"
    else if (arabNumber > 10 && arabNumber < 14) return this.addUnites(arabNumber - 10, "X")
    else if (arabNumber == 14) return "XIV"
    else if (arabNumber == 15) return "XV";
    else if (arabNumber > 15 && arabNumber < 19) return this.addUnites(arabNumber - 15, "XV");
    else if (arabNumber == 19) return "XIX";
    else if (arabNumber == 20) return "XX";
    else if (arabNumber > 20 && arabNumber < 24) return this.addUnites(arabNumber - 20, "XX");
    else if (arabNumber == 24) return "XXIV";
    else if (arabNumber > 24 && arabNumber < 29) return this.addUnites(arabNumber - 25, "XXV");
    else if (arabNumber == 29) return "XXIX";
    return "XXX";
  }
}

module.exports = RomanConverter;
