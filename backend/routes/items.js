/**
 * backend/routes/items.js
 * Express routes for CRUD operations on Items.
 */

const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

/**
 * @route   GET /api/items
 * @desc    Fetch all items from the database
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const items = await Item.find(); // Retrieve all items
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @route   POST /api/items
 * @desc    Create a new item
 * @access  Public
 */
router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const newItem = await item.save(); // Save the new item to MongoDB
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route   DELETE /api/items/:id
 * @desc    Delete an item by its ID
 * @access  Public
 */
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id); // Remove item from DB
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @route   PUT /api/items/:id
 * @desc    Update an existing item by its ID
 * @access  Public
 */
router.put('/:id', async (req, res) => {
  try {
    // Find item and update with data from request body
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

