import { createBrowserRouter, Navigate } from "react-router-dom";
import pathTo from "./paths/paths";
import App from "../components/App/App";

const appRouter = createBrowserRouter([
  {
    path: pathTo.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={pathTo.homePage} replace />,
      },
    ],
  },
]);

export default appRouter;
