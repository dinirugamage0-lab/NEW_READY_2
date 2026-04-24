import { useEffect, useState } from 'react';
import { getItems } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
function App() {
  // State to hold the list of items fetched from the backend
  const [items, setItems] = useState([]);

  /**
   * Fetches items from the API and updates the local state.
   */
  const fetchItems = async () => {
    try {
      const res = await getItems();
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Fetch items once when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Item Manager</h1>
      
      {/* Form component to add new items. Triggers fetchItems on success. */}
      <ItemForm onItemAdded={fetchItems} />
      
      {/* List component to display items. Triggers fetchItems on delete. */}
      <ItemList items={items} onRefresh={fetchItems} />
    </div>
  );
}
export default App;