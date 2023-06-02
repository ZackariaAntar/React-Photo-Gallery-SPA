import Axios from "axios";
import { useState } from "react";

function GalleryItem(props) {
	let item = props.item;
	let getGalleryData = props.data;

	const [selected, setSelected] = useState(false);

	const increaseLikes = (id) => {
		Axios.put("/gallery/like/" + id)
			.then((response) => {
				console.log(response);
				getGalleryData();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div>
				<p onClick={() => setSelected(!selected)}>
					{selected ? (
						<p>{item.description}</p>
					) : (
						<img src={item.path}></img>
					)}
				</p>

				<p>
					<button onClick={() => increaseLikes(item.id)}>
						I love it!
					</button>
					<p>{item.likes} people love this!</p>
				</p>
			</div>
		</>
	);
}

export default GalleryItem;
