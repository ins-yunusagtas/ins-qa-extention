var injectScript = function (file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
if (document.readyState === "complete") {
	console.log("1211312");
    injectScript(chrome.extension.getURL('systemrulechecker.js'), 'body');
}
