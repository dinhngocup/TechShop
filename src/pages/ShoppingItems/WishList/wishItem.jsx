import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductApi from "../../../api/productApi";
import parseImages from "../../../helpers/parseImages";
import { addToCart } from "../../../utilities/slices/cartSlice";
import { editWishList } from "../../../utilities/slices/wishListSlice";
import noimage from "../../../assets/images/noimage.png";

function WishItem(props) {
  const { productInWishList } = props;

  const [product, setProduct] = useState({});
  const images = parseImages(product.images);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailedProduct = async (id) => {
      let response = await ProductApi.getDetailedProduct(id);
      setProduct(response);
    };
    fetchDetailedProduct(productInWishList);
  }, [productInWishList]);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
      })
    );
    dispatch(editWishList(product.id));
  };

  return (
    <tr className="table-item">
      <td className="product">
        <img
          src={images.length > 0 ? images[0] : noimage}
          alt=""
          className=""
        />
        <div className="short-info">
          <Link
            className="name"
            to={`/product/${product.categorySlug}?id=${product.id}`}
            // onClick={() => dispatch(updateProductTemp(product.id))}
          >
            {product.name}
          </Link>
          <div className="brand">
            Brand: <i>{product.brandName}</i>
          </div>
          <div className="color">
            Color: <i>Rose gold</i>
          </div>
        </div>
      </td>
      <td className="price">{product.price}</td>

      <td className={product.stockStatus}>
        {product.stockStatus === "in-stock" ? "In Stock" : "Out of Stock"}
      </td>
      <td className="cart-icon">
        <button
          disabled={product.stockStatus === "in-stock" ? false : true}
          onClick={() => {
            handleAddToCart(product);
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
  productInWishList: PropTypes.number.isRequired,
};
WishItem.defaultProps = {
  productInWishList: "",
};

export default React.memo(WishItem);
