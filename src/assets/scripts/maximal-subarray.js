function getMaxSubSum(arr) {
    let max = 0;
    let part = 0;

    for (let val of arr) {
        part += val;
        max = Math.max(part, max);
        part = part < 0 ? 0 : part;
    }

    return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9, 11]));