import axios from "axios";

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data.data;
  } catch (error) {
    // Customize error handling as needed
    throw new Error('Failed getting menu');
  }
}

export async function getOrder(id) {
  if (!id) throw new Error('Order ID must be provided');

  try {
    const response = await axios.get(`${API_URL}/order/${id}`);
    return response.data?.data || response.data; // Adjust based on API response structure
  } catch (error) {
    console.error(error); // Optional for debugging
    throw new Error(`Could not find order #${id}: ${error.message}`);
  }
}


export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
