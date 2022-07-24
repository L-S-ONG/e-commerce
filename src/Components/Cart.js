import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="min-h-screen w-10/12 mx-auto ">
        <div className="h-full flex flex-col bg-white shadow-xl ">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h1>
            </div>

            {totalCount <= 0 && <h1>No items in the Cart</h1>}

            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cart.map((item) => {
                    const { id, title, image, price, count } = item;
                    return (
                      <li key={id} className="py-6 flex ">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <Link key={id} to={`/product/${id}`}>
                                <h3 className="text-blue-700">{title}</h3>
                              </Link>
                              <p className="ml-4">${price}</p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div></div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                              <button
                                onClick={() => dispatch(removeFromCart(item))}
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                              >
                                -
                              </button>
                              <button
                                type="button"
                                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                              >
                                {count}
                              </button>
                              <button
                                onClick={() => dispatch(addToCart(item))}
                                type="button"
                                className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <hr className="my-3 border" /> */}
              <div className="bg-gray-200 p-3 mt-8 font-bold flex w-full justify-between items-center">
                <p>Total: </p>
                <p>$ {parseFloat(totalPrice.toFixed(2))}</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            onClick={() => dispatch(clearCart())}
            className="w-full my-4 justify-center inline-flex items-center px-2.5 py-1.5 border border-transparent text-xl font-medium rounded shadow-sm text-white bg-gray-800 hover:bg-gray-900 "
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;