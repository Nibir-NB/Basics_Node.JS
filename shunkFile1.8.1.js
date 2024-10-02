
// ...__ READ FILE IN SHUNK __...

// const {createReadStream} = require('fs');

// const stream = createReadStream('./files/big.txt',{highWaterMark:1000}); //high water mark desides the shunk / package size

// stream.on('data', (result)=>{
//     console.log(result);
//     })




// ...__ READ FILE IN SHUNK WITH HTTP __...

const { createReadStream } = require('fs');
const http = require('http');


const server = http.createServer( (req,res)=>{


  const content = createReadStream('./files/big.txt');
  content.on('open',()=>{
  content.pipe(res);
  })


  //..__ Another Way__...
// res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Pipe the file stream to the response
//   content.pipe(res);



  content.on('err',(err)=>{
    res.end(err);
  })
})

server.listen( 3000 ,()=>{
    console.log('listening at port 3000');
    
})


