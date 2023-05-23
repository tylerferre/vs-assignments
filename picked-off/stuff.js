const express = require('express')
const stuffRouter = express.Router()
const stuff = require('./data.js')
stuffRouter.use(express.json())


stuffRouter.use('/stuff', (req, res, next) =>{
    console.log('test 1')
    next()
})

stuffRouter.use('/stuff', (req, res, next) =>{
    console.log('test 2')
    next()
})

stuffRouter.use('/stuff', (req, res, next) =>{
    stuff.push({name: 'balloon', alive: false})
    next()
})

module.exports = stuffRouter