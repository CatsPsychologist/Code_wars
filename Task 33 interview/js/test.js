
let arr = [
    {id: 10, parent: null},
    {id: 20, parent: 10},
    {id: 30, parent: 10},
    {id: 40, parent: 20}
]

let arr2 = [
    {id: 10, parent:[
            {id: 20, parent: 10},
            {id: 30, parent: 10}
        ]
]


function dom(arg){

    let result = {};

     arr.map((value, index) => {
        console.log(value.id, value.parent)


        if(value.parent === null){

            let a = value;
            result = a;
            // console.log(result)
            // console.log(value.id, value.parent)
        }
       if (value.parent === value.id){

            result.value = value

        }


    })


    return result
}

console.log(dom(arr))
console.log(34)
// let arr2 =
// {
//     id: 10, parent: null,
//     id: 20, parent: 10,
//     id: 30, parent: 10,
//     id: 40, parent: 20
// }
//
// {
//     id: 10,
//         children: [
//     {id: 20, children: [
//             id: 40
// ]
// ]