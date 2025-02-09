import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useAboutStore = create((set) => ({
  err: null,
  about: [],
  fetchAbout: async () => {
    try {
      const res = await axios(`${API}/api/about-us/`);
      set({ about: res.data, err: null });
    } catch (err) {
      console.log("Короче ошибена", err);
      set({ err: err.message });
    }
  },
}));

export default useAboutStore;
