import React from "react";
import { useDispatch } from "react-redux";
import { increase, removeItem, decrease } from "../features/cart/CartSlice";
import { MinusIcons, PlusIcons } from "../HeroIcons";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} />
      <div>
        <h4>{title}</h4>
        <h4>{price}円</h4>
        <button onClick={() => dispatch(removeItem(id))}>削除</button>
      </div>
      <div>
        <p>{amount}</p>
        <button onClick={() => dispatch(increase(id))}>
          <PlusIcons />
        </button>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <MinusIcons />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
