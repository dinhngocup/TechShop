import GeneralOrder from "../../../../pages/ShoppingItems/common/GeneralOrder/generalOrder";
import React from "react";

function Order() {
  //console.log('order')
  return (
    <div>
      <div className='header'>
        <h4>Your order</h4>
      </div>
      <GeneralOrder />
    </div>
  );
}

export default React.memo(Order);
