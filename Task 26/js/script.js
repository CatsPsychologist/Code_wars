function highAndLow(numbers){

    let arr = [];
    let updNum = numbers.split(' ');

    updNum.map(value => {
        arr.push(+value)
    })

    let updArr = arr.sort((a, b) => a - b);

    let low = updArr[0]

    if(updArr.length === 1){
        return `${low} ${low}`
    }

    return `${updArr.pop()} ${updArr.shift()}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("2 3 1 5 4"));
console.log(highAndLow('42'))
console.log(1)
