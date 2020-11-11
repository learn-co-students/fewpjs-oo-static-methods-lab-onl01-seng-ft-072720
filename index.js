class Formatter {
  //add static methods here

  static capitalize(string){
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-'\s]+/g,'');
  }

  static titleize(string){
    const words = string.split(" ");
    const uncapWords = ["the","a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const newTitle = words.map( word => (word === words[0] || !uncapWords.includes(word)) ? this.capitalize(word) : word )

    return newTitle.join(" ")
  }

}