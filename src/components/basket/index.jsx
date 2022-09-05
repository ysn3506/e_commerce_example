import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../basketItem";
import { calculateBasketTotalCost } from "../../utils/helpers";
import "./style.scss";

function Basket() {
    const { basketItems, hidden } = useSelector((state) => state.basket);
      const { filterHidden } = useSelector((state) => state.items);

  return (
    <div
      className={`basket-wrapper ${hidden && "hidden"} ${ filterHidden && "back"
      } `}
    >
      {basketItems.length === 0 ? (
        <p>There are no products in your cart yet.</p>
      ) : (
        <>
          {basketItems.map((item) => (
            <BasketItem key={item.name} item={item} />
          ))}
          <div className="basket-bottom">
            <div className="total-price">
              {`₺${calculateBasketTotalCost()}`}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
