function filterRangeInPlace(arr, val1, val2) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= val1 || arr[i] <= val2) {
            arr.splice(i,1);
        }
    }
    return arr;
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);