import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Payload
interface PayLoad {
  username: string;
  password: string;
}

// State
interface AuthState {
  loading: boolean;
  username: string;
  password: string;
}

const initialState: AuthState = {
  loading: false,
  username: "",
  password: "",
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<PayLoad>) {
      state.username = action.payload.username;
      state.password = action.payload.password;

      console.log(state.username);
      console.log(state.password);
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
