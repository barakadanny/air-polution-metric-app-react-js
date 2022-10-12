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
        backgroundImage: `url("https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381_960_720.jpg")`,
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
