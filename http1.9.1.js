const http = require('http')
const { readFileSync } = require('fs')

const server = http.createServer((req, res)=>{

    const url = req.url;
    const homeHtml = readFileSync('./app1.9.1/home.html');
    const homeCss = readFileSync('./app1.9.1/home.css');
    const aboutHtml = readFileSync('./app1.9.1/about.html');
    const aboutCss = readFileSync('./app1.9.1/about.css');


    if(url === '/'){
        res.writeHead( 200 ,{ 'Content-Type': 'text/html'});
        res.write(homeHtml);
        res.end();
    }
    else if ( url === '/home.css'){
        res.writeHead( 200 ,{ 'Content-Type': 'text/css'})
        res.write(homeCss)
        res.end();
    }
    else if( url === '/about'){
        res.writeHead( 200 ,{ 'Content-Type': 'text/html'});
        res.write(aboutHtml);
        res.end();
    }
    else if ( url === '/about.css'){
        res.writeHead( 200 ,{ 'Content-Type': 'text/css'})
        res.write(aboutCss)
        res.end();
    }
    else{
        res.writeHead( 404 ,{ 'Content-Type': 'text/html'})
        res.write(`<h1>Page not found</h1>`)
        res.end();
    }

})

server.listen(3000)

