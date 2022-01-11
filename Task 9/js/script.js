const reverse = (array) => {
    let newArr = [];

    for (let i = array.length - 1; i >= 0;i --){
        newArr.push(array[i]);
    }

    return newArr;
};

const data = [1, 2, 3];
console.log(reverse(data));
