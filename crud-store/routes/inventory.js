const express = require('express')
const inventoryRouter = express.Router()
inventoryRouter.use(express.json())
const InventoryModel = require('../models/inventoryModel.js')

inventoryRouter.get('/', (req, res, next)=>{
    InventoryModel.find((err, item)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

inventoryRouter.get('/:inventoryId', (req, res, next)=>{
    InventoryModel.findOne({_id: req.params.inventoryId}, (err, family)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(family)
    })
})

inventoryRouter.post('/', (req, res, next)=>{
    const newInventory = new InventoryModel(req.body)
    newInventory.save((err, savedInventory)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

inventoryRouter.delete('/:inventoryId', (req, res, next)=>{
    InventoryModel.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedInventory)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Removed ${deletedInventory.name} from database`)
    })
})

inventoryRouter.put('/:inventoryId', (req, res, next)=>{
    InventoryModel.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedInventory)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter