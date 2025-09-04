# Nuxtr Monorepo Project Switcher

A VS Code extension that allows you to easily switch between multiple Nuxt projects within a single monorepo workspace, addressing a limitation in the current Nuxtr extension.

## Problem Solved

The official Nuxtr extension does not fully support scenarios where you have multiple Nuxt projects in the same monorepo when using VS Code's workspace feature. This can lead to confusion or incorrect project targeting. This extension provides a simple way to switch the active Nuxtr project within your monorepo, ensuring the correct project is targeted for Nuxtr's features.

## Installation

### Installing Locally (for Development/Testing)

Since this extension is not yet published to the VS Code Marketplace, you can install it locally for testing:

1. **Clone or Download the Repository**:
   - Clone this repo: `git clone https://github.com/philippedasilva-orizone/nuxtr-monorepo-projectswitcher.git`
   - Or download the ZIP and extract it.

2. **Install Dependencies**:
   - Navigate to the project directory.
   - Run `pnpm install` (or `npm install` if you prefer npm).

3. **Build the Extension**:
   - Run `npm run compile` to compile the TypeScript code.

4. **Package the Extension**:
   - Install the VS Code Extension Manager globally if not already installed: `npm install -g vsce`.
   - Run `vsce package` to create a `.vsix` file.

5. **Install in VS Code**:
   - Open VS Code.
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
   - Type "Extensions: Install from VSIX..." and select it.
   - Choose the generated `.vsix` file from the project directory.
   - The extension will be installed and activated.

## Usage

1. **Prerequisites**:
   - Ensure the [Nuxtr extension](https://marketplace.visualstudio.com/items?itemName=nuxtr.nuxtr-vscode) is installed and activated.
   - Open a VS Code workspace that contains multiple Nuxt projects (each with a `nuxt.config.ts` or `nuxt.config.js` file).

2. **Switch Projects**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
   - Type "Nuxtr: Switch Repo" and select it.
   - A list of available Nuxt projects in your workspace will appear.
   - Select the desired project from the list.
   - The extension will update the Nuxtr configuration to target the selected project.
   - You may need to reload the VS Code window for changes to take effect.

## How It Works

- **Project Detection**: The extension automatically scans your workspace for folders containing `nuxt.config.ts` or `nuxt.config.js` files, identifying them as Nuxt projects.
- **Configuration Update**: Upon selecting a project, it updates the Nuxtr extension's `monorepoMode.DirectoryName` setting in your workspace configuration.
- **Integration**: It works seamlessly with the existing Nuxtr extension, providing the missing functionality for multi-project monorepos.

## Requirements

- **VS Code**: Version 1.75.0 or higher.
- **Nuxtr Extension**: Must be installed and active.
- **Node.js**: For building and packaging (if developing).

## Disclaimer

This extension is provided "as is" without any warranties, express or implied. The author is not responsible for any issues, damages, or losses that may arise from using this extension. Use at your own risk. While contributions and issue reports are welcome, support is not guaranteed.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests on the [GitHub repository](https://github.com/philippedasilva-orizone/nuxtr-monorepo-projectswitcher).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
