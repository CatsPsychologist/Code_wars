function towerBuilder(nFloors) {
    let arr = [];

    towerBuilder(arr){
        arr.push('*')
    }


    // arr.length === nFloors ? return arr :
    if (arr.length === nFloors){

        return arr
    }
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));