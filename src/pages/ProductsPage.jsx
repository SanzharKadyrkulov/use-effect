import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductsPage({ products, deleteProduct }) {
	const navigate = useNavigate();
	return (
		<div>
			{products.map((item) => {
				return (
					<Card key={item.id} style={{ width: "18rem" }}>
						<Card.Img variant="top" src={item.image} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>${item.price}</Card.Text>
							<Button variant="primary">Details</Button>
							<Button
								className="mx-2"
								onClick={() => deleteProduct(item.id)}
								variant="danger"
							>
								Delete
							</Button>
							<Button
								onClick={() => navigate(`/edit/${item.id}`)}
								variant="warning"
							>
								Edit
							</Button>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
}

export default ProductsPage;
