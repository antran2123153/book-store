import React from "react";
import "./CardAboutUs.scss";

function CardAboutUs(props) {
  const { img, name, title, text, url } = props.info;
  return (
    <div className="teamhome__card">
      <img src={img} alt="" className="teamhome__card-img" />
      <div>
        <a href={url} className="teamhome__card-name">
          {name}
        </a>
      </div>
      <h2 className="teamhome__card-title">{title}</h2>
      <p className="teamhome__card-text">{text}</p>
      <a href={url} className="teamhome__card-name">
        View Profile
      </a>
    </div>
  );
}

export default CardAboutUs;
