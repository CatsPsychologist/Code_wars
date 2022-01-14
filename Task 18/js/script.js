function disemvowel(str) {

    let newStr = str.replace(/[aeiouAEIOU]+/g, '')
   return newStr
}

console.log(disemvowel("This website is for losers LOL!"));