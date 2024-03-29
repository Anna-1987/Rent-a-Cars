import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://65ba50f7b4d53c0665529651.mockapi.io/api/rent-a-car';

export const LIMIT = 12;

const getAllCars = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/Advert');
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const getCars = async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/Advert?page=${page}&limit=${LIMIT}`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const getCarsThunk = createAsyncThunk(
    'cars/getCars',
    getCars
);
export const getAllCarsThunk = createAsyncThunk(
    'cars/getAllCars',
    getAllCars
);