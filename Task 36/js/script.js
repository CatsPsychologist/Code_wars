function findUniq(arr) {

   return arr.reduce((prev,next) =>{
        return  prev !== next ? prev : next
   })
}

// console.log(1)
console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 0, 1, 0 ]));

