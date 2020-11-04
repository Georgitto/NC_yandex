function sortByAge(arr) {
    arr.sort((val1, val2) => {
        if (val1.age > val2.age) return 1;
        return -1;
    })
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
sortByAge(arr);