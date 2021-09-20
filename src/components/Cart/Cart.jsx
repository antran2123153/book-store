import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./Cart.scss";

Cart.propTypes = {};

function Cart(props) {
  // const cartItems = useSelector(selectCart);

  const cartItems = [
    {
      item: {
        address: "2436 SW 8th St, Miami, FL 33135, USA",
        author: "Mikel Michellin",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel qui minus mollitia quis neque, modi voluptatibus quas aut nesciunt numquam earum animi delectus, ex assumenda magnam reprehenderit, quam dolores alias.",
        hot: true,
        id: 2,
        imgDemo:
          "https://kbimages1-a.akamaihd.net/0c1158a5-0e69-4fa8-8f39-e36655da1d05/1200/1200/False/mountain-tales.jpg",
        price: 125000,
        time: "2014",
        title: "Mountain Tales",
        type: ["DRAMA", "ROMANTIC"],
      },
      number: 7,
    },
    {
      item: {
        address: "2436 SW 8th St, Miami, FL 33135, USA",
        author: "Mikel Michellin",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel qui minus mollitia quis neque, modi voluptatibus quas aut nesciunt numquam earum animi delectus, ex assumenda magnam reprehenderit, quam dolores alias.",
        hot: true,
        id: 1,
        imgDemo:
          "https://kbimages1-a.akamaihd.net/0c1158a5-0e69-4fa8-8f39-e36655da1d05/1200/1200/False/mountain-tales.jpg",
        price: 125000,
        time: "2014",
        title: "Mountain Tales",
        type: ["DRAMA", "ROMANTIC"],
      },
      number: 7,
    },
  ];

  const discount = 1234;
  const number = cartItems.length;
  const numberAll = cartItems.reduce(function (acc, obj) {
    return acc + obj.number;
  }, 0);
  const price = cartItems.reduce(function (acc, obj) {
    return acc + obj.item.price * obj.number;
  }, 0);

  function handleAdd() {}

  function handleSub() {}

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__flex">
          <table className="cart__books cart__card">
            <tr>
              <th>STT</th>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>N</th>
              <th></th>
            </tr>
            {cartItems.map((book, index) => {
              return (
                <tr key={book.item.id} className="cart__books__item">
                  <td className="cart__books__item-stt">{index + 1}</td>
                  <td className="cart__books__item-img">
                    <img src={book.item.imgDemo} alt="" />
                  </td>
                  <td className="cart__books__item-name">{book.item.title}</td>
                  <td className="cart__books__item-price">{book.item.price}</td>
                  <td className="cart__books__item-number">{book.number}</td>
                  <td className="cart__books__item-btn">
                    <button onClick={handleAdd}>
                      <AiFillCaretUp />
                    </button>
                    <button onClick={handleSub}>
                      <AiFillCaretDown />
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="cart__price cart__card">
            <h3 className="cart__price-title">Your cart</h3>
            <hr />
            <p className="cart__price-number">
              Different number of books: {number}
            </p>
            <p className="cart__price-allnumber">
              Total number of books: {numberAll}
            </p>
            <p className="cart__price-price">Price: {price} VND</p>
            <p className="cart__price-discount">Discount: {discount} VND</p>
            <hr />
            <p className="cart__price-cost">Total: {price - discount} VND</p>
            <div className="cart__price-btn">
              <button>Delete cart</button>
              <button>Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
