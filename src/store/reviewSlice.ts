import { createSlice } from "@reduxjs/toolkit";

interface Reviewstate {
  currIndex: number;
}

const initialState: Reviewstate = {
  currIndex: 0,
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    nextIndex: (state, action) => {
      state.currIndex = (state.currIndex + 1) % action.payload;
    },
    
    setIndex: (state, action) => {
      state.currIndex = action.payload;
    }
  }
});

export const { nextIndex, setIndex } = reviewSlice.actions;
export default reviewSlice.reducer;
