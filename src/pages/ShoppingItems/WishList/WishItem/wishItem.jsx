import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductApi from "../../../../api/productApi";
import image from "../../../../assets/images/pic7.jpeg";
import { editWishList } from "../wishListSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Cart/cartSlice";

function WishItem(props) {
  const { productInWishList } = props;
  //console.log("wish item", productInWishList);

  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailedProduct = async (id) => {
      let response = await ProductApi.getDetailedProduct(id);
      setProduct(response);
    };
    fetchDetailedProduct(productInWishList);
  }, [productInWishList]);

  const handleAddToCart = (id) => {
    dispatch(
      addToCart({
        id: id,
        quantity: 1,
      })
    );
    dispatch(editWishList(id));
  };

  return (
    <tr className="table-item">
      <td className="product">
        <img src={image} alt="" className="" />
        <div className="short-info">
          <Link
            className="name"
            to={`/products/${product.category}/${product.id}`}
          >
            {product.name}
          </Link>
          <div className="brand">
            Brand: <i>{product.brand}</i>
          </div>
          <div className="color">
            Color: <i>Rose gold</i>
          </div>
        </div>
      </td>
      <td className="price">{product.price}</td>

      <td className={product.status?.stockStatus}>
        {product.status?.stockStatus === "in-stock"
          ? "In Stock"
          : "Out of Stock"}
      </td>
      <td className="cart-icon">
        <button
          disabled={product.status?.stockStatus === "in-stock" ? false : true}
          onClick={() => {
            handleAddToCart(product.id);
          }}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
      </td>
      <td className="btn-remove">
        <i
          className="fa fa-times"
          onClick={() => {
            dispatch(editWishList(product.id));
          }}
        ></i>
      </td>
    </tr>
  );
}

WishItem.propTypes = {
  productInWishList: PropTypes.string.isRequired,
};
WishItem.defaultProps = {
  productInWishList: "",
};

export default React.memo(WishItem);
