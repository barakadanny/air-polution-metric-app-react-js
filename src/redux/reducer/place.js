import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const API_KEY = 'f1d8a4d595c7a03c5224b9f44ae09d6d';
const LOAD_DATA = 'place/LOAD_DATA';

const fetchData = createAsyncThunk(LOAD_DATA, async (payload) => {
  console.log(payload);
  const response = await fetch(
    `${BASE_URL}lat=${payload.lat}&lon=${payload.long}&appid=${API_KEY}`,
  );
  const { list } = await response.json();
  console.log(list[0].components);
  return list[0].components;
});

const initialState = {};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => action.payload,
  },
});

export default placeSlice.reducer;
export { fetchData };
