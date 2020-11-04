function copySorted(arr) {
    let newArr = arr.concat();
    return newArr.sort();
}

arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);