const express = require('express')
const bountyRoutes = express.Router()
const {v4: uuidv4} = require('uuid')
bountyRoutes.use(express.json())
const bounties = require('./data.js')


//GET Requests

bountyRoutes.get('/', (req, res) =>{
    res.send(bounties)
})

bountyRoutes.get('/:bountyId', (req, res) =>{
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(item => item._id === bountyId)
    res.send(foundBounty)
})

bountyRoutes.get('/search/type', (req, res) =>{
    const type = req.query.type
    const filteredBounty = bounties.filter(item => item.type === type)
    res.send(filteredBounty)
})

// POST Request

bountyRoutes.post('/', (req, res) =>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`${req.body.firstName} ${req.body.lastName} has been added to the database.`)
})

// DELETE Request

bountyRoutes.delete('/:bountyId', (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Bounty Removed.')
})

// PUT Request

bountyRoutes.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyRoutes