import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HousingPage from "./pages/HousingPage";

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
				element: <HomePage />
			},
			{
				path: "/housing",
				element: <Navigate to="/" replace />
			},
			{
				path: "/housing/:housingID",
				element: <HousingPage />
			},
			{
				path: "/about",
				element: <AboutPage />
			},
			{
				path: "/error",
				element: <ErrorPage />
			},
			{
				path: "*",
				element: <Navigate to="/error" replace />
			}
		]
	}
]);

function Router() {
	return <RouterProvider router={defineRoutes} />;
}

export default Router;
