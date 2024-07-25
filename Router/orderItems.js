const express = require('express');
const router = express.Router();
const OrderItem = require('../model/OrderItem');

// Create a new order item
router.post('/', async (req, res) => {
    try {
        const orderItem = new OrderItem(req.body);
        await orderItem.save();
        res.status(201).send(orderItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all order items
router.get('/', async (req, res) => {
    try {
        const orderItems = await OrderItem.find();
        res.status(200).send(orderItems);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single order item by ID
router.get('/:id', async (req, res) => {
    try {
        const orderItem = await OrderItem.findById(req.params.id);
        if (!orderItem) {
            return res.status(404).send();
        }
        res.status(200).send(orderItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update an order item by ID
router.put('/:id', async (req, res) => {
    try {
        const orderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!orderItem) {
            return res.status(404).send();
        }
        res.status(200).send(orderItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete an order item by ID
router.delete('/:id', async (req, res) => {
    try {
        const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
        if (!orderItem) {
            return res.status(404).send();
        }
        res.status(200).send(orderItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
