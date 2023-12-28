// src/queries/cardProgramQueries.ts

import { useQuery } from "react-query";
import { productServices } from "../services/product.services";
import { QUERY_NAMES } from '../constants'



const useQueryProducts = (filters = {}) => {
    const customQueryName = QUERY_NAMES.PRODUCTS;
    const customQueryFn = () =>
        productServices.getProducts(filters);
    return useQuery(customQueryName, customQueryFn, {
        refetchOnMount: "always"
    });
};


export {
    useQueryProducts,
};
