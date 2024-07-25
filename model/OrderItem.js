const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    bag_id: { type: Schema.Types.ObjectId, ref: 'Bag', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;
