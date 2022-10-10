import React from "react";
import { useSelector } from "react-redux";
import "./ItemDetail.css";

function ItemDetail() {
  const place = useSelector((state) => console.log(state.place));
  return (
    <div className="item__detail">
      {/* {place.map((place) => (
        <div className="item__detail__content">
          <div className="item__detail__title">NH3:</div>
          <div className="item__detail__description">188.59</div>
        </div>
      ))} */}
      {/* <div className="item__detail__content">
        <div className="item__detail__title">NO2:</div>
        <div className="item__detail__description">0.46</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">O3:</div>
        <div className="item__detail__description">16.11</div>
      </div> */}
    </div>
  );
}

export default ItemDetail;
