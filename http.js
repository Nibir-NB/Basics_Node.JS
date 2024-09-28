
const http = require('http');

const fs = require('fs');

const path = require('path');



const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {       // reading the index.html file
            if (err) {
                res.statusCode = 500;
                res.end('Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);                                                 // returning the index.html or end with the index file
            }
        });
    } 

    else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>This is the About page</h1>');
    }

    else if (req.url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>This is second home page</h1>');
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 - Page Not Found</h1>');
    }
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
