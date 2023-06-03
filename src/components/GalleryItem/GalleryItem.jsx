import Axios from "axios";
import { useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
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
				<CardContent>
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
				<IconButton
					color="success"
					onClick={() => setSelected(!selected)}
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>

			{/* <div onClick={() => setSelected(!selected)}>
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
			</div> */}
		</Card>
	);
}

export default GalleryItem;
