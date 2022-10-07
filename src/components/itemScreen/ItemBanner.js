import React from "react";
import { useParams } from "react-router-dom";
import "./ItemBanner.css";

function ItemBanner() {
  const { name, lat, long } = useParams();
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.pexels.com/photos/2448946/pexels-photo-2448946.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{name}</h1>
        <div className="banner__details">
          <span>{lat} &deg;N</span> <br />
          <span>{long} &deg;E</span>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default ItemBanner;
