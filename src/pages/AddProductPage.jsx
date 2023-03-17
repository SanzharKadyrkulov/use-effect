import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddProductPage({ addProduct }) {
	const [formValue, setFormValue] = useState({
		title: "",
		price: "",
		description: "",
		image: "",
	});

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
		addProduct(formValue);
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

export default AddProductPage;
