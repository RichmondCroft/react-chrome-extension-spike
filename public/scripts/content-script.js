var rc = {
  fn: function() {
    console.log('hello from chrome extension');
  }
}

console.log('hi there from chrome')
var imgURL = chrome.runtime.getURL("logo192.png");

window.__rc = rc;
window.__imgURL = imgURL;

document.querySelector("[alt='Google']").src = imgURL;
document.querySelector("[alt='Google']").srcset = imgURL + ' 1x, ' + imgURL + ' 2x';