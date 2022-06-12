function flatten(array){

    let result = []
    array.map(value => {
        if(Array.isArray(value)){
            const secondFunc = flatten(value)
            secondFunc.map(value1 => {
                result.push(value1)
            })
        }else{
            result.push(value)
        }
    })

    return result

}

console.log(flatten([[1], [[2,3]], [[[4]]]]));
console.log(3)
