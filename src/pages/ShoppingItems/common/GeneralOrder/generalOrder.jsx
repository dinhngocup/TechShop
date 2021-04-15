import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './_generalOrder.scss'
import PaymentDetail from "components/ShoppingItemsComponents/PaymentDetail/paymentDetail";

function GeneralOrder() {
  const productsInCart = useSelector((state) => state.cart.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (productsInCart.length !== 0) {
      let price = productsInCart.reduce(
        (accumulator, currentValue) =>
          accumulator.price * accumulator.quantity +
          currentValue.price * currentValue.quantity
      );
      setTotalPrice(price);
    }
  }, [productsInCart]);
  return (
    <table className="table-payment">
      <tbody>
        {productsInCart.map((product, index) => {
          return <PaymentDetail key={product.id} product={product} />;
        })}
        <tr className="payment-detail">
          <td>Coupon Discount</td>
          <td className="discount">-500.000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="payment-detail">
          <td>Order Total</td>
          <td className="price">{totalPrice}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default GeneralOrder;
