function shortName(str){

    // return str.split(' ').splice(0,1).toUpperCase().join(' ');
    return str.split(' ')
        .map(function (el){
        return el.slice(0,1).toUpperCase() + ('.');
    }).join(' ')
}

let a = 'Golovach Lena';

console.log(a)
console.log(shortName(a));
