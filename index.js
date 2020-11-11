class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    string = this.capitalize(string);
    let wordArray = string.split(' ');
    let returnArray = [];

    for (let i = 0; i < wordArray.length; i++) {
      if (exceptions.includes(wordArray[i])) {
        returnArray.push(wordArray[i]);
      } else {
        returnArray.push(this.capitalize(wordArray[i]))
      }
    }
    return returnArray.join(" ");
  }
}