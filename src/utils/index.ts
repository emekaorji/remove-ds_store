import * as fs from 'node:fs';

export async function validateDSStoreFile(filePath: string): Promise<boolean> {
    try {
        // Check file existence/acessible
        await fs.promises.access(filePath, fs.constants.F_OK);

        // Validate the file name
        const fileName = filePath.split('/').pop();
        if (fileName !== '.DS_Store') {
            return false;
        }

        return true;
    } catch {
        return false;
    }
}
