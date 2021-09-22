import { selectBooks } from "features/books/booksSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./BookDetail.scss";
import { MdStars } from "react-icons/md";
import { addCart } from "features/cart/cartSlice";
import { selectCurrentUser } from "features/session/sessionSlice";
import { Comment } from "components";

function BookDetail(props) {
  const books = useSelector(selectBooks);
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBook = books.find((book) => book.id === parseInt(id));
  const currentUser = useSelector(selectCurrentUser);
  const [visible, setVisible] = useState(2);

  const showMore = () => {
    setVisible((oldValue) => oldValue + 2);
  };

  const test_array_comment = [1, 2, 3, 4, 5, 6, 7, 8];

  const { author, price, title, type, imgDemo, description, time } =
    currentBook;

  return (
    <div className="bg-bookdetail">
      <div className="container">
        <div className="bookdetail">
          <div className="bookdetail__banner">
            <img src={imgDemo} alt="" className="bookdetail__banner-img" />
            <div className="bookdetail__banner-title">
              <div className="bookdetail__banner-title-name">
                <h1>{title}</h1>
              </div>
              <div className="bookdetail__banner-title-star">
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
              </div>
              <div className="bookdetail__banner-title-author">
                Author: {author}
              </div>
              <div className="bookdetail__banner-title-price">
                Price: {price}
              </div>
              <div className="bookdetail__banner-title-type">
                Book category: {type.join(", ")}
              </div>
              <div className="bookdetail__banner-title-type">
                Publishing year: {time}
              </div>
              {currentUser.username && (
                <div className="bookdetail__banner-title-btn">
                  <button
                    onClick={() => {
                      dispatch(addCart(currentBook));
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="bookdetail__body">
            <h4 className="bookdetail__body-title">Description:</h4>
            <div className="bookdetail__body-content">{description}</div>
          </div>
          <hr />
          <div className="bookdetail__comment">
            <div className="bookdetail__comment-title">
              <h4>Comments</h4>
              <button>Add new +</button>
            </div>
            <div className="bookdetail__comment-list">
              {test_array_comment.slice(0, visible).map(() => {
                return (
                  <>
                    <Comment />
                    <hr />
                  </>
                );
              })}
            </div>
            {visible !== test_array_comment.length && (
              <div className="bookdetail__comment-morebtn">
                <button onClick={showMore}>Show more</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
