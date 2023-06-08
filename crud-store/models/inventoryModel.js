const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    inStock: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('inventoryModel', inventorySchema)