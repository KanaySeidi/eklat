import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useCatalogStore = create((set) => ({
  catalog: [],
  err: null,
  fetchCatalog: async () => {
    try {
      const res = await axios(`${API}/api/catalog`);
      set({ catalog: res.data, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useCatalogStore;
