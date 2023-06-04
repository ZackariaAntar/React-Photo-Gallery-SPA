import Axios from "axios";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

function GalleryItem(props) {
	// renaming props to match their original naming conventions.
	let item = props.item;
	let getGalleryData = props.data;

	// creating a local state to manage the conditional rendering for toggling between displaying the photo and its description.
	const [selected, setSelected] = useState(false);
	// creating a put request to increase the likes on the DOM when the heart icon button is clicked.
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
	// creating a delete request to delete the card from the DOM when the trashcan icon button is clicked.
	const deleteItem = () => {
		Axios.delete("/gallery/delete/" + item.id)
			.then((response) => {
				console.log(response);
				getGalleryData();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// rendering the data from the DB as a Card Grid item on the DOM.
	// assigning event handler for toggeled conditional rendering.
	// changing some default MUI styling for the Card component using inline sx.
	return (
		<Card
			key={item.id}
			className="content-card"
			sx={{ maxWidth: 345, bgcolor: "#FBF9FB", boxShadow: 10 }}
		>
			{selected ? (
				<CardContent
					className="content"
					sx={{ minHeight: 269.6 }}
					onClick={() => setSelected(!selected)}
				>
					<Typography
						className="text"
						sx={{ fontSize: "1rem" }}
						variant="body2"
						color="text.primary"
					>
						{item.description}
					</Typography>
				</CardContent>
			) : (
				<CardMedia
					className="content"
					component="img"
					height="300"
					image={item.path}
					alt={item.description}
					onClick={() => setSelected(!selected)}
				/>
			)}
			<CardContent>
				<Typography
					sx={{ fontSize: "1.5rem" }}
					variant="body2"
					color="text.primary"
				>
					{item.likes} people love this!
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="like this photo"
					onClick={increaseLikes}
					sx={{ color: pink[300] }}
				>
					<FavoriteIcon />
				</IconButton>
				<IconButton
					aria-label="Delete this photo"
					onClick={deleteItem}
					color="error"
				>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default GalleryItem;
