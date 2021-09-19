import React from "react";

CartPage.propTypes = {};

function CartPage(props) {
  return <div></div>;
}

export default CartPage;

// import React from "react";
// import { selectCart } from "features/cart/cartSlice";
// import { useSelector } from "react-redux";
// import CartItem from "components/Carts/CartItem";

// export default function Cart() {
//   const cartItems = useSelector(selectCart);
//   //   console.log(cartItems);

//   const arrayOfItem = (cartItems) => {
//     const listItem = cartItems.map((item) => {
//       return (
//         <CartItem item={item.item} number={item.number} key={item.item.title} />
//       );
//     });
//     return listItem;
//   };

//   const countTotal = (cartItems) => {
//     return cartItems.reduce((prev, current) => {
//       return prev + current.item.price * current.number;
//     }, 0);
//   };

//   return (
//     <div>
//       <main>
//         <section className="bg-blueGray-200 pt-20">
//           <div className="container mx-auto px-10 py-10">
//             <div className="flex flex-wrap">
//               <div className="lg:pt-6 pt-6 w-full md:w-8/12 px-4 text-center shadow-lg rounded-lg bg-white mb-6">
//                 <h6 className="text-2xl font-bold border-b-2 py-1">
//                   Your Book Cart
//                 </h6>
//                 {cartItems.length === 0 ? (
//                   <div className="px-12 relative relative flex flex-row min-w-0 w-full border-b-2 py-2">
//                     <div className="px-12 py-2 flex">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-60 w-60"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                         />
//                       </svg>
//                       <div className="px-12 py-2 flex flex-col">
//                         <h6 className="text-xl font-semibold">
//                           Your cart is now empty
//                         </h6>
//                         <h1 className="text-blueGray-500">
//                           Please come back to homepage and choose your book
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   arrayOfItem(cartItems)
//                 )}
//               </div>
//               <div className="md:w-4/12 w-full px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white ">
//                   <div className="px-2 py-5 flex-auto">
//                     <div className="py-3">
//                       <h6 className="text-2xl font-bold border-b-2">Total</h6>
//                       <h1 className="text-blueGray-500 text-xl">
//                         All you need to pay is
//                       </h1>
//                       <h1 className="text-blueGray-500 text-xl font-bold py-2">
//                         {(countTotal(cartItems) * 1000).toLocaleString(
//                           "it-IT",
//                           { style: "currency", currency: "VND" }
//                         )}
//                       </h1>
//                       <div className="flex flex-wrap">
//                         <button
//                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 w-full "
//                           type="button"
//                         >
//                           Make your payment
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
