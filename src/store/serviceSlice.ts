import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IPricing from "../interfaces/pricing";
import axios from "axios";

interface ServiceState {
  pricing: IPricing[];
  loading: boolean;
}

const initialState: ServiceState = {
  pricing: [],
  loading: false,
}

export const fetchPricing = createAsyncThunk(
  'service/fetchPricing',
  async () => {
    const headers = {
      'Accept': 'application/json'
    };
    const response = await axios.get('http://localhost:8080/api/v1/pricing/all', { headers });
    return response.data;
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPricing.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchPricing.fulfilled, (state, action) => {
      state.loading = false;
      state.pricing = action.payload.data;
    })
  }
});

export default serviceSlice.reducer;
