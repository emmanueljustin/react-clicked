import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Payload {
  selectedForm: string;
}

interface FormSwitchState {
  activeForm: string;
}

const initialState: FormSwitchState = {
  activeForm: "login",
}

const formSwitchSlice = createSlice({
  name: 'formSwitch',
  initialState,
  reducers: {
    formToggle(state, action: PayloadAction<Payload>) {
      state.activeForm = action.payload.selectedForm;
    }
  }
});

export const { formToggle } = formSwitchSlice.actions;
export default formSwitchSlice.reducer;
