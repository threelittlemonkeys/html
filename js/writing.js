var PAGE_TITLE = "";
var PAGE_DATE = "";
var PAGE_TEXT = "";

aEL(window, "load", sidebar_reposition);
aEL(window, "resize", sidebar_reposition);

aEL(document, "DOMContentLoaded", () => {
    setInterval(() => model1(gEBI("page_text")), 2000);
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
    if (PAGE_TEXT == e.innerText)
        return;
    p = window.getSelection().focusOffset - 1;
    w = e.innerText.charCodeAt(p)
    if (0x3131 <= w && w <= 0x3163)
        return;
    if (0xAC00 <= w && w <= 0xD7A3)
        return;
    PAGE_TEXT = e.innerText;

    var caret = document.createElement("span");
    caret.id = "caret";
    window.getSelection().getRangeAt(0).insertNode(caret);

    e.innerHTML = e.innerHTML.replace(/(?<!>)(abc)(?!<)/, "<span class='highlight'>$1</span>");

    var range = document.createRange();
    caret = gEBI("caret");
    range.selectNode(caret);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    range.deleteContents();

    console.log(PAGE_TEXT);
}

/*
http://www.nextree.co.kr/p4150/
https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220499119278&proxyReferer=https:%2F%2Fwww.google.com%2F
*/
