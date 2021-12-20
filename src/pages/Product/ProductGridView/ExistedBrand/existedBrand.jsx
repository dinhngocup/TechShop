import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBrands } from "../../../../utilities/slices/brandSlice";
import "./_existedBrand.scss";

function ExistedBrand() {
  //console.log('brands')
  const stateBrands = useSelector((state) => state.brand.data);
  const stateProducts = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  // get brands
  useEffect(() => {
    async function fetchBrands() {
      await dispatch(getBrands());
    }

    if (!stateBrands.length) {
      fetchBrands();
    }
  }, [dispatch, stateBrands]);

  const renderListBrand = () => {
    let res = "";
    // console.log(stateProducts.filterProducts);
    res = stateBrands
      .filter((brand) => stateProducts.filterProducts[brand.name])
      .map((brand, index) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const brandName = brand.name;
        // console.log(brandName)
        // console.log(stateProducts.filterProducts)
        // console.log(stateProducts.filterProducts[brandName])
        return (
          <NavLink
            activeClassName="active"
            to={`/product/${brandName}`}
            key={brand.id}
          >
            <li className="">
              {brand.img ? (
                <img
                  src={`${process.env.REACT_APP_API_URL}${brand.img}`}
                  alt=""
                  className="mr-3"
                />
              ) : (
                ""
              )}
              <span>{brandName}</span>
              <span>
                {stateProducts.filterProducts[brandName]
                  ? stateProducts.filterProducts[brandName].length
                  : 0}
              </span>
            </li>
          </NavLink>
        );
      });
    return res;
  };

  return (
    <div className="option-table">
      <div className="option-table-heading">BRANDS</div>
      <div className="option-table-content brand-table filter-table">
        <ul>{stateProducts.filterProducts && renderListBrand()}</ul>
      </div>
    </div>
  );
}

export default ExistedBrand;
