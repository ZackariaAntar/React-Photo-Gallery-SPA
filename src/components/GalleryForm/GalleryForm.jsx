import Axios from "axios";
import { useState } from "react";

function GalleryForm(props) {
	// renaming props to match original naming conventions.
	let getGalleryData = props.data;

	//creating two states to hold form input values that will be used in the post request.
	const [pathInput, setPathInput] = useState("");
	const [descInput, setDescInput] = useState("");

	// post request to the database using the input states
	// clearing the input fields and calling the get request.
	const addToGallery = () => {
		Axios.post("/gallery/new", { path: pathInput, description: descInput })
			.then((result) => {
				console.log(result);
				setPathInput("");
				setDescInput("");
				getGalleryData();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// rendering the form on the DOM.
	// setting up event listeners on each input field using annymous functions
	//	and an event handler to make the post request as the form is submitted.
	return (
		<>
			<form className="GalleryForm" onSubmit={addToGallery}>
				<div className="pictureInput">
					<label>PICTURE URL:</label>
					<input
						value={pathInput}
						type="text"
						placeholder="Add the url to your picture here"
						id=""
						onChange={(e) => setPathInput(e.target.value)}
					/>
				</div>
				<div className="descriptionInput">
					<label>DESCRIPTION:</label>
					<input
						value={descInput}
						type="text"
						placeholder="Brief description of your picture"
						id=""
						onChange={(e) => setDescInput(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</>
	);
}

export default GalleryForm;
