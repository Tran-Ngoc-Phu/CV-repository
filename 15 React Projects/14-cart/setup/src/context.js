import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: true,
    cart: cartItems,
    totalPrice: 0,
    totalAmount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const increase = (id) => {
    dispatch({
      type: "INCREASE",
      id: id,
    });
  };
  const decrease = (id) => {
    dispatch({
      type: "DECREASE",
      id: id,
    });
  };
  const remove = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "LOADING",
        loading: true,
      });
      const response = await fetch(url);
      const newCart = await response.json();
      dispatch({
        type: "DISPLAY_ITEM",
        newFetchCart: newCart,
      });
      dispatch({
        type: "LOADING",
        loading: false,
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({
      type: "TOTAL_PRICE",
    });
    dispatch({
      type: "TOTAL_AMOUNT",
    });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        remove,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
