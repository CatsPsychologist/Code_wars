function solution(roman){
    let romanNumbers = new Map();

    romanNumbers.set('I',1);
    romanNumbers.set('V',5);
    romanNumbers.set('X',10);
    romanNumbers.set('L',50);
    romanNumbers.set('C',100);
    romanNumbers.set('D',500);
    romanNumbers.set('M',1000);

    let result = []

    for (let entry of romanNumbers){
        // console.log(entry)
        for (let i = 0; i < roman.length; i ++){
            // console.log(roman[i])
            if (roman[i] === entry[0]){

                result.push(entry[1]);

            }
        }
    }

    let c = result.reduce((a, b) =>{
            return a + b;
        });
    let updResult

    if(roman.length > 1 && roman[0] === 'I'){
        return updResult = c - 2
    }
    return c;
}

console.log(solution('XXI'));
console.log(solution('I'));
console.log(solution('IV'));
console.log(solution('MMVIII'));
console.log(solution('MDCLXVI'));
console.log(2)