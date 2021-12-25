function sumDigits(num){
    let a;

    return a = Math.abs(num)
        .toString()
        .split('')
        .reduce(function (firstValue, secondValue){
            return +firstValue + +secondValue }, 0);

}


console.log(sumDigits(18));
