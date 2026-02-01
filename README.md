# YouTube Fluff Buster

A Tampermonkey/Greasemonkey userscript that busts the fluff and removes clutter from YouTube's interface.

## Features

- **Removes YouTube Playables** - Hides the "YouTube Playables" section from homepage
- **Removes Shorts from Mini Guide** - Hides Shorts button from top-left mini guide (near YouTube logo)
- **Removes Shorts from Sidebar** - Hides Shorts button from left sidebar navigation

## Installation

### Prerequisites

Install a userscript manager for your browser:
- **Chrome/Edge/Opera**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
- **Safari**: [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### Install Script

1. Click here to install: [youtube-fluff-buster.user.js](https://github.com/yourusername/youtube-fluff-buster/raw/main/youtube-fluff-buster.user.js)
2. Your userscript manager will prompt you to install
3. Click "Install" or "Confirm"
4. Refresh any open YouTube tabs

## Manual Installation

1. Copy the contents of `youtube-fluff-buster.user.js`
2. Open your userscript manager dashboard
3. Create a new script
4. Paste the code
5. Save

## Usage

Once installed, the script runs automatically on all YouTube pages. No configuration needed.

## Compatibility

- Works on: `https://www.youtube.com/*`
- Tested with: Tampermonkey on Chrome, Firefox, Edge

## Troubleshooting

**Script not working?**
- Refresh the YouTube page
- Check that your userscript manager is enabled
- Verify the script is enabled in your userscript manager dashboard

**Elements reappearing?**
- YouTube's interface updates dynamically; the script uses MutationObserver to handle this
- If elements persist, please [open an issue](https://github.com/yourusername/youtube-fluff-buster/issues)

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details

## Author

Created by You

## Changelog

### 1.0.0 (2025-02-01)
- Initial release
- Added Playables removal
- Added Shorts removal from mini guide and sidebar
