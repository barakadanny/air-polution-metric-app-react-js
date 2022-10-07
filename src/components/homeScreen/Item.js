import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillGeoFill } from "react-icons/bs";
import "./item.css";

function Item() {
  return (
    <div className="item">
      {/* air polution */}
      <div className="item__content">
        <div className="item__title">
          <h3>PARIS</h3>
          <AiOutlineDoubleRight className="item__icon" />
        </div>
        <div className="item__description">
          <div className="">
            <span>2.3522N</span> <br />
            <span>2.3522N</span>
          </div>
          <BsFillGeoFill className="item__icon" />
        </div>
      </div>
    </div>
  );
}

export default Item;
