import React, { useContext, useState } from "react";
import { Item } from "semantic-ui-react";
import { shoppingContext } from "./Dashboard";

export const ShoppingCard = () => {
  let { shoppingCard, setShoppingCard, shoppingCardReducer, dispatch } =
    useContext(shoppingContext);
  const [total, setTotal] = useState();
  const handleClick = (e, typeItem) => {
    const { type, item } = typeItem;
    dispatch({
      type: type,
      value: item,
    });
  };
  return (
    <>
      ShoppingCard with reducer
      {shoppingCardReducer.items.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={(e) => handleClick(e, { type: "add", item: item })}>
              +
            </button>
            {item.name}
            <button onClick={(e) => handleClick(e, { type: "add", item: item })}>
              -
            </button>
          </div>
        );
      })}
      <span className="label">sum</span>
      {/* {shoppingCardReducer.total} */}
      
    </>
  );
};
