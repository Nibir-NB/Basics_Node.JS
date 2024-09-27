const { log } = require('console');
const {readFileSync,writeFileSync, readFile, writeFile} = require('fs');

// console.log(files);



//sync process
const content1 = readFileSync('./files/file1.txt', 'utf-8');
const content2 = readFileSync('./files/file2.txt', 'utf-8');

writeFileSync('./files/merged.txt',`${content1}\n${content2}`);




// async process

// Async process using callbacks
readFile('./files/file1.txt', 'utf-8', (err, content1) => {
    if (err) {
        console.log('Error reading file1:', err);
        return;
    }

    readFile('./files/file2.txt', 'utf-8', (err, content2) => {
        if (err) {
            console.log('Error reading file2:', err);
            return;
        }

        // After reading both files, write the merged content
        const mergedContent = `${content1}\n${content2}`;        // wait for the both file
        writeFile('./files/mergedA.txt', mergedContent, (err) => {
            if (err) {
                console.log('Error writing merged file:', err);
            } else {
                console.log('Files merged successfully!');
            }
        });
    });
});
