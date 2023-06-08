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

bountyRoutes.get('/:bountyId', (req, res, next) =>{
    BountyModel.findOne({_id: req.params.bountyId}, (err, bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

bountyRoutes.get('/search/type', (req, res, next) =>{
    BountyModel.find({type: req.query.type}, (err, bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

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
    BountyModel.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty)=>{
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