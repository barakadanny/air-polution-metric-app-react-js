import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Nav from "../components/Nav";
import ItemDetail from "../components/itemScreen/ItemDetail";
import Items from "../components/homeScreen/Items";

describe("Navbar", () => {
  it("should render the navbar", () => {
    const nav = render(
      <Router>
        <Nav />
      </Router>
    );
    expect(nav).toMatchSnapshot();
  });
});

describe("ItemDetail", () => {
  it("should render the item detail", () => {
    const item = render(
      <Provider>
        <Router>
          <ItemDetail />
        </Router>
      </Provider>
    );
    expect(item).toMatchSnapshot();
  });
});

describe("Items", () => {
  it("should render the items", () => {
    const items = render(
      <Provider>
        <Router>
          <Items />
        </Router>
      </Provider>
    );
    expect(items).toMatchSnapshot();
  });
});
