import { useQuery } from "@tanstack/react-query";

// utils
import apiService from "../utils/apiService";

// interface
interface AllProductsProps {
  sortBy?: string | null;
  limit?: string | null;
  page?: string | null;
  category?: string | null;
  type?: string | null;
}

const useAllProducts = ({
  sortBy,
  limit,
  page,
  category,
  type,
}: AllProductsProps) => {
  const categories = category?.split(`,`);

  return useQuery({
    queryKey: ["AllProducts", sortBy, limit, page, category, type],
    queryFn: async () => {
      return await apiService.get(
        `/v1/products?${sortBy ? `&sortBy=${sortBy}` : ``}${
          limit ? `&limit=${limit}` : ``
        }${page ? `&page=${page}` : ``}${
          categories && categories.length > 0
            ? categories.map((category) => `&category=${category}`).join("")
            : ``
        }${type ? `&type=${type}` : ``}`
      );
    }
  });
};

export default useAllProducts;
