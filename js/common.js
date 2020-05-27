window.addEventListener("load", sidebar_reposition);
window.addEventListener("resize", sidebar_reposition);

function sidebar_reposition() {
    e = document.getElementById("sidebar");
    // 3 + 2 + 2 = 7em = 112px
    if (document.body.clientHeight < e.clientHeight + 112) {
        e.style.top = "5em";
        e.style.bottom = "";
    } else {
        e.style.top = "";
        e.style.bottom = "2em";
    }
}

function model1(e) {
    txt = e.innerHTML;
    console.log(txt);
}

// http://www.nextree.co.kr/p4150/
