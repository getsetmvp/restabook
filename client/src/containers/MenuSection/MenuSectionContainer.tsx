import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuSectionContainer.css";

// components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";

// constants
import { MenuSection } from "../../constants/section.constants";

// hooks
import useAllProducts from "../../hooks/useAllProducts";

// utils
import { groupBy } from "../../utils";

const MenuSectionContainer = () => {
  const navigate = useNavigate();
  const {
    data: allProducts,
    isFetched,
    isRefetching,
  } = useAllProducts({ limit: "100" });
  // state
  const [productsGroupedByCategory, setProductsGroupedByCategory] =
    React.useState<Record<string, Array<any>>>({});
  const [categories, setCategories] = React.useState<Array<any>>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<number>(0);

  // function
  React.useEffect(() => {
    if (allProducts?.data?.results && allProducts?.data?.results.length > 0) {
      const grouped = groupBy(allProducts?.data?.results, "category");
      setProductsGroupedByCategory(grouped);
      setCategories(Object.keys(grouped).map((key) => key));
    }
  }, [isFetched, isRefetching, allProducts]);

  function onCategoryChange(changedCategoryIndex: number) {
    setSelectedCategory(changedCategoryIndex);
  }

  return (
    <div id="special-menu">
      <div className="brush-top"></div>
      <div className="wrapper">
        <SectionHeader
          text={MenuSection.Text}
          title={MenuSection.Title}
          position={MenuSection.Position}
          variant={MenuSection.Variant}
        />
        {categories && productsGroupedByCategory[categories[selectedCategory]] && (
          <div className="special-menu-wrapper">
            <div className="row-md">
              <div className="col-md-3 category-tabs">
                {categories.map((category, index) => (
                  <div
                    key={category}
                    className={`category-tab-item ${
                      index === selectedCategory ? "selected" : ""
                    }`}
                    onClick={() => onCategoryChange(index)}
                  >
                    <span>0{index + 1}.</span> {category}
                  </div>
                ))}
              </div>
              <div className="col-md-9 menu-items">
                {productsGroupedByCategory[categories[selectedCategory]]
                  .slice(0, 4)
                  .map((product, index) => (
                    <div key={product._id} className="menu-item">
                      <div className="menu-item-title">
                        <span>0{index + 1}.</span>
                        {product.name}
                        <div className="menu-item-title-line"></div>
                        <div className="menu-item-price">₹{product.price}</div>
                      </div>
                      <div className="menu-item-desc">
                        {product.description}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 text-center">
          <Button
            label={"View Full Menu \t\t→"}
            variant={"outlined"}
            textColor={"white"}
            onClick={() => navigate("/menu")}
          />
        </div>
      </div>
      <div className="brush-bottom"></div>
    </div>
  );
};

export default MenuSectionContainer;
