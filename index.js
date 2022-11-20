class RomanConverter {
  constructor() { }

  /**
   * @param {number} arabNumber
   */
  addUnites(arabNumber, nbOfTen = 0, unit = "", postNumber = false) {
    const repeated = "I".repeat(Math.abs(nbOfTen - arabNumber));
    return postNumber ? unit + repeated : repeated + unit;
  }

  convert(arabNumber) {
    let result = "";
    const nbOfTen = arabNumber / 10;
    const reminder = arabNumber % 10;
    result += "X".repeat(nbOfTen);

    if (reminder < 4) result += this.addUnites(reminder);
    if (reminder == 4)
      result += this.addUnites(arabNumber, nbOfTen * 10 + 1, "V");
    if (reminder > 4 && reminder <= 8)
      result += this.addUnites(reminder, 5, "V", true);
    if (reminder == 9)
      result += this.addUnites(arabNumber, nbOfTen * 10 + 1, "X");

    if (result != "") return result;
    return "";
  }
}

module.exports = RomanConverter;
