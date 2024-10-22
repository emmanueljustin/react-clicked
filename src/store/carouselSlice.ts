import { createSlice } from "@reduxjs/toolkit";

interface CarouselState {
  currIndex: number;
}

const initialState: CarouselState = {
  currIndex: 0,
}

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    nextImgIndex: (state, action) => {
      state.currIndex = (state.currIndex + 1) % action.payload;
    },
    
    setImgIndex: (state, action) => {
      state.currIndex = action.payload;
    }
  }
});

export const { nextImgIndex, setImgIndex } = carouselSlice.actions;
export default carouselSlice.reducer;
