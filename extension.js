chrome.webNavigation.onCommitted.addListener(function (tab) {
    if (tab.frameId == 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {

            // Get URL
            const URL = tabs[0].url;

            // Remove protocol definitions from URL
            const parsedUrl = URL.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")

            // Only want base domain [hulu.com], remove anything else
            const domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain == "hulu.com") {
                    runMutingScript();
                    return;
                }
            } catch (err) {
                throw err;
            }
        });
    }
});

function runMutingScript() {
    // Inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'content.js'
    });
    return true;
}