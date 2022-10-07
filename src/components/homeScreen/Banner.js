import React, { useState, useEffect } from "react";
import axios from "../../API/axios";
import requests from "../../API/Request";
import "./Banner.css";

function Banner() {
  // const [city, setCity] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchLondon);
  //     //   setCity(request.data);
  //     //   return request;
  //   }
  //   fetchData();
  // }, []);
  // console.log(city);

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
