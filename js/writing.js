var CARRET_POSITION = -1;

aEL(window, "load", sidebar_reposition);
aEL(window, "resize", sidebar_reposition);

aEL(document, "DOMContentLoaded", function() {
    aEL(gEBI("page_text"), "click", model1);
    aEL(gEBI("page_text"), "keyup", model1);
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

function model1(el, ev) {
    p = window.getSelection().focusOffset;
    if (CARRET_POSITION >= 0 && p == CARRET_POSITION)
        return;
    CARRET_POSITION = p;
    console.log(p);
    return;
    if (PAGE_TEXT == el.innerHTML)
        return;
    console.log(ev);
    return;
    var x = document.createElement("span");
    x.id = "test";
    window.getSelection().getRangeAt(0).insertNode(x);
    e.blur();
    e.innerHTML = e.innerHTML.replace("abc", "def");
    e.focus();
    var range = document.createRange();
    x = gEBI("test");
    range.selectNode(x);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    range.deleteContents();
}

/*
http://www.nextree.co.kr/p4150/
https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220499119278&proxyReferer=https:%2F%2Fwww.google.com%2F
*/
