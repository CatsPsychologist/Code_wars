function disemvowel(str) {

    let newStr = str.replace(/[aeiou]+/g, '')
   return newStr
}

console.log(disemvowel("This website is for losers LOL!"));