import Axios from "axios";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

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
		<Card className="content-card" sx={{ maxWidth: 345 }}>
			{selected ? (
				<CardContent onClick={() => setSelected(!selected)}>
					<Typography variant="body2" color="text.primary">
						{item.description}
					</Typography>
				</CardContent>
			) : (
				<CardMedia
					component="img"
					height="194"
					image={item.path}
					alt="Paella dish"
					onClick={() => setSelected(!selected)}
				/>
			)}
			<CardContent>
				<Typography variant="body2" color="text.primary">
					{item.likes} people love this!
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="like this photo"
					onClick={increaseLikes}
					color="secondary"
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
