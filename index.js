class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9- ']+/g, '' )
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(" ").map((word, i)=> words.includes(word) && i !== 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }
}