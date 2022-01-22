function order(words){
    const split = words.split(' ');
    // split.map(value => {
    //     console.log(value)
    //     const filter = value.filter(a =>{
    //         console.log(a)
    //     })
    //
    // })
    const filer = split.filter(a => typeof a === 'number')
    console.log(filer)

}
// console.log(order("is2 Thi1s"));
console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// console.log(typeof  1)