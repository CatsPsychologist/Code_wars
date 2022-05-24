const number1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];  //49
const number2 = [1, 1]; // 1
const number3 = [4, 3, 2, 1, 4];  //16
const number4 = [1, 2, 1];  // 2

const maxVolume = numbers =>{

    let maxArea = 0;

    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        let currentVolume = Math.min(numbers[left], numbers[right]) * (right - left)
        maxArea = Math.max(maxArea, currentVolume);

        if(numbers[left] < numbers[right]){
            left ++;
        }else{
            right --;
        }
    }

    return maxArea;

}
// const maxVolume = numbers => {
//
//     let min = numbers.shift();
//     let max = numbers.pop();
//
//     numbers.map((value, index, array) => {
//         let min = array.shift();
//         let max = array.pop();
//         console.log(value, index)
//         console.log(min, index)
//
//     })
//
//     return console.log(min, max)
// }

// console.log(1)
console.log(maxVolume(number1));
console.log(maxVolume(number2));
console.log(maxVolume(number3));
console.log(maxVolume(number4));
