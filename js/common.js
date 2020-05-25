window.addEventListener("load", resize);
window.addEventListener("resize", resize);

function resize() {
    e = document.getElementById("sidebar")
    if (e.offsetTop < 80) {
        e.style.top = "5em";
        e.style.bottom = "";
        console.log(e.offsetTop);
    } else {
        e.style.top = "";
        e.style.bottom = "2em";
    }
}

// http://www.nextree.co.kr/p4150/
