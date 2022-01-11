const isEqual = (firstArray, secondArray) => {
   if(JSON.stringify(firstArray) === JSON.stringify(secondArray)){
       return true;
   }else{
       return false;
   }
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.log(isEqual(arr1, arr4));