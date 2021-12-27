function accum(str){

    return str.toUpperCase().split('')
        .map(
            function (el,i){
                return el += el.repeat(i).toLowerCase();
    }
        ).join('-');
}

console.log(accum('abcd'));