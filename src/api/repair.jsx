import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useRepairStore = create((set) => ({
  repair: [],
  err: null,
  fetchRepair: async () => {
    try {
      const res = await axios(`${API}/api/repair`);
      set({ repair: res.data, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useRepairStore;
