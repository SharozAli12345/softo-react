/* eslint-disable no-constant-condition */
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ANT_THEME_CONFIG, QUERY_CONFIG } from "src/constants";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
  unAuthenticatedRoutesConstant,
} from "src/constants/routes.constant";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const queryClient = new QueryClient(QUERY_CONFIG);

function App() {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:"ease-in-out"
    })
  })

  const isAuthenticated = false;

  let router = createBrowserRouter([
    ...(isAuthenticated
      ? [...AUTHENTICATED_ROUTES]
      : [...UNAUTHENTICATED_ROUTES]),
    {
      path: "*",
      element: <Navigate to={unAuthenticatedRoutesConstant.HOME} replace />,
    },
  ]);
  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
