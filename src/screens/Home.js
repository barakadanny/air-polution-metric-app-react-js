import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Items from "../components/Items";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <Items />
    </div>
  );
}

export default Home;
