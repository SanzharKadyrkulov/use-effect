import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import AddProductPage from "../pages/AddProductPage";

const MainRoutes = ({ products, addProduct }) => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/products"
					element={<ProductsPage products={products} />}
				/>
				<Route
					path="/add"
					element={<AddProductPage addProduct={addProduct} />}
				/>
			</Route>
		</Routes>
	);
};

export default MainRoutes;
