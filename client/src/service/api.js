/* eslint-disable no-useless-catch */
import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const fetchListings = async () => {
  try {
    const response = await axios.get(`${API_URL}/listings`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchListingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/listings/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
