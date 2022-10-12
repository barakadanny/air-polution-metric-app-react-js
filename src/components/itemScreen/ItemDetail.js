import React from 'react';
import { useSelector } from 'react-redux';
import './ItemDetail.css';

function ItemDetail() {
  const place = useSelector((state) => state.place);
  return (
    <div className="item__detail">
      <div className="item__detail__content">
        <div className="item__detail__title">CO:</div>
        <div className="item__detail__description">{place.co}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">NH3:</div>
        <div className="item__detail__description">{place.nh3}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">NO:</div>
        <div className="item__detail__description">{place.no}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">NO2:</div>
        <div className="item__detail__description">{place.no2}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">03:</div>
        <div className="item__detail__description">{place.o3}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">PM2_5:</div>
        <div className="item__detail__description">{place.pm2_5}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">PM10:</div>
        <div className="item__detail__description">{place.pm10}</div>
      </div>
      <div className="item__detail__content">
        <div className="item__detail__title">SO2:</div>
        <div className="item__detail__description">{place.so2}</div>
      </div>
    </div>
  );
}

export default ItemDetail;
