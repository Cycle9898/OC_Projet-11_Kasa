import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Housing from "./pages/Housing";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

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
        element: <Home />
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
