function disemvowel(str) {

    let newStr = str.replace(/[aeiouAE]+/g, '')
   return newStr
}

console.log(disemvowel("This website is for losers LOL!"));