function getAverageAge(arr) {
    let sum = 0;

    for (let val of arr) {
        sum += val.age;
    }

    return sum/arr.length;
}

console.log(getAverageAge(arr));