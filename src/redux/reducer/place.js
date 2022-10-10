import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution?";
const API_KEY = "f1d8a4d595c7a03c5224b9f44ae09d6d";
const LOAD_DATA = "place/LOAD_DATA";

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

const fetchData = createAsyncThunk(LOAD_DATA, async (lat, long) => {
  const response = await fetch(
    // `${BASE_URL}lat=${lat}&lon=${long}&appid=${API_KEY}`
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=54.5260&lon=15.2551&appid=f1d8a4d595c7a03c5224b9f44ae09d6d`
  );
  const data = await response.json();
  //   console.log(data);
});

export default placeSlice.reducer;
export { fetchData };
