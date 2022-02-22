function findUniq(arr) {
    let arr1 = [arr[0]];
    let arr2 = [arr[1]];
    // console.log(arr1, arr2)
    for(let i = 0; i < arr.length; i ++){

        if(arr1[0] === arr[i]){
            arr1.push(arr[i])
        }
        if(arr2[0] === arr[i]){
            arr2.push(arr[i])
        }
        // console.log(arr[i])
        // let num = arr[0]
        // if(arr[0] !== arr[i]){
        //     return arr[0]
        // }else{
        //     return arr[i]
        // }
    }
    console.log(arr1, arr2)
    // return  arr1.length < arr2.length ? arr1[0] : arr2[0]

}

// console.log(1)
console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

