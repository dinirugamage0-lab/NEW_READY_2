/**
 * backend/models/Item.js
 * Defines the Mongoose schema for an Item.
 */

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  // Name of the item, required field
  name: { type: String, required: true },
  
  // Description of the item, required field
  description: { type: String, required: true },
  
  // Price of the item as a number, required field
  price: { type: Number, required: true },
}, { 
  // Automatically add createdAt and updatedAt fields
  timestamps: true 
});

module.exports = mongoose.model('Item', ItemSchema);