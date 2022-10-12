import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/homeScreen/Banner';
import Items from '../components/homeScreen/Items';

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
