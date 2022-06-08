function isUnique(str){
    //
    // let updStr = new Set()
    //
    // str.split('').map(value => updStr.add(value))
    // let updSet = Array.from(updStr).join('');
    //
    // return str === updSet;

    return new Set(str).size === str.length;
}

console.log(isUnique('abcdef'))
console.log(isUnique('abcABC'))
console.log(isUnique('123456'))
console.log(isUnique('111111'))
console.log(isUnique('abcadef'))
console.log(1 )