import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Pagination.css";

// icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// interface
interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages = 1 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { width } = useWindowDimensions();
  const currentPage = parseInt(searchParams.get("page") || "1");
  // function
  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };
  return (
    <div className="pagination">
      <div className="pagination-wrapper">
        <div
          className={`page page-left-icon page-left-extreme-icon ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => currentPage > 1 && handlePageChange(1)}
        >
          <BiArrowToLeft />
        </div>
        <div
          className={`page page-left-icon ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          <AiOutlineArrowLeft />
        </div>
        {width > 640 ? (
          [...Array(totalPages)].map((_, page) => (
            <div
              className={`page ${page + 1 === currentPage ? "current" : ""}`}
              key={Math.random() * 885644454}
              onClick={() => handlePageChange(page + 1)}
            >
              {`0${page + 1}.`}
            </div>
          ))
        ) : (
          <div className={`page current`}>{`0${currentPage}.`}</div>
        )}

        <div
          className={`page page-right-icon ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
        >
          <AiOutlineArrowRight />
        </div>
        <div
          className={`page page-right-icon page-right-extreme-icon ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() =>
            currentPage < totalPages && handlePageChange(totalPages)
          }
        >
          <BiArrowToRight />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
