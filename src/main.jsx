import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainRoute from "./components/MainRoute/MainRoute";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import "./index.css";
import ProductDetails from "./components/pages/ProductDetails";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainRoute,
		children: [
			{ index: true, Component: Home },
			{ path: "/products", Component: Products },
			{ path: "/product/:id", Component: ProductDetails },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
