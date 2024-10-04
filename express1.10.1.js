
const express = require('express')
const path = require('path')

const app = express()
//Middlewear
app.use(express.static('./public'))    // The public file containd the static CSS , JS files   we also can include the Html file also

app.get('/',(req, res)=>{
  res.sendFile( path.resolve(__dirname,'./app1.9.1/home.html'));
})

app.get('/about',(req, res)=>{
  res.sendFile(path.resolve(__dirname,'./app1.9.1/about.html'));
})

app.listen(5000,()=>{
  console.log('The app is listening at port 5000');
  
})
