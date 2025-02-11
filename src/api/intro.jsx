import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useIntroStore = create((set) => ({
  intro: [],
  err: null,
  fetchIntro: async () => {
    try {
      const res = await axios(`${API}/api/main-banner`);
      set({ intro: res.data.results, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useIntroStore;
