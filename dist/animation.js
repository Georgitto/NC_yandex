let i = 0;

function changePos(el) {
    if (i % 2 === 0) {
        el.style.left = "-20px";
    }
    else {
        el.style.left = "0";
    }
    i++;
    console.log(i);
}
