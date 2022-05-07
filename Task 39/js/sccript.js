// let arr = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]
//
// const result = array =>{
//
//     return arr.
// }
//
// console.log(result(arr))

// let price1 = [7, 1, 5, 3, 6, 4];
// let price2 = [7, 6, 4, 3 ,1];
//
// const maxProfit = price =>{
//
//    let min = price[0];
//    let profit = 0
//
//     for (let i = 0; i <= price.length; i++) {
//         let current = price[i]
//
//         if(current < min){
//             min = current
//         }
//
//         if(current - min > profit){
//             profit = current - min
//         }
//
//     }
//
//     return profit
// }
// console.log(maxProfit(price1));
// console.log(maxProfit(price2));
// console.log(1)

let price1 = [7, 1, 5, 3, 6, 4];
let price2 = [7, 6, 4, 3 ,1];

const maxProfit = price =>{


    let profit = 0;

    for (let i = 0; i <= price.length; i++) {
        if (price[i] > price[i - 1]){
            profit += price[i] - price[i - 1]
        }

    }




    return profit;
}


console.log(maxProfit(price1));
console.log(maxProfit(price2));

















