const express = require('express')
const stuffRouter = require('./stuff')
const app = express()
const stuff = require('./data')
app.use(express.json())


app.use('/stuff', require('./stuff.js'))

app.use(stuffRouter)

app.get('/stuff', (req, res, next) =>{
    res.send(stuff)
})

app.listen(9000, ()=>{
    console.log('server is running on mort 9000')
})