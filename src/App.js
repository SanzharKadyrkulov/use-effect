import React, { useEffect, useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const API = "http://localhost:8000/computers";

function App() {
	const [products, setProducts] = useState([]);
	const [oneProduct, setOneProduct] = useState(null);
	async function getProducts() {
		// const res = await fetch(API);
		// const data = await res.json();
		// console.log(data);
		const { data } = await axios.get(API);
		setProducts(data);
	}
	console.log(products);

	useEffect(() => {
		getProducts();
	}, []);

	async function addProduct(newProduct) {
		await axios.post(API, newProduct);
		getProducts();
	}

	async function deleteProduct(id) {
		await axios.delete(`${API}/${id}`);
		getProducts();
	}

	async function editProduct(id, prodEdit) {
		await axios.patch(`${API}/${id}`, prodEdit);
		getProducts();
	}

	async function getOneProduct(id) {
		const { data } = await axios.get(`${API}/${id}`);
		setOneProduct(data);
	}

	return (
		<MainRoutes
			getOneProduct={getOneProduct}
			oneProduct={oneProduct}
			editProduct={editProduct}
			deleteProduct={deleteProduct}
			addProduct={addProduct}
			products={products}
		/>
	);
}

export default App;
