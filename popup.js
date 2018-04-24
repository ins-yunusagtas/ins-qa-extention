// var app = chrome.runtime.getBackgroundPage();

var insstatus = "status";
var value = true;
localStorage.setItem (insstatus,value);
document.getElementById('clickme').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: 'content.js'
    }); 
  }
);
