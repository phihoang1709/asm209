/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getAllProductAdmin, getOneProduct } from "../../../services/Products";

export const getProductAdmin = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT-ADMIN"],
    queryFn: async () => {
      return getAllProductAdmin();
    },
  });
  return { data, ...rest };
};

export const UserOneProductQuery = (id?: number | string | undefined) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => {
      return getOneProduct(id);
    },
  });
  return { data, ...rest };
};
