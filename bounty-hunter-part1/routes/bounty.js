const express = require('express')
const bountyRoutes = express.Router()
const {v4: uuidv4} = require('uuid')
bountyRoutes.use(express.json())

const bounties = [
    {
        firstName: 'Darth',
        lastName: 'Revan',
        living: true,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Malgus',
        living: false,
        bountyAmount: 80000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Kao Cen',
        lastName: 'Darach',
        living: true,
        bountyAmount: 60000,
        type: 'Jedi',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Malak',
        living: false,
        bountyAmount: 30000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Bane',
        living: true,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Bastila',
        lastName: 'Shan',
        living: false,
        bountyAmount: 70000,
        type: 'Jedi',
        _id: uuidv4()
    }
]

bountyRoutes.get('/', (req, res) =>{
    res.send(bounties)
})

bountyRoutes.post('/', (req, res) =>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`${req.body.firstName} ${req.body.lastName} has been added to the database.`)
})

module.exports = bountyRoutes