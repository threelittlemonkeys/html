window.addEventListener("load", sidebar_reposition);
window.addEventListener("resize", sidebar_reposition);

function sidebar_reposition() {
    e = document.getElementById("sidebar");
    if (document.body.clientHeight < e.clientHeight + 112) {
        e.style.top = "5em";
        e.style.bottom = "";
    } else {
        e.style.top = "";
        e.style.bottom = "2em";
    }
}

// http://www.nextree.co.kr/p4150/
