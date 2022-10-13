import store from '../redux/configStore';
import { fetchData } from '../redux/reducer/place';

describe('Store', () => {
  it('should render the initial state', () => {
    expect(store.getState()).toEqual({ place: {} });
  });

  it('should render the state after fetching data', () => {
    const data = {
      co: 0.0001,
      no: 0.0001,
      no2: 0.0001,
      o3: 0.0001,
      so2: 0.0001,
      pm2_5: 0.0001,
      pm10: 0.0001,
      nh3: 0.0001,
    };
    store.dispatch(fetchData.fulfilled(data));
    expect(store.getState()).toEqual({ place: data });
  });
});
