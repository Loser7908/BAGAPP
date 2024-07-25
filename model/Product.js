const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bagSchema = new Schema({
    image:{
        type: String,
        required: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)?/

    },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    brand: { type: String },
    category: { type: String },
    stock: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Bag = mongoose.model('Bag', bagSchema);
module.exports = Bag;
