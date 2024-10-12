const express = require('express')

const user = require('./router/user')

const app = express();


app.use('/user/api',user)                  // for signup the url =  '/user/api/signin'
                                           // for signup the url =  '/user/api/signup'
app.use(express.static('./public'))    

app.get('/',(req, res)=>{
  res.sendFile( path.resolve(__dirname,'./app1.9.1/home.html'));
})

app.get('/about',(req, res)=>{
  res.sendFile(path.resolve(__dirname,'./app1.9.1/about.html'));
})




app.listen(5000, ()=>{
    console.log('The app is listening ai http://localhost:5000');
    
})