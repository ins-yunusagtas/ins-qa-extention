chrome.runtime.onInstalled.addListener(function() { //activate background js
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    urlMatches: '(http|https)://*/*'
                },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


function setActivate(val) {
	chrome.storage.sync.set({"isQaExtActivate": val}, function() {
        console.log('QA Extention activate set: ' + val);

        if (val)
            injectToContent();
    });
}

function getActivate(callback) {
    chrome.storage.sync.get(['isQaExtActivate'], function(result) {
        var val = result['isQaExtActivate'];
        callback(val);
    });
}

function injectToContent(){
    getActivate(function(active){
        if (active){
            chrome.tabs.executeScript(null,{code:"injectQAScript()"});
        }
    });
}

chrome.extension.onConnect.addListener(function(port) { //extention aktifligini sorgulama
    if (port.name == "QaExtentionPort"){
        getActivate(function(active){ //contentlara ve switche haber ver, eklenti aktif mi
            if (active)
                port.postMessage("on");
            else
                port.postMessage("off");
        });
    
        port.onMessage.addListener(function(msg) { //switch tıklanıldığında contentlara haber verir active/deactive
            if (msg == "on")
                setActivate(true);
            else if (msg == "off")
                setActivate(false);
        });
    }
});