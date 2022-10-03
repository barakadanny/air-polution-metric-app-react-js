import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Nav />
      <Banner />
    </div>
  );
}

export default Home;
