// function findNeedle(str) {
//     let result;
//      str.map((value, index) => {
//         let a = index
//
//         if(value === 'needle'){
//             result = `found the needle at position ${a}`
//         }
//     })
//     return result
// }
// let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
//
//
// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));

// const isPall = str =>{
//     return str === str.split('').reverse().join('');
// }
//
//
// console.log(isPall('тест'));
// console.log(isPall('шалаш'))



// const initials = str =>{
//
//     return str.split(' ')
//         .map(value => {
//             return value[0] + '.'
//         })
//         .join('')
//
// }
//
// console.log(initials('Bill Gates'))
// console.log(1)

// const sumDigits = num =>{
//
//     return num.toString()
//         .split('')
//         .reduce((previousValue, currentValue) => {
//             return +previousValue + +currentValue
//         },0)
//
// }
//
// console.log(sumDigits(18));
// console.log(sumDigits(32));

//
// const minMax = arr =>{
//
//     return [arr.sort().shift(),arr.sort().pop()]
//
// }
//
// console.log(minMax([4,3,2,5,1]));


//
// const capitals = str =>{
//
//     let updArr = [];
//      str.split('')
//         .map((value, index) => {
//             if(value === value.toUpperCase()){
//                 updArr.push(index)
//             }
//         })
//
//     return updArr;
// }
//
// console.log(capitals('CodEWars'))
// console.log(capitals('justForTest'))


// const unique = arr => {
//
//     let updArr = []
//     arr.map(value => {
//         updArr.push(...value)
//     })
//
//     return  Array.from(new Set(updArr));
//
// }

// console.log(unique([[1,2,3], [4,1,5], [6,7,8,5]]));


// const unique = (...str) =>{
//
//     let arr = [...str];
//     let updArr = [];
//     arr.map(value => updArr.push(...value) )
//
//     return Array.from(new Set(updArr))
// }
//
// console.log(1)
// console.log(unique([1,2,3],[4,1,5],[6,7,8,5]))
// console.log(unique())

// const phone = num =>{
//
//     let str = num.toString()
//     if(str.length !== 9) return 'You have missed something';
//
//     let updArr = str.split('')
//      updArr.splice(0,0, '(');
//      updArr.splice(4,0, ') ');
//      updArr.splice(8,0, '-')
//
//     return updArr.join('')
//
// }
//
// console.log(phone(123456789));
// console.log(phone(631294125));
// console.log(phone(214219412842))

// const findVowel = str => {
//     let counter = 0
//     const vow = ['e', 'y', 'u', 'i', 'o', 'a']
//     // let arr = str.split('')
//     for (let letter of vow) {
//         if (str.includes(letter)) {
//             counter++;
//         }
//     }
//     return counter;
// }
//
// console.log(findVowel('hello'));
// console.log(findVowel('hello world'));
// console.log(findVowel('wow you look so sexy girl'));














