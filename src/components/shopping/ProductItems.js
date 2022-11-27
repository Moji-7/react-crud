import React from "react";
import { AddToCard } from "./AddToCard";

export const ProductItems = () => {
  const merchantsInfo = [
    { id: 1, bestMerchantName: "fun studio", merchantsCounts: 2 },
    { id: 2, bestMerchantName: "women happy", merchantsCounts: 3 },
  ];
  const productItems = [
    {
      id: 1,
      name: "play station 5",
      category: "Gaming",
      price: 800.5,
      count: 2,
      hasOff: "10%",
      merchantInfo: merchantsInfo.find((x) => x.id === 1),
    },
    {
      id: 2,
      name: "set of eye cream",
      category: "Beauty",
      price: 66.2,
      count: 2,
      hasOff: "20%",
      merchantInfo: merchantsInfo.find((x) => x.id === 2),
    },
  ];
  return (
    <div>
      ProductItems
      {productItems.map((item, index) => (
        <div key={item.id}>
          <span className="itemName">{index + 1}) </span>
          <span className="itemName">{item.name}</span>
          <span>
          <span className="label">Category</span>
            <button>{item.category}</button>
          </span>
          <div>
            <span><span className="label">price</span>{item.price} filter</span>
            <span><span className="label">Off</span>{item.hasOff}</span>
          </div>
          <hr/>
          <div>
            <span><span className="label">best merchant</span>{item.merchantInfo.bestMerchantName}</span>
            <span>
            <span className="label">has other merchant</span>
              <button>{item.merchantInfo.merchantsCounts}</button>
            </span>
          </div>
          <AddToCard item={item}/>
        </div>
      ))}
    </div>
  );
};
