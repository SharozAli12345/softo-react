import ApiService from "../utils/axios";
import { ServicesUrlEndpoints } from "../constants/serviceEndpoint.constant";

const getProducts = (params = {}) => {
    return ApiService.get(
        `${ServicesUrlEndpoints.GET_PRODUCT}`,
        { params }
    );
};

export const productServices = {
    getProducts
};
