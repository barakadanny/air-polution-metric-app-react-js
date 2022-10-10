import React from "react";
import Item from "./Item";
import placesData from "../../utility/placesData";
import "./Items.css";

function Items() {
  return (
    <div className="items">
      {/* input search */}
      <div className="items__search">
        <input className="search__input" type="text" placeholder="Search" />
      </div>
      {/* items */}
      <div className="items__container">
        {placesData.map((place) => (
          <Item
            key={place.id}
            id={place.id}
            name={place.name}
            lat={place.lat}
            long={place.long}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
