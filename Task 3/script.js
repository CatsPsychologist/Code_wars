function  minMax(arr){

    // console.log(arr.length)
    // let a = arr.length - 1;
    // console.log(a);
    // let first = arr.sort().slice(0,1);
    // let last = arr.sort().slice(a, 1);
    // console.log(first);
    // console.log(last);

    // let firstOne = [arr.sort().shift()];
    // let lastOne = [arr.sort().pop()];
    // let newArray = [];
    // return newArray = firstOne.concat(lastOne);

    return [arr.sort().shift()].concat([arr.sort().pop()]);
}


console.log(minMax([2,3,1]))

// let arr1 = [1,2,3,4]
// let a = arr1.length - 1
// console.log(a)