import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import * as vscode from 'vscode';

const execPromise = promisify(exec);

async function deleteDSStoreFiles() {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
        vscode.window.showInformationMessage('No workspace folder is open.');
        return;
    }

    const workspaceOperations = workspaceFolders.map((item) =>
        execPromise(`find ${item.uri.fsPath} -name ".DS_Store" -type f -delete`),
    );

    try {
        const results = await Promise.all(workspaceOperations);
        results.forEach((result) => {
            if (result.stderr) {
                vscode.window.showWarningMessage(`stderr: ${result.stderr}`);
            }
        });

        vscode.window.showInformationMessage(`.DS_Store files deleted successfully.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${(error as Error).message}`);
    }
}

async function autoDeleteDSStoreFiles(uri: vscode.Uri) {
    const config = vscode.workspace.getConfiguration('remove_ds_store');
    const autoDeleteEnabled = config.get<boolean>('autoDelete', false);

    if (autoDeleteEnabled) {
        try {
            await execPromise(`rm "${uri.fsPath}"`);
        } catch (error) {
            vscode.window.showErrorMessage(`Error: ${(error as Error).message}`);
        }
    }
}

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('remove_ds_store.remove_DS_Store', () => {
        deleteDSStoreFiles();
    });

    // Track .DS_Store
    const tracker = vscode.workspace.createFileSystemWatcher('**/.DS_Store', false, false, false);

    const listener = tracker.onDidCreate(autoDeleteDSStoreFiles);

    context.subscriptions.push(disposable, tracker, listener);
}

export function deactivate() {
    /* */
}
