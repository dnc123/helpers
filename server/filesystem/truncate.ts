import fs from 'fs';
import path from 'path';

export default function truncate(targetPath: string): void {
    const files = fs.readdirSync(targetPath);

    for (const file of files) {
        const filePath = path.join(targetPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            truncate(filePath);
            fs.rmdirSync(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    }
}



