import ProductApi from "api/productApi";
import parseImages from 'helpers/parseImages';
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "utilities/slices/cartSlice";
import { editWishList } from "utilities/slices/wishListSlice";

function WishItem(props) {
  const { productInWishList } = props;
  //console.log("wish item", productInWishList);

  const [product, setProduct] = useState({});
  const images = parseImages(product.images)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailedProduct = async (id) => {
      let response = await ProductApi.getDetailedProduct(id);
      setProduct(response);
    };
    fetchDetailedProduct(productInWishList);
  }, [productInWishList]);

  const handleAddToCart = (id, name, price) => {
    dispatch(
      addToCart({
        id: id,
        quantity: 1,
        name: name,
        price: price,
      })
    );
    dispatch(editWishList(id));
  };

  return (
    <tr className="table-item">
      <td className="product">
        <img src={images[0]} alt="" className="" />
        <div className="short-info">
          <Link
            className="name"
            to={`/products/${product.categorySlug}/${product.productID}`}
          >
            {product.productName}
          </Link>
          <div className="brand">
            Brand: <i>{product.brandName}</i>
          </div>
          <div className="color">
            Color: <i>Rose gold</i>
          </div>
        </div>
      </td>
      <td className="price">{product.productPrice}</td>

      <td className={product.status?.stockStatus}>
        {product.status?.stockStatus === "in-stock"
          ? "In Stock"
          : "Out of Stock"}
      </td>
      <td className="cart-icon">
        <button
          disabled={product.status?.stockStatus === "in-stock" ? false : true}
          onClick={() => {
            handleAddToCart(product.productID, product.productName, product.productPrice);
          }}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
      </td>
      <td className="btn-remove">
        <i
          className="fa fa-times"
          onClick={() => {
            dispatch(editWishList(product.productID));
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
