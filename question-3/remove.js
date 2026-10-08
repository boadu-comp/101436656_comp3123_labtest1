const fs = require('fs');
const path = require('path');

const logDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir);

    files.forEach(file => {
        const filePath = path.join(logDir, file);

        if (fs.statSync(filePath).isFile()) {
            console.log(`Deleting: ${file}`);
            fs.unlinkSync(filePath);
        }
    });

    fs.rmdirSync(logDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
