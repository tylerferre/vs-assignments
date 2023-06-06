const express = require("express")
const { default: mongoose } = require("mongoose")
const morgan = require("morgan")
const app = express()


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/bounty-db', {useNewUrlParser: true})
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log(err))

// Route
app.use('/api/bounty', require('./bounty.js'))

//Error handling
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () =>{
    console.log('This server is running on port 9000')
})