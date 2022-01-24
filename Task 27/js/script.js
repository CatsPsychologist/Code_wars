class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort(((a, b) => a - b)).shift()
    }
}

let a = {};
let b = {};

console.log(a == b );
console.log(a === b);


