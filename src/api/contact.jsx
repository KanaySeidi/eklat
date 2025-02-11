import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useContactStore = create((set) => ({
  contact: [],
  err: null,
  fetchContact: async () => {
    try {
      const res = await axios(`${API}/api/contact`);
      set({ contact: res.data, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useContactStore;
