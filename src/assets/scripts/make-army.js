function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let k = i;
        let shooter = function() {
            console.log(k);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[5]();