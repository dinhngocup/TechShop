import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import SaleModal from "../../components/AdminProduct/SaleModal/saleModal";
import { getAllProducts } from "../../utilities/slices/productSlice";
import FilterBar from "./FilterBar/filterBar";
import ProductDetail from "./ProductDetail/productDetail";
import ProductList from "./ProductList/productList";
import SearchBar from "./SearchBar/searchBar";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./_main.scss";

function AdminProduct(props) {
  const filterItem = useSelector((state) => state.filterProduct.filters);
  const stateProducts = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState();
  const [renderProducts, setRenderProducts] = useState();
  // const [productDetailId, setProductDetailId] = useState();

  const location = useLocation();
  const history = useHistory();
  const currentAction = location.search
    ? new URLSearchParams(location.search).get("action")
    : 0;
  const productIdURL = location.search
    ? new URLSearchParams(location.search).get("id")
    : 0;

  useEffect(() => {
    setRenderProducts(stateProducts.allProducts);
  }, [filterItem, searchInput, stateProducts]);

  useEffect(() => {
    async function fetchProduct() {
      // setLoading(true);
      await dispatch(getAllProducts());
    }
    if (!stateProducts.allProducts) {
      fetchProduct();
    } else {
      // setLoading(false);
    }
  }, [dispatch, stateProducts]);

  return (
    <div className="body-content">
      <div className="product-table" style={{ height: "4500px" }}>
        {!currentAction ? (
          <>
            <SearchBar
              updateSearchInput={(keyword) => setSearchInput(keyword)}
            />
            <FilterBar />
          </>
        ) : (
          ""
        )}
        <div className="my-3 product-table-header">
          <h2 className="text-center">
            {!productIdURL ? "Products" : "New Product"}
          </h2>
          {!currentAction ? (
            <NavLink to={`${location.pathname}?action=add`}>
              <Button>
                <b>Add new</b>
              </Button>
            </NavLink>
          ) : (
            <Button onClick={() => history.goBack()}>
              <b>Back</b>
            </Button>
          )}
        </div>
        {!currentAction ? (
          <ProductList products={renderProducts} />
        ) : (
          <ProductDetail id={productIdURL} />
        )}
        <SaleModal />
      </div>
    </div>
  );
}

AdminProduct.propTypes = {};

export default AdminProduct;
