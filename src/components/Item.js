import React from "react";
import "./item.css";

function Item() {
  return (
    <div className="item">
      {/* air polution */}
      <div className="item__content">
        <div className="item__title">
          <h3>PARIS</h3>
        </div>
        <div className="item__description">
          <span>2.3522N</span> <br />
          <span>2.3522N</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
