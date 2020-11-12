class Formatter {

  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize (string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '');
  }

  static titleize (string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizedSentence = []
    let splitSentence = string.split(" ")
    for (let w = 0; w < splitSentence.length; w++ ) {
      if (w === 0) {
        titleizedSentence.push(this.capitalize(splitSentence[0]))
      } else {
        if (exceptions.includes(splitSentence[w])) {
          titleizedSentence.push(splitSentence[w])
        } else {
          titleizedSentence.push(this.capitalize(splitSentence[w]))
        }
      }
    }
    return titleizedSentence.join(" ")
  }

}