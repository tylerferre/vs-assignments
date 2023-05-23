const express = require('express')
const inventoryRoutes = express.Router()
const {v4: uuidv4} = require('uuid')
inventoryRoutes.use(express.json())

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

inventoryRoutes.get('/', (req, res) => {
    res.send(inventoryItems)
})

inventoryRoutes.get('/:inventoryId', (req, res) =>{
    const inventoryId = req.params.inventoryId
    const foundItem = inventoryItems.find(item => item._id ===inventoryId)
    res.send(foundItem)
})

inventoryRoutes.get('/search/type', (req, res) => {
    const iNitem = req.query.type
    const filteredItem = inventoryItems.filter(item => item.type === iNitem)
    res.send(filteredItem)
})

inventoryRoutes.post('/', (req, res) =>{
    const newItem = req.body
    newItem._id = uuidv4()
    inventoryItems.push(newItem)
    res.send(`${req.body.name} was added to the database.`)
})


module.exports = inventoryRoutes