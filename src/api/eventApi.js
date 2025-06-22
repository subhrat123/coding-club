import axios from "axios";

// Backend base URL (e.g., http://localhost:5000/api)
const BASE_URL = `${import.meta.env.VITE_API_URL}/events`;

// Fetch all events
export const fetchEvents = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

// Add a new event
export const addEvent = async (eventData) => {
  const res = await axios.post(BASE_URL, eventData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Update an existing event
export const updateEvent = async (id, updatedData) => {
  const res = await axios.put(`${BASE_URL}/${id}`, updatedData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Delete an event by ID
export const deleteEvent = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
