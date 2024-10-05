const express = require('express');
const path = require('path');
const user = require('./json.js');



const app = express();


app.use(express.static('./public'));

app.get('/', (req, res)=>{
  // res.send(`<h1> It is home page</h1>
  //  <a href="/user">See Users</a> `); 
  
  res.sendFile(path.resolve(__dirname,'./app1.9.1/home.html'))
});

app.get('/user', (req,res)=>{
  res.json(user);
});



app.listen(5000,()=>{
  console.log('The app is listening at http://localhost:5000');
})

