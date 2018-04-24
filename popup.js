document.addEventListener("DOMContentLoaded", (event) => {

	var port = chrome.extension.connect({
		name: "QaExtentionPort"
	});

	port.onMessage.addListener(function(msg) {
		if(msg == "on"){
			document.getElementById("myonoffswitch").checked = true;
		}
		else if(msg == "off"){
			document.getElementById("myonoffswitch").checked = false;
		}
	});

	function onSwitch(){
		if(document.getElementById("myonoffswitch").checked){
			port.postMessage("on");
		}
		else{
			port.postMessage("off");
		}

		setTimeout(function(){
			window.close();
		}, 50);
	}

	document.getElementById('myonoffswitch').addEventListener('change', onSwitch);
});
