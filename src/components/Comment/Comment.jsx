import React from "react";
import PropTypes from "prop-types";
import "./Comment.scss";

Comment.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  mess: PropTypes.string,
};

Comment.defaultProps = {
  img: require("assets/images/avt-about-us.png").default,
  name: "Nguyen Van A",
  mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque, odio rerum soluta cumque quidem possimus voluptas fugiat perspiciatis quod eligendi eaque inventore voluptatibus iure,    laudantium qui repudiandae quas omnis?",
};

function Comment(props) {
  const { img, name, mess } = props;

  return (
    <div className="comment">
      <div className="comment__avt">
        <img src={img} alt="" />
      </div>
      <div className="comment__content">
        <div className="comment__content-title">{name}</div>
        <div className="comment__content-mess">{mess}</div>
      </div>
    </div>
  );
}

export default Comment;
