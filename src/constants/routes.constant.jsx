import Products from "src/container/products";

// UnAuthenticatedRoutes
export const unAuthenticatedRoutesConstant = {
  PRODUCTS: "/",
};
export const UNAUTHENTICATED_ROUTES = [
  {
    path: unAuthenticatedRoutesConstant.PRODUCTS,
    element: <Products />,
  },
];

// AuthenticatedRoutes
export const authenticatedRoutesConstant = {};
export const AUTHENTICATED_ROUTES = [];
