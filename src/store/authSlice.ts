import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RegisterRequest from "../interfaces/request/RegisterRequest";
import IUserDeatils from "../interfaces/userDetails";
import { EventStatus } from "../enums/eventStatus";
import fetchApi from "../axios/interceptor";
import LoginRequest from "../interfaces/request/LoginRequest";

// State
interface AuthState {
  status: EventStatus;
  token: string;
  username: string;
  password: string;
  userDetails: IUserDeatils;
  rememberMe: boolean;
  error: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async (loginForm: LoginRequest) => {
    const response = await fetchApi.post('/auth/login', loginForm);
    return response.data;
  }
);

export const createAccount = createAsyncThunk(
  'auth/createAccount',
  async (registerForm: RegisterRequest) => {
    const response = await fetchApi.post('/auth/register', registerForm);
    return response.data
  }
);

const initialState: AuthState = {
  status: EventStatus.initial,
  token: "",
  username: "",
  password: "",
  userDetails: {} as IUserDeatils,
  rememberMe: false,
  error: ""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleRemember(state, actions) {
      state.rememberMe = actions.payload;
    }
  },
  extraReducers: (builder) => {
    // Registration Cases
    builder.addCase(createAccount.pending, (state) => {
      state.status = EventStatus.loading;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.status = EventStatus.success;
      state.userDetails = action.payload.data;
    });
    builder.addCase(createAccount.rejected, (state) => {
      state.status = EventStatus.failed;
      state.error = "Something went wrong"
    });

    // Login Cases
    builder.addCase(login.pending, (state) => {
      state.status = EventStatus.loading;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = EventStatus.success;
      state.token = action.payload.data;
      console.log(state.token);
    });
    builder.addCase(login.rejected, (state) => {
      state.status = EventStatus.failed;
      state.error = "Something went wrong"
    });
  }
});

export const { toggleRemember } = authSlice.actions;
export default authSlice.reducer;
