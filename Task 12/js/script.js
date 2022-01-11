const unique = (array) => {
    let newArr = new Set(array);
    return newArr;
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data));