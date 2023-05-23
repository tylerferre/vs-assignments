const { json } = require('body-parser')
const express = require('express')
const app = express()

app.use(express.json())

app.use('/inventory', require('./inventory.js'))

app.listen(9000, ()=>{
    console.log('Server running on port 9000')
})