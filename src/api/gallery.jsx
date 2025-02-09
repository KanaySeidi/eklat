import axios from "axios";
import { create } from "zustand";

const API = import.meta.env.VITE_API_URL;

const useGalleryStore = create((set) => ({
  err: null,
  gallery: [],
  fetchGallery: async () => {
    try {
      const res = await axios(`${API}/api/gallery/`);
      set({ gallery: res.data.images, err: null });
    } catch (err) {
      set({ err: err.message });
    }
  },
}));

export default useGalleryStore;
