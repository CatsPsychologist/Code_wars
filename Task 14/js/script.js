// const flatten = (array) => {
//         let updArr = array.flat()
//     return updArr.flat()
//
// }
// const data = [1, 2, [3, 4, [5]]];
// console.log(flatten(data));

const arr = [1, 2, 3, 4, 5];

// function duplicate(arr){
//     // let updArr = [];
//     // return updArr = arr.concat(arr);
//     return arr.concat(arr);
//
// }

const duplicate2 = arr => arr.concat(arr)

console.log(duplicate2(arr))
