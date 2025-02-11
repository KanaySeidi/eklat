import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useWorkshopStore = create((set) => ({
  workshop: [],
  err: null,
  fetchWorkshop: async () => {
    try {
      const res = await axios(`${API}/api/workshop`);
      set({ workshop: res.data, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useWorkshopStore;
