import React, { useState, useEffect } from "react";
import BrandCategoryHeader from "../../components/AdminBrandCategory/BrandCategoryHeader/brandCategoryHeader";
import "./_adminBrand.scss";
import { CATEGORY_TAB_INDEX, BRAND_TAB_INDEX } from "./type";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../utilities/slices/brandSlice";
import { getCategories } from "../../utilities/slices/categorySlice";
import SupportedTable from "./SupportedTable/supportedTable";
import SupplierModal from "../../components/AdminBrandCategory/SupplierModal/supplierModal";
import CancelModal from "../../components/AdminBrandCategory/CancelModal/cancelModal";

function SupportedSupplier(props) {
  console.log("main");
  const [activeTab, setActiveTab] = useState(CATEGORY_TAB_INDEX);
  const [modalData, setModalData] = useState();
  console.log(modalData);
  const stateCategories = useSelector((state) => state.category.data);
  const stateBrands = useSelector((state) => state.brand.data);

  const dispatch = useDispatch();

  // get categories
  useEffect(() => {
    async function fetchCategories() {
      await dispatch(getCategories());
    }
    if (!stateCategories.length) {
      fetchCategories();
    }
  }, [dispatch, stateCategories]);

  // get brands
  useEffect(() => {
    async function fetchBrands() {
      await dispatch(getBrands());
    }
    if (!stateBrands.length) {
      fetchBrands();
    }
  }, [dispatch, stateBrands]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case CATEGORY_TAB_INDEX:
        return (
          <SupportedTable
            listItems={stateCategories}
            name="Categories"
            updateItemModal={(data) => setModalData(data)}
          />
        );
      case BRAND_TAB_INDEX:
        return (
          <SupportedTable
            listItems={stateBrands}
            name="Brands"
            updateItemModal={(data) => setModalData(data)}
          />
        );
      default:
        return (
          <SupportedTable
            listItems={stateCategories}
            name="Categories"
            updateItemModal={(data) => setModalData(data)}
          />
        );
    }
  };
  return (
    <div className="body-content">
      <div className="admin-brand-category">
        <div className="header d-flex">
          <BrandCategoryHeader
            active={activeTab === CATEGORY_TAB_INDEX}
            prevActive={activeTab - 1 === CATEGORY_TAB_INDEX}
            name="All Categories"
            size={stateCategories.length}
            icon="fas fa-th"
            updateActiveTab={() =>
              activeTab !== CATEGORY_TAB_INDEX &&
              setActiveTab(CATEGORY_TAB_INDEX)
            }
          />
          <BrandCategoryHeader
            active={activeTab === BRAND_TAB_INDEX}
            prevActive={activeTab - 1 === BRAND_TAB_INDEX}
            name="All Brands"
            size={stateBrands.length}
            icon="fas fa-tags"
            updateActiveTab={() =>
              activeTab !== BRAND_TAB_INDEX && setActiveTab(BRAND_TAB_INDEX)
            }
          />
        </div>

        <div style={{ backgroundColor: "white" }}>
          {((activeTab === CATEGORY_TAB_INDEX && stateCategories.length) ||
            (activeTab === BRAND_TAB_INDEX && stateBrands.length)) &&
            renderActiveTab()}
        </div>
      </div>
      {modalData && (
        <>
          <SupplierModal
            item={modalData.item}
            type={modalData.name}
            listItems={
              modalData.name === "Categories" ? stateCategories : stateBrands
            }
          />
          <CancelModal id={modalData.item?.id} name={modalData.name} />
        </>
      )}
    </div>
  );
}

SupportedSupplier.propTypes = {};

export default SupportedSupplier;
