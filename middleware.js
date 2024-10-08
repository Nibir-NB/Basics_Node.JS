
const express = require('express')

const logger = require('./middleware1.12.1')
const authorize = require('./middleware1.12.2')

const app = express()

app.use([logger,authorize])

// __ we can also use the middleware as 
// app.get('/' ,logger, (req, res)=>{
//   res.send('Home')
// })

app.get('/', (req, res)=>{
  res.send('Home')
})

app.get('/about', (req, res)=>{
  console.log(req.user);
  
  res.send('About')
})

app.listen(5000, ()=>{
  console.log('The app is listening at http://localhost:5000');
})

