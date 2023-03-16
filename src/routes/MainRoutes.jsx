import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
			</Route>
		</Routes>
	);
};

export default MainRoutes;
