import { createSlice } from '@reduxjs/toolkit';
import {fetchAllCars} from './optionCars';

const handlePending = state => {
  state.isLoading = true;
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
   
    isLoading: false,
    error: null,
  },
//   reducers: {
//     setCurrentFilter(state, {payload}) {
//       state.currentFilter = payload;
//     },
//     setCurrentCategorie(state, {payload}) {
//       state.currentCategorie = payload;
//     }
//   },
  extraReducers: builder =>
    builder
    .addCase(fetchAllCars.pending, handlePending)
    .addCase(fetchAllCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cars = action.payload;
    })
})

export const carsReducer = carsSlice.reducer;