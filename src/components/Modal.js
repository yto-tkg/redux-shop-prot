import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/CartSlice";
import { closeModal } from "../features/modal/ModalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div>
        <h4>買い物かごをすべて空にする</h4>
        <div>
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button onClick={() => dispatch(closeModal())}>やめとく</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
