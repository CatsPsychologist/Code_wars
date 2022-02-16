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









