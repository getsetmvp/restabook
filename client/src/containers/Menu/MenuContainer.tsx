import React from "react";
import "./MenuContainer.css";

// components
import Layout from "../../components/Layout/Layout";
import ImageBackground from "../../components/ImageBackground/ImageBackground";

// constants
import { MenuPage } from "../../constants/page.constants";

// hooks
import useAllProducts from "../../hooks/useAllProducts";

// utils
import { groupBy } from "../../utils";
import MenuCategoryItem from "../../components/MenuCategoryItem/MenuCategoryItem";

const MenuContainer = () => {
  const {
    data: allProducts,
    isFetched,
    isRefetching,
  } = useAllProducts({ limit: "100" });
  // state
  const [productsGroupedByCategory, setProductsGroupedByCategory] =
    React.useState<Record<string, Array<any>>>({});
  const [categories, setCategories] = React.useState<Array<any>>([]);

  // function
  React.useEffect(() => {
    if (allProducts?.data.results && allProducts?.data.results.length > 0) {
      const grouped = groupBy(allProducts?.data.results, "category");
      setProductsGroupedByCategory(grouped);
      setCategories(Object.keys(grouped).map((key) => key));
    }
  }, [isFetched, isRefetching, allProducts]);
  return (
    <Layout pageTitle={MenuPage.Title}>
      <ImageBackground
        img={MenuPage.Img}
        mainTitle={MenuPage.ImgTitle}
        extraText={MenuPage.ImgText}
      />
      <div className="wrapper">
        {categories.map((category, index) => (
          <MenuCategoryItem
            key={category}
            category={category}
            products={productsGroupedByCategory[category]}
            number={`0${index + 1}.`}
            img={`${index + 5}.jpg`}
          />
        ))}
      </div>
      <div className="dot-seperator">
        <span></span>
      </div>
    </Layout>
  );
};

export default MenuContainer;
