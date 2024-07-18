import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getImages: (state) => {
      //localStorage.clear();
      console.log(localStorage);
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const base64String = localStorage.getItem(key);
        state.images = [
          ...state.images,
          `data:image/jpeg;base64,${base64String}`,
        ];
      }
    },
    addImage: (state, { payload }) => {
      localStorage.setItem(payload.filename, payload.base64String);
      state.images = [
        ...state.images,
        `data:image/jpeg;base64,${payload.base64String}`,
      ];
    },
  },
});

export default dataSlice.reducer;
export const { getImages, addImage } = dataSlice.actions;
