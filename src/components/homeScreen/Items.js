import React from "react";
import Item from "./Item";
import placesData from "../../utility/placesData";
import "./Items.css";

function Items() {
  return (
    <div className="items">
      {placesData.map((place) => (
        <Item
          key={place.id}
          id={place.id}
          name={place.name}
          lat={place.lat}
          long={place.long}
          flag={place.flagUrl}
        />
      ))}
    </div>
  );
}

export default Items;
