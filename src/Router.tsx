import { createBrowserRouter,RouterProvider,Outlet,Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Housing from "./pages/Housing";

//Layout component to add header and footer on all pages
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

//Define all routes from Layout component
const defineRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/housing",
        element: <Navigate to="/" replace />
      },
      {
        path: "/housing/:housingID",
        element: <Housing />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={defineRoutes} />;
}

export default Router;
