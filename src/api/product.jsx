import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useProductStore = create((set) => ({
  product: [],
  err: null,
  fetchProduct: async () => {
    try {
      const res = await axios(`${API}/api/products`);
      set({ product: res.data, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useProductStore;
