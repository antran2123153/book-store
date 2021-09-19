import React from "react";
import PropTypes from "prop-types";
import "./CardTypesBook.scss";
import { Link } from "react-router-dom";

function CardTypesBook(props) {
  const { count, name, path } = props.type;
  return (
    <div className="cardtype">
      <div className="cardtype__top">
        <p className="cardtype__top-num">{count} Book</p>
        <h2 className="cardtype__top-name">{name}</h2>
      </div>
      <div className="cardtype__bot">
        <Link to={path}>MORE DETAIL</Link>
      </div>
    </div>
  );
}

export default CardTypesBook;
