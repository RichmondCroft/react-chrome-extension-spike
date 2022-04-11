export async function textAndBackgroundChange() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : 1111 },
    func: setPageBackgroundColor,
  });
}

function setPageBackgroundColor() {
  // 1. Solution one, does not work well since it just changes the 
  // bg color of the body and not the others
  // document.body.style.backgroundColor = "#aa44cc";

  var style = document.createElement('style');
  // creates a problem, it applies to all bt what if the webside has a transparent overlay div (eg. mdn website)
  const cssStyle = `
    * {
      background-color: #FEFBEB !important;
      color: black !important;
    }
  `;

  style.appendChild(document.createTextNode(cssStyle));
  document.getElementsByTagName('head')[0].appendChild(style);
}
