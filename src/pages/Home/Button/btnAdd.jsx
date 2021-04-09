import React from "react";
import "./_btn.scss";
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../app/cartSlice'

function BtnAdd(props) {
  const { id } = props;
  const dispatch = useDispatch()
  const handleAddToCart = (id) => {
    dispatch(
      addToCart({
        id: id,
        quantity: 1,
      })
    );
  };
  return (
    <button
      className="btn-main btn-tranform btn-add"
      onClick={() => {
        handleAddToCart(id);
      }}
    >
      <span className="name">Add to cart</span>
      <span className="icon">
        <i className="fa fa-shopping-cart"></i>
      </span>
    </button>
  );
}

export default BtnAdd;
