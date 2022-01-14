function disemvowel(str) {

    // const vol = 'e, u, i, o, a ,';
    // let arr = Array.from(str);
    // console.log(arr)
    // arr.filter(value => value === 't')

    let newStr = str.replace(/[aeiou]+/g, '')

   return newStr


}

console.log(disemvowel("This website is for losers LOL!"));