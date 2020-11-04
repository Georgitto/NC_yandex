let i = 0;
let k = 0;

function changePos_covid(el) {
    if (i % 2 === 0) {
        el.style.left = "-20px";
    }
    else {
        el.style.left = "0";
    }
    i++;
}

function changePos_news(el) {
    if (k % 2 === 0) {
        el.style.left = "-20px";
    }
    else {
        el.style.left = "0";
    }
    k++;
}