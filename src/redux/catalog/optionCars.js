import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchCars} from '../api';

export const fetchAllCars = createAsyncThunk(
    'cars/fetchCars',
    async (_, thunkAPI) => {
      try {
        const catalog = await fetchCars();
        console.log(catalog);
        return catalog;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
