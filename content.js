function checkConsole() {
    // Regular expressions to search for ad tags in the players console
    const adRegex = /\bAd\b/i;
    const continueRegex = /\bAdYour video will continue from this point after the break\b/i;
    let muted = false;
    let muteButton = undefined;
  
    // Using a MutationObserver to monitor changes in the console
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Check if it's an element node
            const message = node.textContent.trim();
  
            // Check if the message contains regex
            if (adRegex.test(message) || continueRegex.test(message)) {
              // Log a message directly to the webpage's console
              console.log("Extension: Ad detected");

              muted = true;
              muteButton = document.querySelector('[aria-label="MUTE"]');
              muteButton.click();
  
              
              // TODO: umute the audio

              observer.disconnect();
            }
          }
        });
      });
    });
  
    // Observe changes in the console (you may need to adjust the selector)
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  checkConsole();
  