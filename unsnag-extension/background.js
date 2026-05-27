// Background service worker — syncs persona from unsnag.io localStorage
// into chrome.storage.local so the popup can read it.

chrome.runtime.onInstalled.addListener(() => {
  console.log('UnSnag extension installed.');
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'SYNC_PERSONA' && msg.persona) {
    chrome.storage.local.set({ unsnag_persona: msg.persona }, () => {
      sendResponse({ ok: true });
    });
    return true; // keep channel open for async response
  }
});
