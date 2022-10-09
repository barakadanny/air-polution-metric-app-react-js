import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution?";
const API_KEY = "f1d8a4d595c7a03c5224b9f44ae09d6d";
const LOAD_DATA = "city/LOAD_DATA";

const initialState = {
  coord: {
    lon: 15.2551,
    lat: 54.526,
  },
  list: [
    {
      main: {
        aqi: 1,
      },
      components: {
        co: 185.25,
        no: 0,
        no2: 2.53,
        o3: 67.95,
        so2: 1.19,
        pm2_5: 4.82,
        pm10: 8.77,
        nh3: 1.33,
      },
      dt: 1665184397,
    },
  ],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    fetchPlaceDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});

// export const { fetchPlaceDetails } = placeSlice.actions;
export default placeSlice.reducer;
