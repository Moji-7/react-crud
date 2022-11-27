import React, { useContext, useReducer } from "react";
import { shoppingContext } from "./Dashboard";

export const AddToCard = (props) => {
  let { shoppingCardReducer, dispatch } = useContext(shoppingContext);

  //////////////////

  
  const handleAddToCard = (e, item) => {
    e.preventDefault();

    dispatch({
      type: "add",
      //value: { id: item.id, item: item.name, count: 1, total: 0 },
      value:item
    });
  };
  return (
    <>
      <button onClick={(e) => handleAddToCard(e, props.item)}>
        AddToCard ({props.item.name})
      </button>
   
     
    </>
  );
};
