var injectScript = function (file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

var injectQAScript = function (){
	injectScript(chrome.extension.getURL('systemrulechecker.js'), 'body')
}

var port = chrome.extension.connect({
    name: "QaExtentionPort"
});

port.onMessage.addListener(function(msg) {
    if(msg == "on"){
        document.addEventListener(
			'DOMContentLoaded', 
			injectQAScript(), 
			false
    	);
    }
});