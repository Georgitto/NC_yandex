function isEmpty(obj) {
    let i = 0;
    for (let key in obj) {
        i += 1;
        if (i > 0) return false;
    }

    return true;
}

console.log(isEmpty({pop: 1}));