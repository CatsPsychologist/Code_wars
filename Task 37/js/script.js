function century(year) {
    let arr = year.toString().split('')
    // console.log(arr)
    let firSec = arr[0] + arr[1];
    let thFor = +arr[2] + +arr[3];
    // console.log(firSec, thFor)

    if(year.length === 2){
        return 1
    }

        if(thFor === 0){
            return +firSec
        }else{
            return +firSec + 1
        }

    // if(year.length === 3){
    //     return 2
    // }


}

console.log((century(1705)));
console.log((century(1900)));
console.log((century(1601)));
console.log((century(2000)));
console.log((century(89)));
console.log(century(523))
//
// console.log(1)