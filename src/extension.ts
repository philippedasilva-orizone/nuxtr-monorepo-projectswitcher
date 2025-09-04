import * as vscode from 'vscode';
import * as path from 'path';

export async function activate(context: vscode.ExtensionContext) {
  // Check if in a workspace
  if (!vscode.workspace.workspaceFolders) {
    vscode.window.showInformationMessage('Nuxtr Monorepo Project Switcher: Not in a workspace. Extension deactivated.');
    return;
  }

  // Check if Nuxtr extension is installed
  const nuxtrExtension = vscode.extensions.getExtension('nuxtr.nuxtr-vscode');
  if (!nuxtrExtension) {
    vscode.window.showInformationMessage('Nuxtr Monorepo Project Switcher: Nuxtr extension not found. Please install it. Extension deactivated.');
    return;
  }

  // Dynamically find Nuxt projects
  const nuxtProjects: string[] = [];
  for (const folder of vscode.workspace.workspaceFolders) {
    const configFiles = await vscode.workspace.findFiles(
      new vscode.RelativePattern(folder, 'nuxt.config.{ts,js}'),
      null,
      1 // Limit to 1 per folder
    );
    if (configFiles.length > 0) {
      nuxtProjects.push(path.relative(vscode.workspace.workspaceFolders[0].uri.fsPath, folder.uri.fsPath));
    }
  }

  if (nuxtProjects.length === 0) {
    vscode.window.showInformationMessage('Nuxtr Monorepo Project Switcher: No Nuxt projects found in workspace.');
    return;
  }

  // Register the command
  const disposable = vscode.commands.registerCommand('nuxtr.switchRepo', async () => {
    const selected = await vscode.window.showQuickPick(nuxtProjects, {
      placeHolder: 'Select the Nuxt project to switch Nuxtr to'
    });

    if (selected) {
      const config = vscode.workspace.getConfiguration('nuxtr');
      await config.update('monorepoMode.DirectoryName', selected, vscode.ConfigurationTarget.Workspace);
      vscode.window.showInformationMessage(`Switched Nuxtr to ${selected}. Reload the window if needed.`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}