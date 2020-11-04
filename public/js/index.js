let i = 0;

function changePos(el) {
    let k = i;
    if (k % 2 === 0) {
        el.style.left = "-20px";
    }
    else {
        el.style.left = "0";
    }
    k++;
}
