import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution?";
const API_KEY = "f1d8a4d595c7a03c5224b9f44ae09d6d";
const LOAD_DATA = "city/LOAD_DATA";

const initialState = [
  {
    city: "London",
    lat: 51.5074,
    lon: 0.1278,
    list: [
      {
        main: {
          aqi: 1,
        },
        components: {
          co: 0.5,
          no: 0,
          no2: 0.46,
          o3: 16.11,
          so2: 0.01,
          pm2_5: 0.01,
          pm10: 0.01,
          nh3: 188.59,
        },
      },
    ],
  },
];

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
