import React from "react";
import { addCart, removeCart } from "features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function CartItem(props) {
    const dispatch = useDispatch();
    const { item, number } = props;
    const addMoreItem = () => {
        dispatch(addCart(item));
    }
    const subMoreItem = () => {
        if (number === 1) confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="bg-white shadow-lg rounded-lg text-center border-1">
                        <div className="px-2">
                            <div className="px-3 py-3">
                                <p className="text-xl font-semibold">Remove item</p>
                                <p className="mx-10">Are you sure to remove this item from your cart?</p>
                                <div className="flex flex-row justify-between px-10 py-2">
                                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" onClick={onClose}>No</button>
                                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                        onClick={() => {
                                            dispatch(removeCart(item));
                                            onClose();
                                        }}
                                    >
                                        Yes, Remove it!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        });
        else {
            dispatch(removeCart(item));
        }
    }
    return (
        <div className="relative flex flex-row justify-between min-w-0 break-words w-full border-b-2 py-2">
            <div className="px-2 py-2 flex">
                <div className="px-12">
                    <img className="rounded w-32"
                        alt="..."
                        src={item.imgDemo}
                    />
                </div>

                <div className="px-1">
                    <h6 className="text-xl font-semibold">{item.title}</h6>
                    <p className="text-blueGray-500">
                        {item.author}
                    </p>
                    <p className="text-blueGray-500">
                        Price: {(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </div>

            </div>
            <div className="px-2 py-2">
                <div className="flex flex-row items-center inline-block">
                    <button onClick={addMoreItem}
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded outline-none focus:outline-none mr-1 mb-1 items-center py-1"
                        type="button"
                    >
                        +</button>
                    <input type="number" className="w-10 h-10 rounded mr-1 mb-1 text-center border-none" name="custom-input-number" value={number} disabled={true} />
                    <button onClick={subMoreItem}
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded outline-none focus:outline-none mr-1 mb-1 pb-2 items-center py-1"
                        type="button"
                    >
                        -</button>
                </div>
                <h6 className="text-xl font-semibold">SubTotal</h6>
                <p className="text-blueGray-500">
                    {(number * item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </p>
            </div>
        </div>
    )
}