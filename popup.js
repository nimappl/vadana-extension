const label = document.querySelector('span');
const toggle = document.querySelector('input');

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {request: ''}, response => {
        toggle.checked = response.active;
        setLabel();
    })
});

toggle.addEventListener('change', e => {
    setLabel();
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {active: toggle.checked});
    })
});

function setLabel() {
    label.innerText = toggle.checked ? "ON" : "OFF";
}