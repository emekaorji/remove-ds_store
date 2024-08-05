# Delete DS_Store Files

[![GitHub](https://img.shields.io/github/license/emekaorji/remove-ds_store)](https://github.com/emekaorji/remove-ds_store/blob/master/LICENSE) [![Known Vulnerabilities](https://snyk.io/test/github/emekaorji/remove-ds_store/badge.svg?targetFile=package.json)](https://snyk.io/test/github/emekaorji/remove-ds_store?targetFile=package.json) [![Percentage of issues still open](https://isitmaintained.com/badge/open/emekaorji/remove-ds_store.svg)](http://isitmaintained.com/project/emekaorji/remove-ds_store') [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

A VSCode extension to recursively remove all .DS_Store files from the CWD.

### Features 📙

- Remove all .DS_Store files.

### Installation 📝

1. Launch Visual Studio Code.
1. Go to the Extensions view by clicking on the square icon on the left sidebar or by using the shortcut `Cmd+Shift+X`.
1. Search for "Delete DS_Store Files" in the Extensions marketplace.
1. Click the "Install" button next to the "Delete DS_Store Files" extension.

### Usage 🛠️

1. Open a new project on VSCode and trigger the command palette using `Cmd+Shift+P`.
1. Search for "Delete .DS_Store Files" and click. All `.DS_Store` files in your current workspace will be deleted.
1. In case of any errors or issues, appropriate error messages will be displayed, indicating the problem encountered. Refer to the #Troubleshooting section of this docs and try to fix the issue.

### Extension Deactivation 😔

The extension is deactivated automatically when you close Visual Studio Code or manually disable the extension in the Extensions view.

### Troubleshooting 🐛

- Info **"No workspace folder is open."**: The extension did not detect any workspace folders. Open a project folder and try again.
- Warning **"stderr: ..."**: Usually occurs if you try to use this extension on a Windows OS or other operating systems. `.DS_Store` files are ideally found on the MacOS, so this extension was not built with support for other platforms.

### Feedback and Contributions 👂

If you have any feedback, suggestions, or bug reports, please create an issue or reach out to me on Twitter ([@code_rabbi](https://x.com/code_rabbi))

Enjoy! 💙
