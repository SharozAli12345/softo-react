import axios from 'axios';
import { BASE_URL, API_METHODS, DEFAULT_ERROR_MESSAGE } from '../constants';
import { notification } from "antd";

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  }
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: getHeaders(),
});


const handleApiResponse = (response) => {
  return response?.data;
};

const handleApiRequest = async (
  method,
  url,
  data,
  requestConfig = {},
  postRequestPrams = {}
) => {
  try {
    return await axiosInstance.request({
      method,
      url,
      data,
      ...requestConfig,
      postRequestPrams
    });
  } catch (error) {
    const message =
      error.response?.data?.message ||
      DEFAULT_ERROR_MESSAGE;

    notification.error({
      placement: "bottomRight",
      message: `Error: ${message}`,
    });

    throw error;
  }
};

const ApiService = {
  get: async (url = "", config = {}) => {
    const response = await handleApiRequest(API_METHODS.GET, url, {}, config);
    return handleApiResponse(response);
  },
  post: async (url, data, requestConfig = {}, postRequestPrams = {}) => {
    const response = await handleApiRequest(
      API_METHODS.POST,
      url,
      data,
      requestConfig,
      postRequestPrams
    );
    return handleApiResponse(response);
  },
  put: async (url, data, requestConfig = {}) => {
    const response = await handleApiRequest(
      API_METHODS.PUT,
      url,
      data,
      requestConfig
    );
    return handleApiResponse(response);
  },
  patch: async (url, data, requestConfig = {}) => {
    const response = await handleApiRequest(
      API_METHODS.PATCH,
      url,
      data,
      requestConfig
    );
    return handleApiResponse(response);
  },
  delete: async (url = "", config = {}) => {
    const response = await handleApiRequest(API_METHODS.DELETE, url, config);
    return handleApiResponse(response);
  },
};

export default ApiService;

// Usage example in a React component (e.g., within App.jsx)
// async function loadProducts() {
//   try {
//     const products = await api.get('/products');
//     setProducts(products);
//   } catch (error) {
//     setError(error);
//   } finally {
//     setLoading(false);
//   }
// }
