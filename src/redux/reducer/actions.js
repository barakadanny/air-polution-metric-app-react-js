// export const getData = (payload) => ({ type: GET_PARIS, payload });
// export const getCoord = (payload) => ({ type: GET_COORD, payload });

const BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution?";
const API_KEY = "f1d8a4d595c7a03c5224b9f44ae09d6d";
const LOAD_DATA = "city/LOAD_DATA";

const EUROPE =
  "https://api.openweathermap.org/data/2.5/air_pollution?lat=54.5260&lon=15.2551&appid=f1d8a4d595c7a03c5224b9f44ae09d6d";

const load = (data) => ({
  type: LOAD_DATA,
  data,
});

export const getEurope = () => async (dispatch) => {
  const res = await fetch(EUROPE);
  const data = await res.json();
  dispatch(load(data));
};

const initialState = { data: null };

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      const newState = {};
      newState.data = action.data;
      return newState;
    }
    default:
      return state;
  }
}
