import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductsPage({ products }) {
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
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
}

export default ProductsPage;
