import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";

const MainRoutes = ({
	products,
	addProduct,
	deleteProduct,
	editProduct,
	getOneProduct,
	oneProduct,
}) => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/products"
					element={
						<ProductsPage deleteProduct={deleteProduct} products={products} />
					}
				/>
				<Route
					path="/add"
					element={<AddProductPage addProduct={addProduct} />}
				/>
				<Route
					path="/edit/:id"
					element={
						<EditProductPage
							oneProduct={oneProduct}
							getOneProduct={getOneProduct}
							editProduct={editProduct}
						/>
					}
				/>
			</Route>
		</Routes>
	);
};

export default MainRoutes;
