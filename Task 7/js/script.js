function digitalRoot(num){

    let first = num.toString().split('')
        .reduce(function (firstValue, secondValue){
            return +firstValue + +secondValue }, 0)

    if (first.toString().length === 1) return first;

    return digitalRoot(+first);

}

console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))