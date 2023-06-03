import Axios from "axios";
import { useState } from "react";

function GalleryItem(props) {
	let item = props.item;
	let getGalleryData = props.data;

	const [selected, setSelected] = useState(false);

	const increaseLikes = () => {
		Axios.put("/gallery/like/" + item.id)
			.then((response) => {
				console.log(response);
				getGalleryData();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteItem = () => {
		Axios.delete('/gallery/delete/'+item.id)
		.then((response)=>{
			console.log(response);
			getGalleryData();
		}).catch((err)=>{
			console.log(err);
		})
	}

	return (
		<>
			<div onClick={() => setSelected(!selected)}>
				{selected ? (
					<div>
						<p>{item.description}</p>
					</div>
				) : (
					<div>
						<img src={item.path}></img>
					</div>
				)}
			</div>

			<div>
				<button onClick={increaseLikes}>I love it!</button>
				<button onClick={deleteItem}>Delete it!</button>
				<p>{item.likes} people love this!</p>
			</div>
		</>
	);
}

export default GalleryItem;
