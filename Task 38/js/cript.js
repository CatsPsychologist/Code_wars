let a =[
    'header','menu','menu-item','menu-item','menu-item', 'footer','menu','link','link','link','link'
]
console.log(a)

let obj = {};

for(let i = 0; i < a.length; i++){

    let cur = a[i]

    if(obj[cur]){
        obj[cur] += 1;
    }else{
        obj[cur] = 1;
    }

     // console.log(a[i])
}
let res = Object.keys(obj).sort((a, b) => obj[b] - obj[a] )
console.log(res)


// const result = a =>{
//
//
//     let obj = {};
//
//     return a.map((value, index, array) => {
//
//
//     })
//
//
//     // return a.map(value => {
//     //     console.log(value)
//     // })
// }
// console.log(result(a))