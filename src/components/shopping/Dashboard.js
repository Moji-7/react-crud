import React, { createContext, useReducer, useState } from "react";
import { ProductItems } from "./ProductItems";
import { ShoppingCard } from "./ShoppingCard";
import "./style.css";
export const shoppingContext = createContext();
export const Dashboard = () => {
  //stateful

  //reducer stateful
  const initShoppingCard = { items: [], total: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        console.log("this is value", action.value);
        return {
          // ...state,
          items: [...state.items, action.value],
          total: parseInt(state.total) + parseInt(action.value.price),
        };

        break;

      default:
        break;
    }
  };

  const [shoppingCardReducer, dispatch] = useReducer(reducer, initShoppingCard);

  //pass to context
  const value = {
    shoppingCardReducer,
    dispatch,
  };
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <shoppingContext.Provider value={value}>
        <div className="productItem">
          <ProductItems />
        </div>
        <div className="shoppingCard">
          <ShoppingCard />
        </div>
      </shoppingContext.Provider>
    </div>
  );
};
