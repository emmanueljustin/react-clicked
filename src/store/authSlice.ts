import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RegisterRequest from "../interfaces/request/RegisterRequest";

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
  registerForm: RegisterRequest;
}

const initialState: AuthState = {
  loading: false,
  username: "",
  password: "",
  registerForm: {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 0,
    gender: ""
  } as RegisterRequest,
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
    },

    register(state, action) {
      state.registerForm = action.payload;
      console.log(state.registerForm);
    }
  }
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
