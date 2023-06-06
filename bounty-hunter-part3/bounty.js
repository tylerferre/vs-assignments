const express = require('express')
const bountyRoutes = express.Router()
bountyRoutes.use(express.json())
const BountyModel = require('./models/BountyModel.js')



//GET Requests

bountyRoutes.get('/', (req, res, next) =>{
    BountyModel.find((err, bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

// bountyRoutes.get('/:bountyId', (req, res) =>{
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(item => item._id === bountyId)
//     res.status(200).send(foundBounty)
// })

// bountyRoutes.get('/search/type', (req, res) =>{
//     const type = req.query.type
//     const filteredBounty = bounties.filter(item => item.type === type)
//     res.status(200).send(filteredBounty)
// })

// POST Request

bountyRoutes.post('/', (req, res, next) =>{
    const newBounty = new BountyModel(req.body)
    newBounty.save((err, savedBounty)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// DELETE Request

bountyRoutes.delete('/:bountyId', (req, res, next) =>{
    BountyModel.findOneAndDelete({_id: bountyId}, (err, deletedBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedBounty.firstName} has been removed`)
    })
})

// PUT Request

bountyRoutes.put('/:bountyId', (req, res, next) => {
    BountyModel.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRoutes