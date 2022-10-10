import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Europe</h1>
        <div className="banner__details">
          <span>15.2354 N</span> <br />
          <span>54.52 E</span>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
