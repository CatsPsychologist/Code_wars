const chunk = (array, size) => {
    // let updArr = [];
    //shit that I cant solve sorry :\ maybe later
    let updArr = array.splice(0,size);
    console.log(updArr)
    let updArr2 = array.splice(0,size)
    console.log(updArr2)
    let updArr3 = array.splice(0,size)
    console.log(updArr3)
    let updArr4 = array.splice(0,size)
    console.log(updArr4)
    let newArr = updArr.concat([updArr2])
    // let newArr = updArr.concat(updArr2).concat(updArr3).concat(updArr4)
    return newArr;



    // array.map((value, index, array1) => {
    //
    //     // console.log(array)
    //     updArr = array1.splice(0,size)
    //     updArr.concat(updArr)
    //     console.log(updArr)
    //     // console.log(updArr.concat(updArr))
    //
    //     // console.log(updArr.join(''))
    //
    //
    // })

    // return updArr;
    // array.map(value => {
    //     updArr = value.splice(0,size)
    //     return updArr ;
    // })
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3))