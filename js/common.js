window.addEventListener("load", sidebar_reposition);
window.addEventListener("resize", sidebar_reposition);

function sidebar_reposition() {
    var e = document.getElementById("sidebar");
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
    var x = document.createElement("span");
    x.id = "test";
    window.getSelection().getRangeAt(0).insertNode(x);
    e.blur();
    e.innerHTML = e.innerHTML.replace("abc", "def");
    e.focus();
    var range = document.createRange();
    x = document.getElementById("test");
    range.selectNode(x);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    range.deleteContents();
    console.log(e.innerHTML);
}

/*
http://www.nextree.co.kr/p4150/
https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220499119278&proxyReferer=https:%2F%2Fwww.google.com%2F
*/
