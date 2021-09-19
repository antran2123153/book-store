import { BOOKS } from "app/data";
import { setBooks } from "features/books/booksSlice";
import { addCart } from "features/cart/cartSlice";
import { selectCurrentUser } from "features/session/sessionSlice";
import React, { useEffect } from "react";
import {
  IoIosAddCircleOutline,
  IoIosCellular,
  IoMdContacts,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CardBook.scss";

function CardBook(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const setMyBooks = () => dispatch(setBooks(BOOKS));
    setMyBooks();
  }, [dispatch]);

  const currentBook = props.book;

  const {
    title,
    price,
    hot,
    address,
    type,
    author,
    time,
    imgDemo,
    description,
  } = currentBook;

  const url = "/product/:id";

  return (
    <div className="cardbook">
      <div className="cardbook__top">
        <Link to={url} title={description}>
          <img src={imgDemo} alt="" className="cardbook__top-img" />
        </Link>
        {hot && <span className="cardbook__top-hot">HOT</span>}
        <span className="cardbook__top-price">{price}</span>
        {currentUser.username && (
          <span
            className="cardbook__top-get"
            onClick={() => {
              dispatch(addCart(currentBook));
            }}
          >
            <IoIosAddCircleOutline /> GET
          </span>
        )}
      </div>
      <div className="cardbook__body">
        <h2 className="cardbook__body-title">
          <Link to={url}>{title}</Link>
        </h2>
        <p className="cardbook__body-address">
          <IoIosCellular /> {address}
        </p>
        <p className="cardbook__body-type">{type.join(", ")}</p>
      </div>
      <hr />
      <div className="cardbook__end">
        <span className="cardbook__end-left">
          <IoMdContacts /> {author}
        </span>
        <span className="cardbook__end-right">{time}</span>
      </div>
    </div>
  );
}

export default CardBook;
