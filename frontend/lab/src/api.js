/**
 * frontend/src/api.js
 * Configures Axios for communicating with the backend API.
 */

import axios from 'axios';

// Create an Axios instance with a pre-configured base URL from environment variables
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/**
 * Fetch all items from the backend.
 * @returns {Promise} Axios response containing item data.
 */
export const getItems = () => API.get('/items');

/**
 * Create a new item in the backend.
 * @param {Object} data - The item data (name, description, price).
 * @returns {Promise} Axios response.
 */
export const createItem = (data) => API.post('/items', data);

/**
 * Delete an item from the backend by ID.
 * @param {string} id - The ID of the item to delete.
 * @returns {Promise} Axios response.
 */
export const deleteItem = (id) => API.delete(`/items/${id}`);

/**
 * Update an existing item in the backend.
 * @param {string} id - The ID of the item to update.
 * @param {Object} data - The updated data.
 * @returns {Promise} Axios response.
 */
export const updateItem = (id, data) => API.put(`/items/${id}`, data);

