const oddOrEven = array => {
    if (array.toString() === '0' || array.length === 0){
        return 'even'
    }
    let result = array.reduce((a,b) => a + b)

    if(result % 2){
        return 'odd'
    }else{
        return 'even'
    }

}

console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([]));
console.log(oddOrEven([1, 2, 3]));
console.log(oddOrEven([1, 2, 3, 1]));
