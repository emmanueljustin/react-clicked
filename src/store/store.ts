import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import serviceReducer from './serviceSlice';
import reviewReducer from './reviewSlice';
import carouselReducer from './carouselSlice';
import dropDownReducer from './dropDownSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    service: serviceReducer,
    review: reviewReducer,
    carousel: carouselReducer,
    dropDown: dropDownReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
