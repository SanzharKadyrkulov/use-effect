import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditProductPage({ editProduct, getOneProduct, oneProduct }) {
	const { id } = useParams();
	const [formValue, setFormValue] = useState({
		title: "",
		price: "",
		description: "",
		image: "",
	});

	useEffect(() => {
		getOneProduct(id);
	}, []);

	useEffect(() => {
		if (oneProduct) {
			setFormValue(oneProduct);
		}
	}, [oneProduct]);

	function handleChange(e) {
		const obj = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(obj);
	}
	function handleSubmit(e) {
		e.preventDefault();
		if (
			!formValue.title.trim() ||
			!formValue.price.trim() ||
			!formValue.description.trim() ||
			!formValue.image.trim()
		) {
			return;
		}
		editProduct(id, formValue);
		setFormValue({
			title: "",
			price: "",
			description: "",
			image: "",
		});
	}
	return (
		<div>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Title</Form.Label>
					<Form.Control
						onChange={(e) => handleChange(e)}
						value={formValue.title}
						type="text"
						placeholder="Enter title"
						name="title"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Price</Form.Label>
					<Form.Control
						onChange={(e) => handleChange(e)}
						value={formValue.price}
						type="text"
						placeholder="Price"
						name="price"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Description</Form.Label>
					<Form.Control
						onChange={(e) => handleChange(e)}
						value={formValue.description}
						type="text"
						placeholder="Description"
						name="description"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Image</Form.Label>
					<Form.Control
						onChange={(e) => handleChange(e)}
						value={formValue.image}
						type="text"
						placeholder="Image"
						name="image"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default EditProductPage;
