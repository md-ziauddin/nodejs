const express =require('express');
const http = require('http')

const app = express();

app.use((req, res, next) => {
     
    res.send('<h1>Hello from express!!</h1>')
    next()
})

app.listen(3000, () => console.log('server started'))
