# Hulu Ad Muter Chrome Extension

## Description

The **Hulu Ad Muter** Chrome extension provides an automated solution for muting ads on Hulu and unmuting the program when the ad is complete.

### Functionality

1. **Content Script (`content.js`):**

   - The `checkIfAd` function periodically checks if ads have appeared on Hulu.
   - If an ad is present and not muted, it mutes the ad. If no ad is present and it was muted, it unmutes the ad.
   - The function runs every second and is intended for execution on Hulu pages.

2. **Background Script (`extension.js`):**

   - Listens for page navigation events using `chrome.webNavigation.onCommitted`.
   - Identifies when the user navigates to a new tab.
   - Checks if the domain of the active tab is "hulu.com" and triggers the `runMutingScript` function if true.

3. **Manifest File (`manifest.json`):**
   - Defines the Chrome extension and its properties.
   - Specifies required permissions, scripts, and the background script.
   - Includes details like the extension name, description, version, author, and icon.

## Usage

1. **Manual Installation:**

   - Download the repository to your local machine
   - Load the extension in Chrome by navigating to `chrome://extensions/`.
   - Enable "Developer mode" and click "Load unpacked."
   - Select the extension directory containing the three files.

2. **Execution:**
   - The extension automatically runs when navigating to Hulu pages.

## Notes

- Ensure that the extension has the necessary permissions, especially for tabs, webNavigation, and access to Hulu's website.
- This extension is intended for personal use, and usage should comply with Hulu's terms of service.

## Version

- **Version:** 1.0.0

## Author

- **Author:** Kyle Stadler

## License

This extension is provided under the [MIT License](LICENSE).
