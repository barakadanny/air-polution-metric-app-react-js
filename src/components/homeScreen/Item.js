import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillGeoFill } from "react-icons/bs";
import "./item.css";

function Item({ name, lat, long, flag }) {
  return (
    <div className="item">
      <div className="item__content">
        <div className="item__title">
          <h3>{name}</h3>
          <Link to={`/detail/${name}/${lat}/${long}`}>
            <AiOutlineDoubleRight className="item__icon" />
          </Link>
        </div>
        <div className="item__description">
          <div className="">
            <span>{lat} &deg;N</span> <br />
            <span>{long} &deg;E</span>
          </div>
          <BsFillGeoFill className="item__icon" />
        </div>
      </div>
    </div>
  );
}

export default Item;
