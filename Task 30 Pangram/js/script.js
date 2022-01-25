function isPangram(str){
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    let low = str.toLowerCase();

    // str.includes(alphabet) ? true : false;
    console.log(str.includes(alphabet))


}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))