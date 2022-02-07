function pall(str){
    let arr = Array.from(str);

    console.log(arr === arr.reverse(),  arr, arr.reverse())
    console.log(arr.reverse())
}

console.log(pall('asf'))