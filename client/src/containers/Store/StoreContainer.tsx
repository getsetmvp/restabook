import React from "react";
import { useSearchParams } from "react-router-dom";
import "./StoreContainer.css";

// components
import Layout from "../../components/Layout/Layout";
import ImageBackground from "../../components/ImageBackground/ImageBackground";
import Input from "../../components/Input/Input";

// constants
import { StorePage } from "../../constants/page.constants";

// hooks
import useAllProducts from "../../hooks/useAllProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";

// interface
import { Product } from "../../interface";

const StoreContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const { data: allProducts } = useAllProducts({
    sortBy,
    limit: limit ? limit : "12",
    page,
    category,
    type,
  });
  // state
  const [sortFilter, setSortFilter] = React.useState("price");

  // function
  React.useEffect(() => {
    searchParams.set("sortBy", sortFilter);
    setSearchParams(searchParams);
  }, [sortFilter, searchParams, setSearchParams]);
  return (
    <Layout pageTitle={StorePage.Title}>
      <ImageBackground
        img={StorePage.Img}
        mainTitle={StorePage.ImgTitle}
        extraText={StorePage.ImgText}
      />
      <div id="store-container">
        <div className="section-bg-image">
          <img
            src={require("../../assets/images/section-bg.png")}
            alt="Section Background"
          />
        </div>
        <div className="wrapper">
          {/* @TODO - Add Filters Popup */}
          <div className="results-number-wrapper">
            <div className="sm:flex justify-between items-center">
              <div className="sm:w-[50%] mb-7 sm:mb-0 results-header">
                Showing{" "}
                <span className="results-header-count">{`${
                  (allProducts?.data.page - 1) * allProducts?.data.limit + 1
                } - ${Math.min(
                  allProducts?.data.page * allProducts?.data.limit,
                  allProducts?.data.totalResults
                )}`}</span>{" "}
                of {allProducts?.data.totalResults} results
              </div>
              <div className="sm:w-[50%] sm:text-right">
                <Input
                  type={"dropdown"}
                  dropdownOptions={{
                    options: [
                      { label: "Price: High to Low", value: "price:desc" },
                      { label: "Price: Low to High", value: "price" },
                    ],
                  }}
                  value={sortFilter}
                  onChange={(value) => setSortFilter(value || "")}
                />
              </div>
            </div>
          </div>
          <div className="products-container my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts?.data &&
              allProducts.data.results?.length > 0 &&
              allProducts.data.results.map((product: Product) => (
                <ProductCard product={product} key={product._id} />
              ))}
          </div>
          <Pagination totalPages={allProducts?.data.totalPages || 1} />
        </div>
      </div>
    </Layout>
  );
};

export default StoreContainer;
