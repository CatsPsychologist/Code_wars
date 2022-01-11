const flatten = (array) => {
        let updArr = array.flat()
    return updArr.flat()

}
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data));