import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillGeoFill } from "react-icons/bs";
import { fetchData } from "../../redux/reducer/place";
import { useDispatch } from "react-redux";
import "./item.css";

function Item({ name, lat, long }) {
  const dispatch = useDispatch();
  const fetchDataHandler = () => {
    dispatch(fetchData({ lat, long }));
  };

  return (
    <div className="item">
      <div className="item__content">
        <div className="item__title">
          <h3>{name}</h3>
          <Link
            to={`/detail/${name}/${lat}/${long}`}
            onClick={fetchDataHandler}
          >
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
