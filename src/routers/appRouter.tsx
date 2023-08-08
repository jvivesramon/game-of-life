import { createBrowserRouter, Navigate } from "react-router-dom";
import pathTo from "./paths/paths";
import App from "../components/App/App";
import { Suspense } from "react";
import { LazyHomePage } from "./lazyPages";

const appRouter = createBrowserRouter([
  {
    path: pathTo.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={pathTo.homePage} replace />,
      },
      {
        path: pathTo.homePage,
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
