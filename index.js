class Formatter {
  //add static methods here


  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

// Write a method static titleize that takes in a string and capitalizes all words in a sentence
// except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.

  static titleize(words) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    words = words.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      if (!exceptions.includes(words[i]) || i==0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
      }
    }
    return words.join(' ');
  }

}