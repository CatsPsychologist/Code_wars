const first = [1, 2, 3, 4];
const second = [3, 4, 5 ,6];

function intersection(a, b){
    let c = a.concat(b).sort();
    console.log(c)
    c.reduce((prev, next) => {
        let arr= []
        if (prev === next){
            return arr.push(prev);

        }
    })

}

intersection(first, second)