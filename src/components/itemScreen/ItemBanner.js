import React from "react";
import "./ItemBanner.css";

function ItemBanner() {
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
        <h1 className="banner__title">Canada</h1>
        <div className="banner__details">
          <span>15.2354 N</span> <br />
          <span>54.52 E</span>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default ItemBanner;
