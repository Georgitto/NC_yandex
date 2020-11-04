let calculator = {
    val1: 0,
    val2: 0,
    read: (num1, num2) => {
        this.val1 = num1;
        this.val2 = num2;
    },
    sum: () => {
        return this.val1 + this.val2;
    },
    mul: () => {
        return this.val1 * this.val2;
    }
};

calculator.read(1, 2);
console.log(calculator.sum());
console.log(calculator.mul());