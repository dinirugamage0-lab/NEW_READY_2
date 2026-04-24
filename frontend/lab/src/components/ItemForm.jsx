/**
 * frontend/src/components/ItemForm.jsx
 * A form component for creating new items.
 */

import { useState } from 'react';
import { createItem } from '../api';

export default function ItemForm({ onItemAdded }) {
  // Local state for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  /**
   * Handles form submission.
   * Sends data to the backend and resets the form.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to create the item
      await createItem({ name, description, price });
      
      // Reset input fields
      setName('');
      setDescription('');
      setPrice('');
      
      // Callback to notify parent (App.jsx) that a new item was added
      onItemAdded();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add New Item</h2>
      <div>
        <input
          placeholder="Item name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}
