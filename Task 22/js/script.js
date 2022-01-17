const narcissistic = (value) => {

    let str = value.toString()
    console.log(str)

    if(str.length === 1 && str % 2){
        return `${str} is narcissistic`
    }

    let arr = Array.from(str);

    arr.map(value1 => {
        // console.log(value1)
        let arr = []
        arr.push(value1 ** 3)
        console.log(arr)
        return arr.reduce((a, b ) =>{
            return a + b;
        })
    })



}

console.log(narcissistic(7));
console.log(narcissistic(371))
