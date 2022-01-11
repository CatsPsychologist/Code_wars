// const fromPairs = (array) => {
//     let obj = {};
//     // obj.c = 2
//     // console.log(obj)
//     return array.map(value => {
//         console.log(value);
//         for (let i = 0;i < value.length; i++){
//             console.log(value[i])
//             obj.value[i][0] = value[i][1];
//             console.log(obj);
//             // console.log(first,last)
//         }
//         // let first = value[0]
//         // let last = value[1]
//         // console.log(first,last)
//
//         // return obj;
//     })
//
//
// }
const fromPairs = (array) => array.reduce((acc, value) => {
    if (Array.isArray(value)) {
        acc[value[0]] = value[1];
    }
    return acc;
}, {});

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data))

