import React, { useState, useEffect } from "react";
import { Button, Form } from "reactstrap";
import SaleModal from "../../components/AdminProduct/SaleModal/saleModal";
import ProductList from "./ProductList/productList";
import "./_main.scss";
import SearchBar from "./SearchBar/searchBar";
import FilterBar from "./FilterBar/filterBar";
import MainInfo from "./MainInfo/mainInfo";
import ProductSpecification from "./Specification/productSpecification";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../utilities/slices/productSlice";

function AdminProduct(props) {
  const filterItem = useSelector((state) => state.filterProduct.filters);
  const stateProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [isProductList, setIsProductList] = useState(true);
  const [searchInput, setSearchInput] = useState();
  const [renderProducts, setRenderProducts] = useState();

  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  useEffect(() => {
    setRenderProducts(stateProducts.allProducts)

    // console.log(stateProducts)
    console.log("filter bar", filterItem);
    console.log("search input", searchInput);

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
        {isProductList ? (
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
            {isProductList ? "Products" : "New Product"}
          </h2>
          {isProductList ? (
            <Button onClick={() => setIsProductList(false)}>
              <b>Add new</b>
            </Button>
          ) : (
            <Button onClick={() => setIsProductList(true)}>
              <b>Back</b>
            </Button>
          )}
        </div>
        {isProductList ? (
          <ProductList products={renderProducts} />
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <MainInfo />
              <ProductSpecification />
              <Button type="submit" className="w-100 btn-submit">
                Add
              </Button>
            </Form>
          </>
        )}
        <SaleModal />
      </div>
    </div>
  );
}

AdminProduct.propTypes = {};

export default AdminProduct;
