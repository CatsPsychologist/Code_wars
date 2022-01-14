const createPhoneNumber = numbers =>{
    if(numbers.length !== 10){
        return 'Please, make sure you put exactly 10 numbers'
    }
    let updArr = numbers.toString().replace(',', ' ')

    return numbers
}

console.log(createPhoneNumber([1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));