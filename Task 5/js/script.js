function capitals(str){
    let res = [];
    let arr = str.split('');
    arr.map(function (value,index,array){

        if (value === value.toUpperCase()) {
            res.push(index);
        }

    })
    // return arr
    return res;
}

console.log(capitals('hHeDSlo'))