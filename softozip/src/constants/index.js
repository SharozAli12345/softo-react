const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const API_METHODS = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
};

const DEFAULT_ERROR_MESSAGE = "Something went wrong, please try again later";

const QUERY_NAMES = {
    PRODUCTS: ['products'],
};

const ANT_THEME_CONFIG = {}

const QUERY_CONFIG = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: 0,
            staleTime: 5 * 1000,
        },
    }
}


export { BASE_URL, API_METHODS, DEFAULT_ERROR_MESSAGE, QUERY_NAMES, ANT_THEME_CONFIG, QUERY_CONFIG };
