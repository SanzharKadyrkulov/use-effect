import React, { useEffect, useState } from "react";

function HomePage() {
	const [isBlue, setIsBlue] = useState(false);

	// useEffect(() => {
	// 	console.log("First mount");
	// }, []);

	// useEffect(() => {
	// 	console.log("update");
	// }, [isBlue]);

	// useEffect(() => {
	// 	return () => {
	// 		console.log("death");
	// 	};
	// }, []);

	// function move(e) {
	// 	console.log(e.clientX, e.clientY);
	// }
	// useEffect(() => {
	// 	window.addEventListener("mousemove", move);
	// 	return () => {
	// 		window.removeEventListener("mousemove", move);
	// 	};
	// }, []);

	return (
		<div>
			<div
				style={{
					width: "100px",
					height: "100px",
					background: isBlue ? "blue" : "red",
				}}
			></div>
			<button onClick={() => setIsBlue(!isBlue)}>change</button>
		</div>
	);
}

export default HomePage;
