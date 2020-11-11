class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let fixedTitle = [];
    let array = string.split(" ");

    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        fixedTitle.push(this.capitalize(array[i]))
      } else {
        if (exceptions.includes(array[i])) {
          fixedTitle.push(array[i])
        } else {
          fixedTitle.push(this.capitalize(array[i]))
        }
      }
    }
    return fixedTitle.join(" ");
  }




  //   let array = string.split(" ")

  //   array.forEach(function(word) {
    
  //   if(word !== 'the' || word !== 'a' || word !== 'an' || word !== 'but' || word !== 'of' || word !== 'and' || word !== 'for' || word !== 'at' || word !== 'by' || word !== 'from') {
  //   word.charAt(0).toUpperCase()
  //   return word.join(" ")
  //   }
  //   })
  // }


}