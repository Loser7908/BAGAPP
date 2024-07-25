const express = require('express');
const router = express.Router();
const Bag = require('../model/Product');

// Create a new bag
router.post('/', async (req, res) => {
    try {
        const bag = new Bag(req.body);
        await bag.save();
        res.status(201).send(bag);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all bags
router.get('/', async (req, res) => {
    try {
        const bags = await Bag.find();
        res.status(200).send(bags);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single bag by ID
router.get('/:id', async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.id);
        if (!bag) {
            return res.status(404).send();
        }
        res.status(200).send(bag);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a bag by ID
router.put('/:id', async (req, res) => {
    try {
        const bag = await Bag.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!bag) {
            return res.status(404).send();
        }
        res.status(200).send(bag);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a bag by ID
router.delete('/:id', async (req, res) => {
    try {
        const bag = await Bag.findByIdAndDelete(req.params.id);
        if (!bag) {
            return res.status(404).send();
        }
        res.status(200).send(bag);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
