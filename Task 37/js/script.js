// function century(year) {
//     let arr = year.toString().split('')
//     // console.log(arr)
//     let firSec = arr[0] + arr[1];
//     let thFor = +arr[2] + +arr[3];
//     let f = arr[0]
//     let tF = +arr[1] + +arr[2]
//     // console.log(firSec, thFor)
//
//     if(arr.length === 2){
//         return 1
//     }
//
//     if(arr.length === 3){
//         if(tF === 0){
//             return +f
//         }else{
//             return +f + 1
//         }
//     }
//
//     if(thFor === 0){
//         return +firSec
//     }else{
//         return +firSec + 1
//     }
//
// }

function century(year) {

    return Math.ceil(year/100);
}


console.log((century(1705)));
console.log((century(1900)));
console.log((century(1601)));
console.log((century(2000)));
console.log((century(89)));
console.log(century(523));
console.log(century(500))
//
// console.log(1)

// ой да пошло оно все нахуй