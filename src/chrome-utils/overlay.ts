export async function displayOverlay() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : 1111 },
    func: setupOverlay,
  });
}

function setupOverlay() {
  setupStyles();
  var overlayElement = document.createElement('div');
  overlayElement.id = "dyslens-overlay-element";
  overlayElement.draggable = true;
  overlayElement.addEventListener('dragstart', (e) => { handleDragStart(e, overlayElement) });
  overlayElement.addEventListener('drag', (e) => { handleDragOver(e, overlayElement) });
  overlayElement.addEventListener('dragend', (e) => { handleDragEnd(e, overlayElement) });
  document.body.appendChild(overlayElement);
}

function handleDragStart(e: DragEvent, overlayElement: HTMLElement) {
  overlayElement.style.opacity = "0.9";

  if (e && e.dataTransfer) {
    e.dataTransfer.effectAllowed = "all";
    console.log('e.dataTransfer', e);
  }
}

function handleDragOver(e: DragEvent, overlayElement: HTMLElement) {
  console.log('e', e);
  overlayElement.style.opacity = "0.9";
  overlayElement.style.left = "0";
  overlayElement.style.top = `${e.movementY}px`;
  overlayElement.style.display = "none";
}

function handleDragEnd(e: DragEvent, overlayElement: HTMLElement) {
  overlayElement.style.opacity = "0.4";
  overlayElement.style.left = "0";
  overlayElement.style.top = `${e.y}px`;
  overlayElement.style.display = "block";
}

function setupStyles() {
  var style = document.createElement('style');
  const cssStyle = `
    #dyslens-overlay-element {
      background-color: red !important;
      color: black !important;
      border: 1px solid red;
      position: fixed;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: 100%;
      height: 50px;
      opacity: 0.4;
    }
  `;

  style.appendChild(document.createTextNode(cssStyle));
  document.getElementsByTagName('head')[0].appendChild(style);
}
