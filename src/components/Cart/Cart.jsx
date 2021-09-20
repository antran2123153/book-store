import { selectCart } from "features/cart/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "./CartItem";
export default function Cart() {
  const cartItems = useSelector(selectCart);
  // console.log(cartItems);

  const arrayOfItem = (cartItems) => {
    const listItem = cartItems.map((item) => {
      return (
        <CartItem item={item.item} number={item.number} key={item.item.title} />
      );
    });
    return listItem;
  };

  // const countTotal = (cartItems) => {
  //   return cartItems.reduce((prev, current) => {
  //     return prev + current.item.price * current.number;
  //   }, 0);
  // };

  const discount = 1234;
  const number = cartItems.length;
  const numberAll = cartItems.reduce(function (acc, obj) {
    return acc + obj.number;
  }, 0);
  const price = cartItems.reduce(function (acc, obj) {
    return acc + obj.item.price * obj.number;
  }, 0);
  return (
    <div>
      <main>
        <section
          className="bg-blueGray-200 pt-20"
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/images/login-bg.jpg").default +
              ")",
          }}
        >
          <div className="container mx-auto px-10 py-10">
            <div className="flex flex-wrap justify-content-between">
              <div className="lg:pt-6 pt-6 w-full md:w-8/12 px-4 text-center shadow-lg rounded-lg bg-white mb-6">
                <h6 className="text-2xl font-bold border-b-2 py-1">
                  Your Book Cart
                </h6>
                {cartItems.length === 0 ? (
                  <div className="px-12 relative relative flex flex-row min-w-0 w-full border-b-2 py-2">
                    <div className="px-12 py-2 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-60 w-60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div className="px-12 py-2 flex flex-col">
                        <h6 className="text-xl font-semibold">
                          Your cart is now empty
                        </h6>
                        <p className="text-blueGray-500">
                          Please come back to homepage and choose your book
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  arrayOfItem(cartItems)
                )}
              </div>
              <div className="cart__price cart__card">
                <h6 className="text-2xl font-bold text-center">Your Receipt</h6>
                <hr />
                <p className="cart__price-number">
                  Different number of books: {number}
                </p>
                <p className="cart__price-allnumber">
                  Total number of books: {numberAll}
                </p>
                <p className="cart__price-price">
                  Price:{" "}
                  {price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="cart__price-discount">
                  Discount: -
                  {discount.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}{" "}
                </p>
                <hr />
                <p className="cart__price-cost">
                  Total:{" "}
                  {(price - discount).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <div className="cart__price-btn">
                  <button>Delete cart</button>
                  <button>Payment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
