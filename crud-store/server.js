const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/crud-store-db', {useNewUrlParser: true})
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use('/inventory', require('./routes/inventory.js'))

app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, ()=>{
    console.log('server running on port 9000')
})