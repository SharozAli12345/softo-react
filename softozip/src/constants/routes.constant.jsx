import Products from "src/container/products";
import Home from "src/container/Home";

// UnAuthenticatedRoutes
export const unAuthenticatedRoutesConstant = {
  PRODUCTS: "/products",
  HOME: "/"

};

export const UNAUTHENTICATED_ROUTES = [
  {
    path: unAuthenticatedRoutesConstant.PRODUCTS,
    element: <Products />,
  },
  {
    path: unAuthenticatedRoutesConstant.HOME,
    element: <Home />,
  },
];

// export const unAuthenticatedRoutesConstant = {
//   HOME: "/",

// };

// export const UNAUTHENTICATED_ROUTES = [
//   {
//     path: unAuthenticatedRoutesConstant.HOME,
//     element: <Home />,
//   },
// ];

// AuthenticatedRoutes
export const authenticatedRoutesConstant = {};
export const AUTHENTICATED_ROUTES = [];
