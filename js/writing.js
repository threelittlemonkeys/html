var PAGE_TITLE = "";
var PAGE_DATE = "";
var PAGE_TEXT = "";

var DICT = Array();
DICT = {"tom": undefined, "george": undefined}; // TODO

aEL(window, "load", sidebar_reposition);
aEL(window, "resize", sidebar_reposition);

aEL(document, "DOMContentLoaded", () => {
    aEL(gEBI("page_text"), "keyup", () => page_text_oninput(gEBI("page_text")));
    // setInterval(() => oninput(gEBI("page_text")), 1000);
});

function sidebar_reposition() {
    var e = gEBI("sidebar");
    if (document.body.clientHeight < e.clientHeight + 112) { // 3 + 2 + 2 = 7em = 112px
        e.style.top = "5em";
        e.style.bottom = "";
    } else {
        e.style.top = "";
        e.style.bottom = "2em";
    }
}

function page_text_oninput(e) {
    if (PAGE_TEXT == e.innerText)
        return;
    var chr = (window.getSelection().focusNode.nodeValue || "").slice(-1).charCodeAt(0);
    if (0x3131 <= chr && chr <= 0x3163)
        return;
    if (0xAC00 <= chr && chr <= 0xD7A3)
        return;

    var caret = document.createTextNode("__CARET__");
    window.getSelection().getRangeAt(0).insertNode(caret);
    page_text_detect(e);
    var range = document.createRange();
    var selection = window.getSelection();
    caret = gEBI("__CARET__");
    range.selectNode(caret);
    selection.removeAllRanges();
    selection.addRange(range);
    range.deleteContents();

    PAGE_TEXT = e.innerText;
}

function page_text_detect(e) {
    var text = e.innerText;
    var words = text.split(" ");
    for (let i in words) {
        let word = words[i];
        let pos = word.indexOf("__CARET__");
        let tag = false;
        if (pos != -1)
            word = word.replace("__CARET__", "");
        if (word in DICT) // TODO
            tag = true;
        if (pos != -1)
            word = word.slice(0, pos) + "__CARET__" + word.slice(pos);
        if (tag == true)
            word = "<span class='highlight' onclick='page_text_bubble(this);'>" + word + "</span>";
        if (word != words[i])
            words[i] = word;
    }
    text = words.join(" ");
    text = text.replace("__CARET__", "<span id='__CARET__'></span>");
    e.innerHTML = text;
}

function page_text_bubble(e) {
    gEBI("bubble_text").innerText = e.innerText + "는 틀린 것 같아. 다시 해볼까?";
}

/*
http://www.nextree.co.kr/p4150/
https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220499119278&proxyReferer=https:%2F%2Fwww.google.com%2F
*/
