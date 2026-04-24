/**
 * frontend/src/components/ItemList.jsx
 * A component that displays a list of items and allows deletion.
 */

import { deleteItem } from '../api';

export default function ItemList({ items, onRefresh }) {
  
  /**
   * Handles deleting an item.
   * Calls the API and then refreshes the list in the parent component.
   * @param {string} id - The ID of the item to delete.
   */
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      onRefresh(); // Trigger parent to fetch updated list
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      {/* Map through the items array and render each one */}
      {items.map(item => (
        <div key={item._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
