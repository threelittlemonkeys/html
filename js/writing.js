var PAGE_TITLE = "";
var PAGE_DATE = "";
var PAGE_TEXT = "";

aEL(window, "load", sidebar_reposition);
aEL(window, "resize", sidebar_reposition);

aEL(document, "DOMContentLoaded", () => {
    setInterval(() => oninput(gEBI("page_text")), 2000);
});

function sidebar_reposition() {
    let e = gEBI("sidebar");
    // 3 + 2 + 2 = 7em = 112px
    if (document.body.clientHeight < e.clientHeight + 112) {
        e.style.top = "5em";
        e.style.bottom = "";
    } else {
        e.style.top = "";
        e.style.bottom = "2em";
    }
}

function oninput(e) {
    if (PAGE_TEXT == e.innerText)
        return;
    let p = window.getSelection().focusOffset - 1;
    let w = e.innerText.charCodeAt(p)
    if (0x3131 <= w && w <= 0x3163)
        return;
    if (0xAC00 <= w && w <= 0xD7A3)
        return;

    let caret = document.createTextNode("__CARET__");
    window.getSelection().getRangeAt(0).insertNode(caret);

    let text = model1(e.innerText);
    let range = document.createRange();
    e.innerHTML = text;
    caret = gEBI("__CARET__");
    range.selectNode(caret);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    range.deleteContents();

    PAGE_TEXT = e.innerText;
}

function model1(text) {
    text = text.replace(/(abc)/g, "<span class='highlight'>$1</span>");
    text = text.replace("__CARET__", "<span id='__CARET__'></span>");
    return text;
}

/*
http://www.nextree.co.kr/p4150/
https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220499119278&proxyReferer=https:%2F%2Fwww.google.com%2F
*/
