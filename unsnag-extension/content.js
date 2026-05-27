// Content script — runs on every page.
// On unsnag.io it syncs the persona from localStorage → extension storage.

(function () {
  if (!location.hostname.includes('unsnag.io')) return;

  const persona = localStorage.getItem('unsnag_persona');
  if (persona) {
    chrome.runtime.sendMessage({ type: 'SYNC_PERSONA', persona });
  }
})();
