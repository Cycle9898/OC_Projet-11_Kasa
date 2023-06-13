import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './pages/Home';

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function Router() {
  return <RouterProvider router={mainRouter} />;
}

export default Router;
