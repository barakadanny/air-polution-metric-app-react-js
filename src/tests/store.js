import store from "../redux/configStore";

describe("Store", () => {
  it("should render the store", () => {
    expect(store.getState()).toEqual({ place: [] });
  });
});
