var PAGE_TEXT = "";

aEL(window, "load", sidebar_reposition);
aEL(window, "resize", sidebar_reposition);

aEL(document, "DOMContentLoaded", () => {
    setInterval(() => model1(gEBI("page_text")), 1000);
});

function sidebar_reposition() {
    var e = gEBI("sidebar");
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
    if (PAGE_TEXT == e.innerHTML)
        return;
    p = window.getSelection().focusOffset - 1;
    w = e.innerText.charAt(p);
    return;
    PAGE_TEXT = e.innerHTML;
    console.log(p);
    console.log(e.innerText.charAt(p));
    return;

    var cc = document.createElement("span");
    cc.id = "test";
    window.getSelection().getRangeAt(0).insertNode(cc);
    e.blur();
    e.innerHTML = e.innerHTML.replace("abc", "xxx");
    e.focus();
    var range = document.createRange();
    cc = gEBI("test");
    range.selectNode(cc);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    range.deleteContents();
}

/*
http://www.nextree.co.kr/p4150/
https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220499119278&proxyReferer=https:%2F%2Fwww.google.com%2F
*/
