import React from 'react';
import Nav from '../components/Nav';
import ItemBanner from '../components/itemScreen/ItemBanner';
import ItemDetail from '../components/itemScreen/ItemDetail';

function ItemScreen() {
  return (
    <div className="itemScreen">
      <Nav />
      <ItemBanner />
      <ItemDetail />
    </div>
  );
}

export default ItemScreen;
