import React from "react";
import "./_btn.scss";

function BtnAdd() {
  return (
    <button className="btn-main btn-tranform btn-add">
      <span className='name'>Add to cart</span>
      <span className='icon'>
        <i className="fa fa-shopping-cart"></i>
      </span>
    </button>
  );
}


export default BtnAdd;
