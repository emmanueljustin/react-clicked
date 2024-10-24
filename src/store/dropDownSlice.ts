import { createSlice } from "@reduxjs/toolkit";

interface DropDownState {
  selectedItem: string;
}

const initialState: DropDownState = {
  selectedItem: '',
}

const dropDownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    }
  }
});

export const { setSelectedItem } = dropDownSlice.actions;
export default dropDownSlice.reducer;
