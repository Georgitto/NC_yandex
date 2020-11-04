function inBetween(val1, val2) {
    return function (arg) {
        if (arg >= val1 && arg <= val2) return arg;
    }
}

function inArray(arr) {
    return function (arg) {
        if (arr.includes(arg)) return arg;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );
console.log( arr.filter(inArray([1, 2, 10])) );