class Formatter {
  //Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  //Write a method static titleize that takes in a string and capitalizes all words 
  //in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(sentence) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let arrayOfWords = sentence.split(" ")
    for (let i = 0; i < arrayOfWords.length; i++) {
      if ( i === 0 ) {
        result.push( this.capitalize( arrayOfWords[i]))
      } else {
        if (except.includes( arrayOfWords[i])) {
          result.push( arrayOfWords[ i ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ i ] ) )
        }
      }
    }
    return result.join(' ')
  }
}