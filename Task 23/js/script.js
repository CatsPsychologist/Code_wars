function arrayDiff(a, b) {
    if (a.length < b.length || a.length === 0 || b.length === 0){
        return a;
    }

    let result = a.filter(e => !b.includes(e));

    return result;
    // let result = [];
    // for(let i = 0; i < b.length; i ++){
    //     if(a.includes(b[i])){
    //         a.map(value => {
    //             console.log(value)
    //             if (value === b[i]){
    //                 console.log(value)
    //             }
    //         })
            // console.log(a.map(value => value))
            // let arr = []
            // arr = a.filter(num => num === b[i])
            // return arr
    //     }
    // }
}

console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([1,2,3], [1,2]));
