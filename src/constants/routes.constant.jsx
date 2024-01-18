import Products from "src/container/products";
import Home from "src/container/Home";
import Blogs from "src/container/Home/blogs";

// UnAuthenticatedRoutes
export const unAuthenticatedRoutesConstant = {
  PRODUCTS: "/products",
  HOME: "/home",
  BLOGS:"/"
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
  {
    path: unAuthenticatedRoutesConstant.BLOGS,
    element: <Blogs />,
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
