function topSalary(obj) {
    let name = null;
    let maxSalary = 0;

    for ([key, salary] of Object.entries(obj)) {
        if (salary > maxSalary) {
            name = key;
            maxSalary = salary;
        }
    }

    return name;
}

console.log(topSalary(salaries));